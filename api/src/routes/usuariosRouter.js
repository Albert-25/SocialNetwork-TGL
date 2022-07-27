const express = require("express");
const router = express.Router();

const {
    getUsuariosTodos,
    getUsuariosPorAlias,
    getUsuarioPorId,
    postUsuario,
    putUsuarioPorId,
    deleteUsuarioPorId
} = require("../controllers/usuariosController");

router.get("/todos", getUsuariosTodos);
router.get("/:alias", getUsuariosPorAlias);
router.get("/porId",getUsuarioPorId)
router.post("/", postUsuario);  
router.put("/", putUsuarioPorId);
router.delete("/", deleteUsuarioPorId);


module.exports = router