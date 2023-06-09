const Menu = require("../models/menu");

async function createMenu(req, res) {
  const menu = new Menu(req.body);

  menu.save((error, menuStorage) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el menu." });
    } else {
      res.status(200).send(menuStorage);
    }
  });
}

async function getMenus(req, res) {
  const { active } = req.query;
  let response = null;

  if (active === undefined) {
    response = await Menu.find().sort({ order: "asc" });
  } else {
    response = await Menu.find({ active }).sort({ order: "asc" });
  }

  if (!response) {
    res.status(400).send({ msg: "Menu no encontrado" });
  } else {
    res.status(200).send({ response });
  }
}

async function updateMenu(req, res) {
  const { id } = req.params;
  const menuData = req.body;

  Menu.findByIdAndUpdate({ _id: id }, menuData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el menu." });
    } else {
      res.status(200).send({ msg: "Actualizado correctamente" });
    }
  });
}

async function deleteMenu(req, res) {
  const { id } = req.params;

  Menu.findByIdAndDelete({ _id: id }, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el menu." });
    } else {
      res.status(200).send({ msg: "Eliminado correctamente" });
    }
  });
}

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
};
