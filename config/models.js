/* globals module */

module.exports.models = {
  migrate: 'safe',
  datastore: 'mysql',
  attributes: {
    createdAt: {
      type: 'number',
      autoCreatedAt: true
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true
    },
    id: {
      type: 'number',
      autoIncrement: true
    },
    //--------------------------------------------------------------------------
    //  /\   Using MongoDB?
    //  ||   Replace `id` above with this instead:
    //
    // ```
    // id: { type: 'string', columnName: '_id' },
    // ```
    //--------------------------------------------------------------------------
  }
};
