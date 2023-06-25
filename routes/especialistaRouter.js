import { Router } from "express";
import {
  obtenerEspecialistas,
  obtenerEspecialista,
  agregarEspecialista,
  actualizarEspecialista,
  eliminarEspecialista
} from "../controllers/especialistaController.js";

const router = Router();

router.route("/").get(obtenerEspecialistas).post(agregarEspecialista);
router
  .route("/:id")
  .get(obtenerEspecialista)
  .put(actualizarEspecialista)
  .delete(eliminarEspecialista);

export default router;
