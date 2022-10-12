require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

const app = express();

const port = process.env.PORT || process.env.API_PORT;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

// Routes
const businessRoutes = require('./src/routes/business.routes')

// middleware
app.use('/api/v1/', businessRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});