const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsByRadius,
} = require('../controllers/bootcamps');

router.get('/', getBootcamps);
router.get('/:id', getBootcamp);
router.post('/', createBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);
router.get('/radius/:zipcode/:distance', getBootcampsByRadius);

module.exports = router;
