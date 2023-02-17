import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { FindUserController } from "../controllers/FindUserController";
import { FindUsersController } from "../controllers/FindUsersController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const router = Router();

const createUser = new CreateUserController();
const findUsers = new FindUsersController();
const findUser = new FindUserController();
const updateUser = new UpdateUserController();
const deleteUser = new DeleteUserController();

router.post('/user', createUser.handle);
router.get('/users', findUsers.handle)
router.get('/user/:id', findUser.handle)
router.put('/user/:id', updateUser.handle)
router.delete('/user/:id', deleteUser.handle)

export { router };