import { Schema, model } from "mongoose";

const detalleVisitaSchema = new Schema({
  nombre: {
    type: String,
    // required: true,
  },
  dni: {
    type: String,
    // required: true,
  },
  fecha: {
    type: String,
    // required: true,
  },
  hora: {
    type: String,
    // required: true,
  },
  direccion: {
    type: String,
    // required: true,
  },
  detalle: {
    type: String,
    // required: true,
  },
});

const DetalleVisita = model("DetalleVisita", detalleVisitaSchema);
export default DetalleVisita;
