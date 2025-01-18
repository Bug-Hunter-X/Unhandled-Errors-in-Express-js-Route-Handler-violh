const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!'})
})
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});