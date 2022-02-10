const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB();

const hospitals = require('./routes/hospitals');

const app = express();

app.use(express.json())
app.use('/api/v1/hospitals', hospitals)

const PORT = process.env.PORT;

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, 'mode on port', PORT));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})