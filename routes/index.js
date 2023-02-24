const express = require('express');
const User = require('../models/user');

const router = express.Router();

// http://localhost:4000/ 접속
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll(); // 모든 사용자 조회
        //console.log(users);
        res.render('sequelize', { users });
    }catch (err) {
        console.error(err);
        next(err);
    }
});
  
module.exports = router;