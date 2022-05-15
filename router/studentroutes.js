const express = require('express')
const student_controller = require('../controller/studentcontroller')
const router = express.Router()

router.get('/getsessioninfo', student_controller.get_session_info )
router.get('/regeneratesession', student_controller.regenerate_session)
router.get('/reloadsession', student_controller.reload_session)
router.get('/deletesession', student_controller.delete_session)
router.get('/sessionexample', student_controller.session_example)

module.exports = router