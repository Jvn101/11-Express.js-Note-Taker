const router = require('express').Router();
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// Import our modular routers 
const apiRoutes = require('../assets/js');
const homepagehtmlRoutes = require('./index.html')
const noteshtmlRoutes = require('./notes.html')

const app = express();

router.use('/api/notes', apiRoutes);
router.use('/', homepagehtmlRoutes);
router.use('/api', noteshtmlRoutes);


  // GET Route for a specific tip
//   router.get('/:tip_id', (req, res) => {
//     const tipId = req.params.tip_id;
//     readFromFile('./db/db.json')
//       .then((data) => JSON.parse(data))
//       .then((json) => {
//         const result = json.filter((tip) => tip.tip_id === tipId);
//         return result.length > 0
//           ? res.json(result)
//           : res.json('No tip with that ID');
//       });
//   });

module.exports = router;
