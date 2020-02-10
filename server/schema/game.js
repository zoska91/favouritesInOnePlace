export default `
type Game {
    id: Int,
    name: String,
    rating: Float
}

extend type Query {
    findGameByName(name: String!): [Game]   
  }


`;
