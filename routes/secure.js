const express = require('express');
const asyncMiddleware = require('../middleware/asyncMiddleware');
const UserModel = require('../models/userModel');
const ScoreModel = require('../models/scoreModel');


const router = express.Router();
 
router.post('/submit-score', asyncMiddleware(async (req, res, next) => {
  const { email, score } = req.body;
  await UserModel.updateOne({ email }, { highScore: score });
  res.status(200).json({ status: 'ナイス　スコアー' });
}));
 
router.get('/scores', asyncMiddleware(async (req, res, next) => {
  const users = await UserModel.find({}, 'name highScore -_id').sort({ highScore: -1}).limit(10);
  res.status(200).json(users);
}));

router.post('/submitascore', asyncMiddleware(async (req, res, next) => {
  const { name, score } = req.body;
  await ScoreModel.create({ name , score });
  //res.status(200).redirect('http://localhost')
  res.status(200).redirect('https://mikewiner.github.io/flappy-bird/')
 
}));

router.get('/scores2', asyncMiddleware(async (req, res, next) => {
  const scores = await ScoreModel.find({}, 'name score -_id').sort({ score: -1}).limit(25);
  res.status(200).json(scores);
}));
 
module.exports = router;