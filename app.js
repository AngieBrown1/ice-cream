//Import the express module
import express from 'express';

//Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3001;

// Enable static file serving 
app.use(express.static('public'));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at 
    http://localhost:${PORT}`);
});