const express = require("express");
const router = express.Router();
const Room = require('../../models/Room');

router.post('/', (req, res) => {
  const newRoom = new Room({
    title: req.body.title,
    priceRange: req.body.priceRange
  });
  newRoom.save().then(room => res.json(room));
});

router.patch('/:roomId/finalize', (req, res) => {
  Room.findById(req.params.roomId).then(room => {
    res.json(findPairs(room.participants));
  });
});

router.post('/:roomId/participants', (req, res) => {
  const newParticipant = {
    name: req.body.name,
    email: req.body.email,
    ideas: req.body.ideas
  };
  Room.findById(req.params.roomId).then(room => {
    room.participants.push(newParticipant);
    room.save().then(room =>
      res.json(room.participants[room.participants.length - 1])
    );
  });
});

const findPairs = items => {
  const pairs = {};
  const shuffledItems = shuffled(items);
  for (let i = 0; i < items.length; i ++) {
    pairs[items[i].email] = shuffledItems[i];
  }
  return pairs;
};

const shuffle = array => {
  for (let i = 0; i < array.length - 1; i++) {
    const randI = i + 1 + Math.floor(Math.random() * (array.length - i - 1));
    [array[i], array[randI]] = [array[randI], array[i]];
  }
  return array;
};

const shuffled = array => shuffle(array.slice());

module.exports = router;
