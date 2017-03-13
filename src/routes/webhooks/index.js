module.exports = (express) => {
  const router = express.Router();

  router.post('/dump', (req, res) => {

    console.log('Dumping to stdOut', req.body);

    res.json({thanks:true});

  });

  return router;
};
