const Menu = require('../models/menu');

async function createMenu(req, res) {
    const menu = new Menu(req.body);

    menu.save((error, menuStorage) => {
        if (error) {
            res.status(400).send({ msg: 'Error al crear el menu.' });
        } else {
            res.status(200).send(menuStorage);
        }
    });
}

module.exports = {
    createMenu,
};