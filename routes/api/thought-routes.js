const router = require('express'.Router());
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/:thoughtID/reactions
router.route("/:id/reactions").post(addReaction);

// /api/thoughts/:thoughtID/reactions/:reactionID
router.route("/:thoughtID/reactions/:reactionID").delete(removeReaction);

// /api/thoughts/:thoughtID/reactions/:reactionID
router.route("/:thoughtID/reactions/:reactionID").delete(removeReaction);

module.exports = router;