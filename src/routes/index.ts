import express from 'express';
import apiRoutes from './api/api.v0.routes';
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

router.use('/api', apiRoutes)

export default router;