import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import {
  admin as adminPlugin,
  createAuthMiddleware,
  oneTap,
} from "better-auth/plugins";
import { sendEmail, sendEmailResetPassword } from "./mail/client-nodemailer";
import { ac, admin, medecin, user } from "./permissions";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailVerification: {
    expiresIn: 60 * 60,
    autoSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "vérification de l'adresse mail",
        url: url,
        userName: user.name,
      });
    },
  },

  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      void sendEmailResetPassword({
        to: user.email,
        subject: "Modifier votre mot de passe",
        url: url,
        userName: user.name,
      });
    },
  },

  baseURL: process.env.NEXT_PUBLIC_APP,

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectURI: `${process.env.NEXT_PUBLIC_APP}/api/auth/callback/google`,
    },
  },

  plugins: [
    oneTap(),
    nextCookies(),
    adminPlugin({
      ac,
      roles: {
        admin,
        user,
        medecin,
      },
      defaultRole: "user",
      adminUserIds: ["KA2f6Uj8jwE7zmVpr6tCxsA0NnQ18m8L"],
    }),
  ],

  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path === "/sign-in/email") {
        const email = ctx.body?.email;

        if (!email) return;
        console.log("Middleware better-auth");
        console.log(email);
        const currentUser = await prisma.user.findUnique({
          where: { email },
        });

        if (currentUser) {
          if (currentUser.is_active === false || currentUser.banned)
            throw new APIError(403, {
              type: "account_banned",
              message: "Votre compte a été banni ou non activé.",
            });

          if (currentUser.emailVerified === false)
            throw new APIError(403, {
              type: "email_not_verified",
              message:
                "Votre compte n'a pas encore été activé, veillez consultez votre boite mail",
            });
        }
      }
    }),
  },

  session: {
    expiresIn: 60 * 60 * 24 * 3,
    updateAge: 60 * 60 * 24,
  },
});
