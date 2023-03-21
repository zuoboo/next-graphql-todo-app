import { gql } from "apollo-server-micro";

// GraphQLスキーマを定義
export const typeDefs = gql`
  type Task {
    id: Int
    title: String
    done: Boolean
  }

  type Query {
    tasks: [Task]!
  }
`;
