const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts)

// /api/thoughts/thoughtId
router.route('/:thoughtId').get(getThoughtById).delete(removeThought).put(updateThought);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;