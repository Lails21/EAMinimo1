const express = require ('express');
const morgan = require('morgan');
const app = express();
const cors = require ('cors');
const {mongoose } = require('./database');

// Settings (configuración)
app.set('port', process.env.PORT || 3000);

// Middlewares (ayuda para procesar los datos)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use(require('./routes/routes'));

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})