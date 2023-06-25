import mongoose from "mongoose";

const especialistaClienteSchema = mongoose.Schema({
    nombreCliente: {
        type: String,
        required: true,
    },
    nombreEspecialista: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
});

const EspecialistaCliente = mongoose.model("EspecialistaCliente", especialistaClienteSchema);
export default EspecialistaCliente;
