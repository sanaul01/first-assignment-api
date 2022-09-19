const express = require('express');
const usersControllers = require('../controllers/user.controller');
const limiter = require('../middleware/limiter');
const viewCount = require('../middleware/viewCount');


const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('user can founded id one')
// });

// router.post('/', (req, res) => {
//     res.send('user can added')
// })

router
    .route('/')
        .get(usersControllers.getAllUsers)

        .post(usersControllers.saveAUser);
    
    router.route("/:id").get( viewCount, limiter, usersControllers.getUserDetail);

module.exports = router;