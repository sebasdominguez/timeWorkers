const User = require("./User");
const Registry = require("./Registry");

Registry.belongsTo(User, { constraints: false })
User.hasMany(Registry);

module.exports = { User, Registry };
