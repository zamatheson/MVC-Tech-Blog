const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attribute: ['comment']
                },
            ],
        });
        const blogPosts = blogData.map((blogPost) => 
        blogPost.get({ plain: true })
        );

        res.render('dashboard', {
            blogPosts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router
