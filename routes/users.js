const express = require('express');
const { User, Comment } = require('../models');

const router = express.Router();

// http://localhost:4000/users/ 접속
router.route('/')
  .get(async (req, res, next) => {
    try {
        const users = await User.findAll(); // 모든 사용자 조회
        res.json(users);
    }catch (err) {
        console.error(err);
        next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
        const user = await User.create({ // 사용자 등록
            name: req.body.name,
            age: req.body.age,
            married: req.body.married,
        });
        //console.log(user);
        res.status(201).json(user);
    }catch (err) {
        console.error(err);
        next(err);
    }
});

// http://localhost:4000/users/id값/comments 접속
router.get('/:id/comments', async (req, res, next) => {
    try {
        const comments = await Comment.findAll({ // 사용자의 모든 댓글 조회
            include: {
                model: User,
                where: { id: req.params.id },
            },
        });
        //console.log(comments);
        res.json(comments);
    }catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
