import { PrismaClient } from "@prisma/client";
import { prisma } from "../lib/prisma";


// PrismaClientにアクセスして、データベースにクエリを送信できるようにするために、contextを作成
export type Context = {
  prisma: PrismaClient;
};

export async function createContext(): Promise<Context> {
  return {
    prisma,
  };
}
