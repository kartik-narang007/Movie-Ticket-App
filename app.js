const express = require('express');
const mongoConnect = require('./connection/db').mongoConnect;
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Serve static files from the "views" directory

app.use(express.json());
app.use('/movies', movieRoutes);

app.use('/', (req, res) => {
  res.send('Welcome To Movie App Backend');
});

mongoConnect(() => {
  app.listen(3000);
});
