export default `
  type Query {
    history (id: String! sequence: Int): [Message]
    profile (id: String!): User
    whoami: String
  }
`
