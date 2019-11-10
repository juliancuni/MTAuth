import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import express from 'express';
import { AuthGuard } from '../../middlewares/auth.guard'

import TC from '../../controllers/tenant.controller'

const router = express.Router();

// router.use(AuthGuard);

router.get('/', (req, res) => {
    const indexHtml = path.join(__dirname, "../../views/index.html")
    res.sendFile(indexHtml);
});

router.get('/tenants', AuthGuard, TC.tenant_gjej_all);
router.post('/tenants', AuthGuard, TC.tenant_create);

export default router;