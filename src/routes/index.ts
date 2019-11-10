import express from 'express';
import apiV0Routes from './api/api.v0.routes';
import path from 'path';

const router = express.Router();


router.use('/public', express.static('public'));
router.use('/bulma', express.static("./node_modules/bulma"));

router.get('/', (req, res) => {
    const indexHtml = path.join(__dirname, "../views/index.html")

    res.sendFile(indexHtml);
})

router.use('/api/v0', apiV0Routes)

export default router;