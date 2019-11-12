import { Request, Response, NextFunction } from 'express';
import { JwtSign, JwtVerify } from '../handlers/jwt.handler';

const Auth = {
    login: (req: Request, res: Response, next: NextFunction) => {
        if(req.headers.bearer) {
            let testVerify = JwtVerify(req.headers.bearer.toString())
            console.log(testVerify)
        }
        let accessToken = JwtSign(req.body);
        // res.append("Bearer", accessToken || "")
        res.send("accessToken " + accessToken);
    } 
}

export default Auth;