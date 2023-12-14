const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [updatePost] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (updatePost > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
    }
});

// delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [deletePost] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (deletePost > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;