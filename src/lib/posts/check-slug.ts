import { prisma } from "../prisma";
import { notFound } from "next/navigation";

export async function checkSlug(slug: string) {
    const user = await prisma.user.findUnique({
        where: {
            slug,
        },
    });
    if (!user) {
        notFound();
    }
    return user;
}