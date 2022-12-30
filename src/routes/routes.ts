import { Router } from "express";
import * as LoginController from "../controllers/loginController";
import * as InfoController from "../controllers/dashController";

const router = Router();

router.get('/', LoginController.getLogin);
router.post('/', LoginController.login);

router.get('/dashboard', InfoController.getDashboard);
router.post('/dashboard', InfoController.postDashboard);  

export default router;