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

function getEmails(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  Newsletter.paginate({}, options, (error, emailsStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al obtener los emails." });
    } else {
      res.status(200).send(emailsStored);
    }
  });
}

module.exports = {
  suscribeEmail,
  getEmails,
};
