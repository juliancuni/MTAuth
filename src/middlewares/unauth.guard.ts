import { Request, Response, NextFunction } from 'express';

const error = new Error();
error.message = "UNAUTHORIZED";
error.name = "401";
error.stack = "";

const UnAuthGuard = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.token || req.body.token || null;
    //Nese ska token next();
    next();
}

export { UnAuthGuard }

