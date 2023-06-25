// import Cliente from "../models/ClienteModel.js";
import DetalleEstudio from "../models/DetalleEstudio.js";
import ClienteModel from "../models/ClienteModel.js";
import generarJWT from "../helpers/GenerarJWT.js";
import EspecialistaClienteModel from "../models/EspecialistaClienteModel.js";
import DetalleVisitaModel from "../models/DetalleVisitaModel.js";

const obtenerCliente = async (req, res) => {
    const {id} = req.params
    try {
        const cliente = await ClienteModel.findById(id);
        // res.status(200).json({
        //     _id:cliente.id,
        //     nombre: cliente.nombre,
        //     apellido: cliente.apellido,
        //     celular: cliente.celular,
        //     direccion: cliente.direccion
        // });
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const registrar = async (req, res) => {
    const { correo_electronico } = req.body;
    const existeUsuario = await ClienteModel.findOne({ correo_electronico });

    if (existeUsuario) {
        const error = new Error("El usuario ya existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        const cliente = new ClienteModel(req.body);
        const clienteGuardado = await cliente.save();

        res.status(200).json(clienteGuardado);
    } catch (error) {
        console.log(error);
    }
};

const autenticar = async (req, res) => {
    const { correo_electronico, password } = req.body;
    const cliente = await ClienteModel.findOne({ correo_electronico });

    // Verifica si el usuario existe en la BD
    if (!cliente) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    // Verifica si el password es correcto
    // "comrpobarPassword()" ESTA DEFINIDO EN EL MODELO
    if (await cliente.comprobarPassword(password)) {
        console.log(cliente);
        res.json({
            _id: cliente._id,
            nombre: cliente.nombre,
            correo_electronico: cliente.correo_electronico,
            rol: cliente.rol,
            token: generarJWT(cliente.id),
        });
    } else {
        const error = new Error("El password es incorrecto");
        res.status(404).json({ msg: error.message });
    }
};

// Funcion para guardar registro de detalle del estudio
const registrarDetalleEstudio = async (req, res) => {
    const { idCliente } = req.params;
    const cliente = await ClienteModel.findById(idCliente);
    // const ordenVisita = await DetalleEstudio.findById(idOrdenVisita);
    try {
        const {
            respuesta_1,
            respuesta_2,
            respuesta_3,
            respuesta_4,
            respuesta_5,
            respuesta_6,
            respuesta_7,
            respuesta_8,
            respuesta_9,
        } = req.body;
        const detalleEstudio = new DetalleEstudio({
            // nombre: cliente.nombre,
            // apellido: cliente.apellido,
            // celular: cliente.celular,
            // direccion: cliente.direccion,
            respuesta_1,
            respuesta_2,
            respuesta_3,
            respuesta_4,
            respuesta_5,
            respuesta_6,
            respuesta_7,
            respuesta_8,
            respuesta_9,
            cliente: cliente.id
        });
        // const clienteDetalleEstudio = new DetalleEstudio({
        //                    nombre: cliente.nombre,
        //         apellido: cliente.apellido,
        //         celular: cliente.celular,
        //         direccion: cliente.direccion,
        //     detalleEstudio
        // })
        const detalleEstudioAlmacenado = await detalleEstudio.save();

        res.status(200).json({
            cliente: {
                nombre: cliente.nombre,
                apellido: cliente.apellido,
                celular: cliente.celular,
                direccion: cliente.direccion,
            },
            detalleEstudio: detalleEstudioAlmacenado,
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const registrarDetalleVisita = async (req, res) => {
    const {idCliente, idEspecialistaCliente} = req.params;
    const {detalle} = req.body;
    try {
        const cliente = await ClienteModel.findById(idCliente).select("-_id dni direccion")
        const especialistaCliente = await EspecialistaClienteModel.findById(idEspecialistaCliente).select("-_id -__v -nombreEspecialista")
        // res.status(200).json({
        //     nombre: cliente.nombre,
        //     dni: cliente.dni,
        //     celular: cliente.celular,
        //     tipo: cliente.tipo,
        // })

        // res.status(200).json({direccionCliente, especialistaCliente})
        const direccionCliente = cliente.direccion;
        const dniCliente = cliente.dni;
        const nombreEspecialistaCliente = especialistaCliente.nombreCliente;
        const fechaEspecialistaCliente = especialistaCliente.fecha;
        const horaEspecialistaCliente = especialistaCliente.hora;

        const detalleVisita = new DetalleVisitaModel({
            dniCliente,
            direccionCliente,
            nombreEspecialistaCliente,
            fechaEspecialistaCliente,
            horaEspecialistaCliente,
            // cliente.direccion,
            // cliente.dni,
            // especialistaCliente.nombreCliente,
            // especialistaCliente.fecha,
            // especialistaCliente.hora,
            detalle
        })
        await detalleVisita.save()
        
        res.status(200).json(detalleVisita)
    } catch (error) {
        res.status(500).json({ msg: error.message})
    }
}

export {
    registrar,
    autenticar,
    obtenerCliente,
    registrarDetalleEstudio,
    registrarDetalleVisita
};
