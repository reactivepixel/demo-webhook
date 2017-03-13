module.exports = (express) => {
  const router = express.Router();
  const fs = require('fs');
  const uuid = require('uuid4');

  router.post('/dump', (req, res) => {

    fs.writeFile('./logs/' + uuid() + '.log', JSON.stringify(req.body), (err) => {
      if (err) throw err;
      console.log('Recorded Hook Info to ./Logs');
    })


    res.json({
      hookInfo: req.body
    });

  });

  return router;
};
