"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
export type UserProps = {
  Name: string;
  Age: number;
  City: string;
};
export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}
export async function createUser(data: UserProps) {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.Name,
        age: data.Age,
        city: data.City,
      },
    });
    revalidatePath("/");
    return user;
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkUsers(users: UserProps[]) {
  try {
    for (const user of users) {
      await createUser(user);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUsers() {
  try {
    await prisma.user.deleteMany();
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
