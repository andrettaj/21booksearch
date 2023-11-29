const typeDefs = `
  type Tech {
    _id: ID!
    name: String!
  }

  type Book {
    book_id: ID!
    arthurs: String!
    description: String!
    title: String!
    image_votes: String!
    link: String!
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
