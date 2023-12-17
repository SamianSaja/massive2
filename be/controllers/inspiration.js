import db from '../config/db.js';
const controller = {}

controller.getIns = async(req, res) => {
    db.query('SELECT * FROM inspirations', (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.searchIns = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM inspirations WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.createIns = async(req, res) => {
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`INSERT INTO inspirations (uuid, title, desk, fill_content, img, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, title, desk, fill_content, img], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.updateIns = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`UPDATE inspirations SET uuid = ?, title = ?, desk = ?, fill_content = ?, img = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, title, desk, fill_content, img, id], (err) => {
       if (err) throw err;
       res.json({ message: 'list article updated', id });

    })
}

controller.deleteIns = async(req, res) => {
  const id = req.params.uuid;
  db.query(`DELETE FROM inspirations WHERE uuid = ?`, [id], (err) => {
      if (err) throw err;
      res.json({ message: 'article deleted' });
    });
}

export default controller