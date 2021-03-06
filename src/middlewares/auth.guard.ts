import { Request, Response, NextFunction } from 'express';

const error = new Error();
error.message = "UNAUTHORIZED";
error.name = "401";
error.stack = "";

const AuthGuard = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.token || req.body.token || null;
    //Nese ka token verifikoje, pastaj next();
    next();
}

export { AuthGuard }

