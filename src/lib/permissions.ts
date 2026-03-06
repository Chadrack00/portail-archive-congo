import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

export const statement = {
  ...defaultStatements,
  project: [
    "user",
    "admin",
    "medecin",
  ],
} as const;

export const ac = createAccessControl(statement);

export const user = ac.newRole({
  project: ["user"],
});

export const admin = ac.newRole({
  project: ["admin"],
  ...adminAc.statements,
});

export const medecin = ac.newRole({
  project: ["medecin"],
});
