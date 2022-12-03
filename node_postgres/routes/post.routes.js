const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/createPost', postController.createPost);
router.get('/getPostsByUser', postController.getPostsByUser);


module.exports = router