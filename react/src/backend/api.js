const express  =  require('express');
const router   =  express.Router();

router.get('/offers', (request, response) => {
  response.send({ method: 'GET' });
});

router.post('/offers', (request, response) => {
  response.send({ method: 'POST' });
});

router.put('/offers/:id', (request, response) => {
  response.send({ method: 'PUT' });
});

router.delete('/offers/:id', (request, response) => {
  response.send({ method: 'DELETE' });
});

module.exports = router;
