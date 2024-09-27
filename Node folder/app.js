const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! This is Tanush! This is an express app!'));

app.listen(port, () => console.log(`Express app running on port ${port}!`));
