import db from '../config/db.js';
const controller = {}

controller.getRecepts = async(req, res) => {
    db.query('SELECT * FROM healty_recepts', (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.searchRecept = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM healty_recepts WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.createRecept = async(req, res) => {
    const { uuid, food_name, ingredient, food_making } = req.body;
    const diet = false;
    const img = req.file.path;

    db.query(`INSERT INTO healty_recepts (uuid, food_name, ingredient, food_making, img, diet, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, food_name, ingredient, food_making, img, diet], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.updateRecept = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, food_name, ingredient, food_making, diet } = req.body;
    const img = req.file.path;

    db.query(`UPDATE healty_recepts SET uuid = ?, food_name = ?, ingredient = ?, food_making = ?, img = ?, diet = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, food_name, ingredient, food_making, img, diet, id], (err) => {
       if (err) throw err;
       res.json({ message: 'resep updated', id });

    })
}

controller.deleteRecept = async(req, res) => {
  const id = req.params.uuid;
  db.query(`DELETE FROM healty_recepts WHERE uuid = ?`, [id], (err) => {
      if (err) throw err;
      res.json({ message: 'resep deleted' });
    });
}

export default controller