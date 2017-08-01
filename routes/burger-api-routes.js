var db = requires("../models");
// var express = require("express");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Burger.findall({}).then(function(burgers) {
			var hbsObject= {
				burgers: burgers
			};			
		})
		
	});

	app.post("/api/burgers", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function() {
	    	res.redirect("/");
		});
	});

	app.delete("/api/burgers/:id", function(req, res) {
		db.Burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbBurger) {
			res.json(dbBurger)
		});
	});

	app.put("/api/burgers", function(req, res) {
		db.Burger.update({
			devoured: true
		},
		{
			where: {
				id: req.params.id
			}
		}).then(function() {
			res.redirect("/");
		})

};
