import { Router } from "express";
import {
    actualizarCliente,
    visualizarCliente,
    filtrarCliente,
    eliminarCliente,
} from "../controllers/administradorController.js";

const router = Router();

// router.route("/").get(obtenerAdministradores).post(agregarAdministrador);
router.put("/:idCliente", actualizarCliente);
router.get("/:idCliente", visualizarCliente);
router.get("/", filtrarCliente);
router.delete("/:idCliente", eliminarCliente);

export default router;
