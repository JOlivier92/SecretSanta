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
    const pairs = findPairs(room.participants);
    const pairKeys = Object.keys(pairs);

    const sendNext = () => {
      if(pairKeys.length === 0) return res.json('Mail sent successfully');

      const email = pairKeys.shift();
      const participant = pairs[email];

      const mailOptions = {
        from: 'secretsanta.solutions1@gmail.com',
        to: email,
        subject: 'Find out who your secrent santa recipient is',
        text: `You're secret santa recipient is ${participant.name}\n\n` +
              `Their ideas for what to get them are:\n${participant.ideas}`
      };

      transporter.sendMail(mailOptions, function(error){
        if (error) {
          res.status(400).json(error);
        } else {
          sendNext();
        }
      });
    };

    sendNext();
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

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'secretsanta.solutions1@gmail.com',
    pass: require("../../config/keys").gmailPassword
  }
});

module.exports = router;
