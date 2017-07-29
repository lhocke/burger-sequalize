module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		text: DataTypes.string,
		complete: DataTypes.BOOLEAN
	});
	return Burger
};