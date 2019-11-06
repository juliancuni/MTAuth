import express from 'express';
import apiRoutes from './api/api.v0';
const router = express.Router();


// router.get('/', (req, res) => {
//     res.json({ uptime: gjejUpTime() })
// })

router.use('/api', apiRoutes)

export default router;

// let gjejUpTime = (): string => {
//     let sekondat: number = Math.round(process.uptime());
//     let uptime: string =  sekondat + " sekonda";
//     return uptime;
// }