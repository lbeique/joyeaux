const app = require('./app.js');

const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});