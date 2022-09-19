import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Puppy from "../models/Puppy";

const createPuppy = (req: Request, res: Response, next: NextFunction) => {
    const { breed, name, dob } = req.body;

    const puppy = new Puppy({
        id: new mongoose.Types.ObjectId(),
        breed,
        name,
        dob
    })

    return puppy
        .save()
        .then(puppy => res.status(201).json({ puppy }))
        .catch(error => res.status(500).json({ error }));
}
const readPuppy = (req: Request, res: Response, next: NextFunction) => {
    const puppyId = req.params.puppyId;

    return Puppy.findById(puppyId)
        .then(puppy => (puppy ? res.status(200).json({ puppy }) : res.status(404).json({message: 'Not Found'})))
        .catch(error => res.status(500).json({ error }));

}
const readAllPuppies = (req: Request, res: Response, next: NextFunction) => {
    return Puppy.find()
        .then(puppies => res.status(200).json({ puppies }))
        .catch(error => res.status(500).json({ error }));
}
const updatePuppy = (req: Request, res: Response, next: NextFunction) => {
    const puppyId = req.params.puppyId;

    return Puppy.findById(puppyId)
        .then(puppy => {
            if(puppy) {
                puppy.set(req.body)
                
                return puppy
                    .save()
                    .then(puppy => res.status(201).json({ puppy }))
                    .catch(error => res.status(500).json({ error }));
            }
            else {
                res.status(404).json({message: 'Not Found'});
            }
        })
        .catch(error => res.status(500).json({ error }));
}
const deletePuppy = (req: Request, res: Response, next: NextFunction) => {
    const puppyId = req.params.puppyId;

    return Puppy.findByIdAndDelete(puppyId)
        .then(puppy => (puppy ? res.status(201).json({ message: 'Deleted' }) : res.status(404).json({message: 'Not Found'})))
        .catch(error => res.status(500).json({ error }));
}

export default {
    createPuppy,
    readPuppy,
    readAllPuppies,
    updatePuppy,
    deletePuppy
}
