import db from '../config/db.js';
const controller = {}

controller.getTips = async(req, res) => {
    db.query('SELECT * FROM tips_triks', (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.searchTips = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM tips_triks WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.createTips = async(req, res) => {
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`INSERT INTO tips_triks (uuid, title, desk, fill_content, img, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, title, desk, fill_content, img], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.updateTips = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`UPDATE tips_triks SET uuid = ?, title = ?, desk = ?, fill_content = ?, img = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, title, desk, fill_content, img, id], (err) => {
       if (err) throw err;
       res.json({ message: ' Tips updated', id });

    })
}

controller.deleteTips = async(req, res) => {
  const id = req.params.uuid;
  db.query(`DELETE FROM tips_triks WHERE uuid = ?`, [id], (err) => {
      if (err) throw err;
      res.json({ message: 'Tips deleted' });
    });
}

export default controller