const jwt = require("jsonwebtoken");
const verifyAuth = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        mensaje: "Error de token",
        error,
      });
    }

    // Creamos una nueva propiedad con la info del usuario
    req.usuario = decoded.data; //data viene al generar el token en login.js
    console.log(req.usuario);
    next();
  });
};

const verifyRol = (req, res, next) => {
  const rol = req.usuario.role;
  console.log(req.usuario);
  if (rol !== "ADMIN") {
    return res.status(401).json({
      mensaje: "Rol no autorizado!",
    });
  }
  next();
};

module.exports = { verifyAuth, verifyRol };
