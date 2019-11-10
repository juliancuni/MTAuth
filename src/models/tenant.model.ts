import { Schema, model, Document } from 'mongoose';

interface ITentant extends Document {
    emer: string,
    domain: string,
    email: string,
    lejuar: boolean
}

const TenantSchema = new Schema<ITentant>({
    emer: { type: String, required: [true, 'Emer s\'mund te lihet bosh'] },
    domain: { type: String, required: [true, 'Domain s\'mund te lihet bosh'], unique: true },
    email: { type: String, required: [true, 'E-mail s\'mund te lihet bosh'], unique: true },
    lejuar: { type: Boolean, required: true, default: true }
})

export default model<ITentant>('Tenant', TenantSchema);

