module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		text: DataTypes.string,
		allowNull: false,
		validate: {
			len: [1]
		}
	});

	Burger.associate = function(models) {
		Burger.belongsTo (models.Customer, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Burger;
};