var express = require('express');
var router = express.Router();
var cardContents = require('../models/card_model');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.user) return res.render('card', { auth: true, user_id: req.session.user.user_id });
    else return res.render('card', { auth: false, user_id: '' });

});

router.post('/', function(req, res) {
    var commentTitle = req.body.title-input;
    var commentContent = req.body.CKEditor;
    // 시간, 작성자 etc...

    addCard(commentTitle, commentContent);
    res.redirect('/main');
});

// 임시
router.get('/view', function(req, res){
    // 글 보는 부분. 글 내용을 출력하고 조회수를 늘려줘야함
    var contentId = req.param('id');
    BoardContents.findOne({_id:contentId}, function(err, rawContent){
        if(err) throw err;
        res.render('boardDetail',{title: "Board", content:rawContent});
    })
});

module.exports = router;