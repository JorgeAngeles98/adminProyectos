import { Schema, model } from "mongoose";

const especialistaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
});

const Especialista = model("Especialista", especialistaSchema);
export default Especialista;
