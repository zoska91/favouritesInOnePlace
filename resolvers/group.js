export default {
  Query: {
    allGroups: (parent, args, { models }) => {
      return models.Group.findAll();
    },
    getGroup: (parent, { id }, { models }) => {
      return models.Group.findOne({ where: { id } });
    }
  },

  Mutation: {
    createGroup: (parent, { name }, { models }) => models.Group.create({ name })
  }
};
