const Newsletter = require("../models/newsletter");

function suscribeEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    res.status(404).send({ msg: "El email es obligatorio." });
  }

  const newsletter = new Newsletter({
    email: email.toLowerCase(),
  });

  newsletter.save((error) => {
    if (error) {
      res.status(500).send({ msg: "El email ya existe." });
    } else {
      res.status(200).send({ msg: "Email registrado correctamente." });
    }
  });
}

module.exports = {
  suscribeEmail,
};
