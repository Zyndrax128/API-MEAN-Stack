const express = require('express');
const app = express();
const api = require('./api/v1/index');
const cors  = require('cors');

app.set('port', (process.env.port || 3000));

app.use(cors());
app.use('/api/v1', api); // localhost:300/api/v2

app.listen(app.get('port'), () => {
    console.log(`express server listening on port ${app.get('port')}`)
});



