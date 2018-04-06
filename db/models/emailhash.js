"use strict";

module.exports = (sequelize, DataTypes) => {
  const EmailHash = sequelize.define("EmailHash", {
    sha1: DataTypes.STRING,
  }, {});

  EmailHash.associate = function(models) {
    EmailHash.belongsToMany(models.Breach, { through: "BreachedHashes" });
  };

  return EmailHash;
};