import db from '../config/db.js';
const controller = {}

controller.getRecepts = async(req, res) => {
    db.query(`SELECT * FROM diet_khusus WHERE category IS NULL`, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.searchRecept = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM diet_khusus WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.createRecept = async(req, res) => {
    const { uuid, food_name, ingredient, food_making, diet } = req.body;
    const img = req.file.path;

    db.query(`INSERT INTO diet_khusus (uuid, food_name, ingredient, food_making, img, createdAt, updatedAt) VALUES ( ?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, food_name, ingredient, food_making, img], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.updateRecept = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, food_name, ingredient, food_making, diet } = req.body;
    const img = req.file.path;

    db.query(`UPDATE diet_khusus SET uuid = ?, food_name = ?, ingredient = ?, food_making = ?, img = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, food_name, ingredient, food_making, img, id], (err) => {
       if (err) throw err;
       res.json({ message: 'resep updated', id });

    })
}

controller.deleteRecept = async(req, res) => {
  const id = req.params.uuid;
  db.query(`DELETE FROM diet_khusus WHERE uuid = ?`, [id], (err) => {
      if (err) throw err;
      res.json({ message: 'resep deleted' });
    });
}

controller.getSaved = async(req, res) => {
  const user_id = req.params.user_id;
  db.query('SELECT id, diet_khusus.food_name, diet_khusus.img, diet_khusus.category, saved.userId FROM diet_khusus LEFT JOIN saved ON diet_khusus.uuid = saved.contentId WHERE saved.userId = ?', [user_id], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
}

controller.addSaved = async(req, res) => {
  const { userId, contentId } = req.body;

  db.query(`INSERT INTO saved (userId, contentId) VALUES (?, ?)`, [userId, contentId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
}

export default controller
