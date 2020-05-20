export default `
type Cover {
  id: Int,
  image_id:	String,
  url:	String,
  game: Int
}

type Game {
    id: Int,
    name: String,
    rating: Float,
    summary: String,
    url: String,
    cover: [Cover],
    first_release_date: String
}


extend type Query {
    findGameByName(name: String!): [Game],
    findGameById(id: Int!): [Game],
  }


`;
