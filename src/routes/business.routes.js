const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users.controller');
const productsController = require('../controllers/products.controller');
const transactionsController = require('../controllers/transactions.controller');
  

// products
router.get('/products/', productsController.findAll);
router.post('/products/', productsController.create);
router.get('/products/:id', productsController.findById);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.delete);

// users
router.get('/users/', usersController.findAll);
router.post('/users/', usersController.create);
router.get('/users/:id', usersController.findById);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// users
router.get('/transactions/', transactionsController.findAll);
router.post('/transactions/', transactionsController.create);
router.get('/transactions/:id', transactionsController.findById);
router.put('/transactions/:id', transactionsController.update);
router.delete('/transactions/:id', transactionsController.delete);



/*
// Retrieve all employees
router.get('/', bisnisController.findAll);
// Create a new employee
router.post('/', bisnisController.create);
// Retrieve a single employee with id
router.get('/:id', bisnisController.findById);
// Update a employee with id
router.put('/:id', bisnisController.update);
// Delete a employee with id
router.delete('/:id', bisnisController.delete); */

module.exports = router