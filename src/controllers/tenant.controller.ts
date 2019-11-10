import { Request, Response, NextFunction } from 'express';
import TenantModel, { ITentant } from '../models/tenant.model';
import errorHandler from '../handlers/err.handler';

const TenantController = {
    tenant_gjej_all: async (req: Request, res: Response, next: NextFunction) => {
        await TenantModel.find().exec().then((data: ITentant[]) => {
            res.json(data);
        })
    },
    tenant_create: async (req: Request, res: Response, next: NextFunction) => {
        let tenant: ITentant = req.body;
        await TenantModel.create(tenant).then((data: ITentant) => {
            res.json(data);
        }).catch((err) => {
            res.send(errorHandler(err));
        })
    }
}

export default TenantController;