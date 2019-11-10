import express from 'express';

const error = new Error();
error.message = "UNAUTHORIZED";
error.name = "401";
error.stack = "";

const AuthGuard = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let token = req.cookies.token || req.body.token || null;

    // if (token) {
    //     next();
    // } else {
    //     next(error);
    // }
    next();
}

export { AuthGuard }

