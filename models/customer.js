module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		text: DataTypes.string,
		complete: DataTypes.BOOLEAN
	});

	var Customer.associate = function(models){
		Customer.hasMany(models.Burger, {
			onDelete: cascade
		});
	};

	return Customer;
};