export default `
type Data {
  id: Int!
  text: String
  groupId: Int!
  link: String
  userId: Int!
  user: User!
}

extend type Query {
  allData: [Data!]!
  getData(id: Int!): Data 
}

extend type Mutation {
  createData(text: String, groupId: Int!, link: String, userId: Int): Data
}
`;
