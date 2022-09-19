import mongoose, { Schema } from "mongoose";

export interface IPuppy {
    breed: string;
    name: string;
    dob: Date;
}

const PuppySchema: Schema = new Schema({
    breed: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
})

export default mongoose.model<IPuppy>('Puppy', PuppySchema);