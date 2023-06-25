import { Router } from "express";
import {
  registrar,
  autenticar,
  obtenerCliente,
  registrarDetalleEstudio,
  registrarDetalleVisita
} from "../controllers/clienteController.js";

const router = Router();

router
  .route("/:id")
  .get(obtenerCliente)
  router.post("/registrar",registrar)
  router.post("/autenticar",autenticar)
  router.post("/:idCliente", registrarDetalleEstudio)
  router.post("/clientes/:idCliente/especialistasClientes/:idEspecialistaCliente", registrarDetalleVisita)

export default router;
