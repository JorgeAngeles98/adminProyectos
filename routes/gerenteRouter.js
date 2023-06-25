import { Router } from "express";
import {
  // obtenerClientes,
  // obtenerCliente,
  visualizarEspecialista,
  asignarEspecialistaCliente,
  obtenerClientePendiente
} from "../controllers/gerenteController.js";

const router = Router();

// router.route("/").get(obtenerClientes);
// router.route("/:idCliente").get(obtenerCliente, obtenerEspecialistas).post(obtenerEspecialista,asignarEspecialistaCliente)
router.post("/clientes/:idCliente/especialistas/:idEspecialista", asignarEspecialistaCliente);
router.get("/especialistas/:id", visualizarEspecialista)
router.get("/clientes/:idCliente/detalleestudio/:idDetalleEstudio", obtenerClientePendiente)

export default router;
