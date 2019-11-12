import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import express from 'express';
import { AuthGuard } from '../../middlewares/auth.guard'
import { UnAuthGuard } from '../../middlewares/unauth.guard'

import TC from '../../controllers/tenant.controller'
import AC from '../../controllers/auth.controller'

const router = express.Router();
// router.use(AuthGuard);
router.get('/', (req, res) => {
    const indexHtml = path.join(__dirname, "../../views/index.html")
    res.sendFile(indexHtml);
});

router.post('/auth/login', UnAuthGuard, AC.login);
router.get('/tenants', AuthGuard, TC.tenant_gjej_all);
router.post('/tenants', AuthGuard, TC.tenant_create);

export default router;