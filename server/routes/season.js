const { Router } = require('express');
const router = new Router();
const Season = require('./../models/season');

router.get('/:id', async (req, res, next) => {
  try {
    const season = await Season.findById(req.params.id)
      .populate('games')
      .exec();
    res.status(200).json(season);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const data = req.body.data;
    const newSeason = await Season.create(data);
    res.status(200).json(newSeason);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
