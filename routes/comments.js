const express = require('express');
const Comment = require('../models/comment');

const router = express.Router();

// http://localhost:4000/comments/ 접속
router.post('/', async (req, res, next) => {
    try {
        const comment = await Comment.create({ // 댓글 등록
            commenter: req.body.id,
            comment: req.body.comment,
        });
        //console.log(comment);
        res.status(201).json(comment);
    }catch (err) {
        console.error(err);
        next(err);
    }
});
  
// http://localhost:4000/comments/id값/ 접속
router.route('/:id')
    .patch(async (req, res, next) => {
        try {
            const result = await Comment.update({ // 댓글 수정
                comment: req.body.comment,
            }, {
                where: { id: req.params.id },
            });
            res.json(result);
        }catch (err) {
            console.error(err);
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const result = await Comment.destroy({ where: { id: req.params.id } }); // 댓글 삭제
            res.json(result);
        }catch (err) {
            console.error(err);
            next(err);
        }
    }
);

module.exports = router;