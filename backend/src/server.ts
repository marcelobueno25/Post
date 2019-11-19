import app from './app';

const port = 3333;

app.get('/', (req, res) => {
  res.send('Server running!');
});

app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`server is listening on ${port}`);
});
