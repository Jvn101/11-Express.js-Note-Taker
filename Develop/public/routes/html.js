const router = require('express').Router();
const path = require('path');

// GET Route for homepage
router.get('/', (req, res) =>
res.sendFile(path.join(_dirname, './public/index.html'))
);

//GET Route for notes page
router.get('/api', (req, res) =>
res.sendFile(path.join(_dirname, './public/notes.html'))
);

router.get('*', (req, res) =>
res.sendFile(path.join(_dirname, './public/index.html'))
);

module.exports = router