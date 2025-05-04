const path = require('path');
const express = require('express')
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({message: 'hello from server!'})
});

app.listen(PORT, () => {
    console.log(`sever is online on port: ${PORT} `)
})