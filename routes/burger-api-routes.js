var db = requires("../models");

module.exports = function(app) {
	app.get("/api/burger", function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger) {
			res.json(dbBurger)
		});
	});

	app.post("/api/burger", function(req, res) {
		db.Burger.create({
			test: req.body.text,
			complete: req.body.complete
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});

	app.delete("/api/burger/:id", function(req, res) {
		db.Burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbBurger) {
			res.json(dbBurger)
		});
	});

	app.put("/api/Burger", function(req, res))

}
