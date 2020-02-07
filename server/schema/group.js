export default `
type Group {
  id: Int!
  name: String!
}

extend type Query {
  allGroups: [Group!]!
  getGroup(id: Int!): Group
}

extend type Mutation {
  createGroup(name: String!): Group
}
`;
