import mongoose, { Document, Schema } from "mongoose";

export interface IPuppy {
    breed: string;
    name: string;
    dob: Date;
    size: number;
    img: string;
    }

const PuppySchema: Schema = new Schema({
    breed: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    size: { type: Number, required: true },
    img: { type: String, required: true }
})

export default mongoose.model<IPuppy>('Puppy', PuppySchema);