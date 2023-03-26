import { Router } from "express";
import { createMobile, deleteMobile, renderEditMobile, renderMobile, statusMobile, updateMobile } from "../controllers/mobileController";



const router = Router();

router.get("/mobile", renderMobile);

router.post("/mobile/add", createMobile);

//NUEVA RUTA
router.get("/update-mobile/:id", renderEditMobile);

router.post("/update-mobile/:id", updateMobile);

router.get("/delete-mobile/:id", deleteMobile);

router.get("/status-mobile/:id", statusMobile);


export default router;