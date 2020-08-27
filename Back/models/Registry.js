const db = require("../db");
const S = require("sequelize");
const User = require("./User");

class Registry extends S.Model {}

Registry.init(
  {
    username: {
      type: S.TEXT,
    },
    entry: {
      type: S.DATE,
    },
    out: {
      type: S.DATE
    },
    lunchStart: {
      type: S.DATE
    },
    lunchEnd: {
      type: S.DATE
    },
    totalMillisec: {
      type: S.VIRTUAL,
        get(){
          const total = this.out - this.entry;
          return total
        }
    }
  },
  { sequelize: db, modelName: "Registry" }
)

module.exports = Registry;
