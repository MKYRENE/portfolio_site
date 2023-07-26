//IMPORTING EXPRESS FROM PACKAGE
const express = require('express');
//IMPORT OUR ROUTES 
const main_routes = require('./routes/main_routes')
const view_routes = require('./routes/view_routes')

//CREATE THE SERVER PORT NUMBER NOTE: IF PORT IS 
//IF FALSY MOVE PORT NO. > 3333
const PORT = process.env.PORT || 3333;

//CREATING SERVER CALLING EXPRESS
const server = express();

//IMPORTANT MIDDLEWARE NOTE: TO SHARE ANY FILE WITHIN SPECIFIC FOLDER FOR ROUTES
//GENERATE AUTOMATIC ROUTES TO ANY FILE WITHIN FRONTEND AKA "PUBLIC"
server.use(express.static('../frontend'))
//sending express JSON file
server.use(express.json());



//LOADING ALL ROUTES >>>>
server.use('/main', main_routes);
//ROUTE FOR HOMEPAGE 
server.use('/', view_routes);

//LAUNCHING SERVER
server.listen(PORT, () => console.log('Server started on port %s', PORT));