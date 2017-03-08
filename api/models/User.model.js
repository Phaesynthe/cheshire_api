module.exports = {
  attributes: {
    email: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  },

  // Explicit settings, because defaults that are explained in archaic
  // leather bound tomes is the foundation to the outer circles of hell
  datastore: 'mysql',
  migrate: 'safe'
};
