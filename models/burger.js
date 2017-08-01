"use strict";
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			text: DataTypes.STRING,
			allowNull: false,
			// validate: {
			// 	len: [1]
			// }
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});
	return Burger;
};
