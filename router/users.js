import { Router } from "express";
import passport from "../middlewares/passport.js";
import  createHash  from "../middlewares/createHash.js";
import  accountExists  from "../middlewares/accountExists.js";
import validatorId from "../middlewares/validatorId.js";
import validorUser from "../middlewares/userValidator.js";
import { allUser, idAllUsers } from "../controller/users/read.js";
import createUser from "../controller/users/register.js";
import updateUser from "../controller/users/update.js";
import deleteUser from "../controller/users/delete.js";
import user_schema from "../shemas/users/users.js";
import user_schema_update from "../shemas/users/update.js";
import user_schema_delete from "../shemas/users/delete.js";
import generateToken from "../middlewares/generateToken.js";
const router = Router();


router.get('/all',passport.authenticate('jwt',{session:false}),allUser);
router.get('/user/:_id',passport.authenticate('jwt',{session:false}),idAllUsers)
router.post('/register',validorUser(user_schema),accountExists,createHash,generateToken,createUser)
router.put("/update",passport.authenticate('jwt',{session:false}),validorUser(user_schema_update), updateUser);
router.delete("/delete/:_id",passport.authenticate('jwt',{session:false}),validatorId(user_schema_delete),validorUser(user_schema_delete), deleteUser);


export default router;