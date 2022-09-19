import express from "express";
import controller from "../controllers/Puppy";

const router = express.Router();

router.post('/', controller.createPuppy);
router.get('/:puppyId', controller.readPuppy);
router.get('/', controller.readAllPuppies);
router.patch('/:puppyId', controller.updatePuppy);
router.delete('/:puppyId', controller.deletePuppy);

export = router;