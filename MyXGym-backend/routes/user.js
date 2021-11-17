const { createAdmin, adminDashboard, signin, adminAuth, createClient, verifyToken } = require('../controllers/user');
const authorization = require('../middleware/jwt-auth');
const { requireAdmin, requireClient } = require('../middleware/userAuth');
const router = require('express').Router();


router.post('/admin/signup', createAdmin);
router.post('/signin', signin);
router.post('/admin/verify', adminAuth);
router.post('/client/signup', authorization, requireAdmin, createClient);
router.get('/admin/dashboard', authorization, adminDashboard);
router.get('/verify', authorization, verifyToken);

module.exports = router;