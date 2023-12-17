import db from '../config/db.js';
const controller = {}

controller.getArticles = async(req, res) => {
    db.query('SELECT * FROM list_article', (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.searchArticle = async(req, res) => {
    const id = req.params.uuid;
    db.query(`SELECT * FROM list_article WHERE uuid = ?`, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.createArticle = async(req, res) => {
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`INSERT INTO list_article (uuid, title, desk, fill_content, img, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`, [uuid, title, desk, fill_content, img], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
}

controller.updateArticle = async(req, res) => {
    const id = req.params.uuid;
    const { uuid, title, desk, fill_content } = req.body;
    const img = req.file.path;

    db.query(`UPDATE list_article SET uuid = ?, title = ?, desk = ?, fill_content = ?, img = ?, updatedAt = NOW() WHERE uuid = ?`, [uuid, title, desk, fill_content, img, id], (err) => {
       if (err) throw err;
       res.json({ message: 'list article updated', id });

    })
}

controller.deleteArticle = async(req, res) => {
  const id = req.params.uuid;
  db.query(`DELETE FROM list_article WHERE uuid = ?`, [id], (err) => {
      if (err) throw err;
      res.json({ message: 'article deleted' });
    });
}

export default controller