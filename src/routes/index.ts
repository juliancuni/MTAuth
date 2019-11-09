import express from 'express';
import apiV0Routes from './api/api.v0.routes';
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

router.use('/api/v0', apiV0Routes)

export default router;