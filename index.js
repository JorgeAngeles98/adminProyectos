import express from "express";
import { config } from "dotenv";
import conectarDB from "./config/db.js";
import administradorRouter from "./routes/administradorRouter.js";
import gerenteRouter from "./routes/gerenteRouter.js";
import especialistaRouter from "./routes/especialistaRouter.js";
import clienteRouter from "./routes/clienteRouter.js";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

config();
conectarDB();

app.use("/api/administrador", administradorRouter);
app.use("/api/gerente", gerenteRouter);
app.use("/api/especialista", especialistaRouter);
app.use("/api/cliente", clienteRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ejecutandose en http://localhost:${PORT}`);
});
