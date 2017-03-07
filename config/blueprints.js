/***************************************************************************
 * Automatically expose implicit routes are the DEVIL.                     *
 * Never ... EVER! allow these under any circumstances whatsoever.         *
 ***************************************************************************/

module.exports.blueprints = {

  actions: false,
  rest: false,
  shortcuts: false
  // prefix: '',
  // pluralize: false,
  // autoWatch: true
};
