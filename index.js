const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('Educational API is Running');
});



app.listen(port, () => {
    console.log('Educational Server running on port', port);
})