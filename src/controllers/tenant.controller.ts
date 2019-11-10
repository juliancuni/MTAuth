import { Request, Response, NextFunction } from 'express';
import TenantModel from '../models/tenant.model';
import errorHandler from '../handlers/err.handler';

const TenantController = {
    tenant_gjej_all: (req: Request, res: Response, next: NextFunction) => {
        TenantModel.find().exec().then((data) => {
            res.json(data);
        })
    },
    tenant_create: (req: Request, res: Response, next: NextFunction) => {
        let tenant = req.body;
        TenantModel.create(tenant).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.send(errorHandler(err));
        })
    }
}

export default TenantController;