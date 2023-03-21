
// resolverの関数がPrismaの実行結果を返す
export const resolvers = {
  Query: {
    tasks: (_parent, _args, ctx) => {
      return ctx.prisma.task.findMany();
    },
  },
};
