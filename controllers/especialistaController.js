// import Especialista from "../models/EspecialistaModel.js";
import Cliente from "../models/ClienteModel.js"

const obtenerEspecialistas = async (req, res) => {
    try {
        res.status(200).json("obtenerEspecialistas");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const obtenerEspecialista = async (req, res) => {
    try {
        res.status(200).json("obtenerEspecialista");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const agregarEspecialista = async (req, res) => {
    try {
        res.status(200).json("agregarEspecialista");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const actualizarEspecialista = async (req, res) => {
    try {
        res.status(200).json("actualizarEspecialista");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const eliminarEspecialista = async (req, res) => {
    try {
        res.status(200).json("eliminarEspecialista");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    obtenerEspecialistas,
    obtenerEspecialista,
    agregarEspecialista,
    actualizarEspecialista,
    eliminarEspecialista
};
