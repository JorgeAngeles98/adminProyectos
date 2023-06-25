// import Gerente from "../models/GerenteModel.js";
import Especialista from "../models/EspecialistaModel.js";
import Cliente from "../models/ClienteModel.js";
import EspecialistaCliente from "../models/EspecialistaClienteModel.js";
import DetalleEstudio from "../models/DetalleEstudio.js";

// Funcion para visualizar especialista
const visualizarEspecialista = async (req, res) => {
    try {
        const { nombreEspecialista } = req.body;
        const clienteAsignado = await EspecialistaCliente.find(
            nombreEspecialista
        );

        res.status(200).json(clienteAsignado);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Funcion para asignar un especialista a un cliente
const asignarEspecialistaCliente = async (req, res) => {
    try {
        const { idCliente, idEspecialista } = req.params;
        const { fecha, hora } = req.body;
        const cliente = await Cliente.findById(idCliente).select("nombre");
        const especialista = await Especialista.findById(idEspecialista).select(
            "nombre"
        );
        const nombreCliente = cliente.nombre;
        const nombreEspecialista = especialista.nombre;
        const especialistaCliente = new EspecialistaCliente({
            nombreCliente,
            nombreEspecialista,
            fecha,
            hora,
        });

        await especialistaCliente.save();

        res.status(200).json(especialistaCliente);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const obtenerClientePendiente = async (req, res) => {
    const {idCliente, idDetalleEstudio} = req.params;

    // REVISAR LA VALIDACION CUANDO LA NO TIENE idDetalleEstudio EN EL URL
    //if (idDetalleEstudio == null) {
        //return console.log("No Existe Detalle de Estudio")
        // res.status(500).json({ msg: error.message });
    //}

    try {
        const cliente = await Cliente.findById(idCliente)
        const detalleEstudio = await DetalleEstudio.findById(idDetalleEstudio)

        res.status(200).json({
            nombre: cliente.nombre,
            apellido: cliente.nombre,
            dni: cliente.dni,
            ruc: cliente.ruc,
            celular: cliente.celular,
            tipo_cliente: cliente.tipo_cliente
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export {
    // obtenerClientes,
    // obtenerCliente,
    visualizarEspecialista,
    asignarEspecialistaCliente,
    obtenerClientePendiente
};
