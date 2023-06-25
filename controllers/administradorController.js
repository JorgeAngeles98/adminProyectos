import Cliente from "../models/ClienteModel.js";

const actualizarCliente = async (req, res) => {
    const { idCliente } = req.params;
    const cliente = await Cliente.findById(idCliente);

    cliente.nombre = req.body.nombre || cliente.nombre;
    cliente.apellido = req.body.apellido || cliente.apellido;
    cliente.correo_electronico = req.body.correo_electronico || cliente.correo_electronico;
    cliente.celular = req.body.celular || cliente.celular;
    cliente.tipo_cliente = req.body.tipo_cliente || cliente.tipo_cliente;
    cliente.dni = req.body.dni || cliente.dni;
    cliente.ruc = req.body.ruc || cliente.ruc;
    cliente.direccion = req.body.direccion || cliente.direccion;
    cliente.password = req.body.password || cliente.password;

    try {
        const clienteActualizado = await cliente.save();
        res.status(200).json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const visualizarCliente = async (req, res) => {
    const { idCliente } = req.params;

    try {
        const cliente = await Cliente.findById(idCliente);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const filtrarCliente = async (req, res) => {
    const { dni } = req.body;

    try {
        const existeCliente = await Cliente.findOne({dni});
        res.status(200).json(existeCliente);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const eliminarCliente = async (req, res) => {
    const { idCliente } = req.params;
    const cliente = await Cliente.findById(idCliente);

    try {
        await cliente.deleteOne();
        res.status(200).json("Cliente Eliminado Correctamente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    actualizarCliente,
    visualizarCliente,
    filtrarCliente,
    eliminarCliente,
};
