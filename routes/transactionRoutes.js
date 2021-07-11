const express = require('express');
const router = express.Router();
const {
  getTransaction,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.route('/').get(getTransaction, addTransaction).post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
