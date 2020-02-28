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
    cover: [Cover]
}


extend type Query {
    findGameByName(name: String!): [Game],
  }




`;
