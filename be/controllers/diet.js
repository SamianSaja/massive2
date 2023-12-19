import db from '../config/db.js';
const controller = {}

// diet khusus
controller.getDiet = async(req, res) => {
    db.query(`SELECT * FROM diet_khusus WHERE category IS NOT NULL`, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
  }

controller.getDiabetik = async(req, res) => {
  db.query(`SELECT * FROM diet_khusus WHERE category = 'Diabetik'`, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
}

controller.getVegetarian = async(req, res) => {
  db.query(`SELECT * FROM diet_khusus WHERE category = 'Vegetarian'`, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
}

controller.getVegan = async(req, res) => {
    db.query(`SELECT * FROM diet_khusus WHERE category = 'Vegan'`, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
  }

  controller.searchDiet = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM diet_khusus WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}
  
  controller.createDiet = async(req, res) => {
    const { uuid, food_name, ingredient, food_making, category } = req.body;
    const img = req.file.path;
  
    db.query(`INSERT INTO diet_khusus (uuid, food_name, ingredient, food_making, img, category, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, food_name, ingredient, food_making, img, category], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
  }

  controller.updateDiet = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, food_name, ingredient, food_making, category } = req.body;
    const img = req.file.path;

    db.query(`UPDATE diet_khusus SET uuid = ?, food_name = ?, ingredient = ?, food_making = ?, img = ?, category = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, food_name, ingredient, food_making, img, category, id], (err) => {
       if (err) throw err;
       res.json({ message: 'resep updated', id });

    })
}
  
  controller.deleteDiet = async(req, res) => {
    const id = req.params.uuid;
    db.query(`DELETE FROM diet_khusus WHERE uuid = ?`, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'resep deleted' });
      });
  }
  
  export default controller