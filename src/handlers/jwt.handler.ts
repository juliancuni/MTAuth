import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';

const SECRET: string = process.env.JWT_SECRET || "";
let privateKey = fs.readFileSync(path.join(__dirname, "../../keys/rsa_private.pem"));
let publicKey = fs.readFileSync(path.join(__dirname, "../../keys/rsa_public.pem"));
const JwtSign = (payload: string | object) => {
    let kohaEfillimit = Date.now();
    if (SECRET === "") return null;
    let accessToken = jwt.sign(payload, privateKey, {algorithm: 'RS256'});
    console.log(Date.now() - kohaEfillimit);
    return accessToken;
}

const JwtVerify = (jwtReq: string) => {
    if (!jwtReq) return null;
    return jwt.verify(jwtReq, publicKey);
}

export { JwtSign, JwtVerify }