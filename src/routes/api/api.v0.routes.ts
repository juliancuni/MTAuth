import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.json({ "msg": "who are you?!" });
    res.end();
})

router.get('/test', (req, res) => {
    if (Object.entries(req.query).length !== 0 && req.query.constructor === Object) {
        res.send(`I dont understand ${JSON.stringify(req.query)}. What are you doing?`)
    } else {
        res.send('test')
    }
})

//Lastly send a msg if route is wrong
router.get('*', (req, res) => {
    res.statusCode = 400;
    res.json({ "msg": "WTF are you doing here?" });
    res.end();
})

export default router;