export default `
type Data {
  id: Int!
  text: String
  groupId: Int!
  link: String
  userId: Int!
  user: User!
  Img: String
  title: String
}

extend type Query {
  allData: [Data!]!
  getData(id: Int!): Data 
}

extend type Mutation {
  createData(text: String, groupId: Int!, link: String, userId: Int, Img: String, title: String): Data
}
`;
