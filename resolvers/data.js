import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from './auth';

export default {
  Query: {
    allData: (parent, args, { models }) => {
      return models.Data.findAll();
    },
    getData: (parent, { id }, { models }) => {
      return models.Data.findOne({ where: { id } });
    },
  },

  Data: {
    user: async (data, args, { models }) => {
      console.log(data.userId);
      return models.User.findOne({ where: { id: data.userId } });
    },
  },

  Mutation: {
    createData: combineResolvers(
      isAuthenticated,
      (parent, { text, groupId, link }, { models, userId }) => {
        console.log(text, groupId, link, userId);
        return models.Data.create({ text, groupId, link, userId });
      }
    ),
  },
};
