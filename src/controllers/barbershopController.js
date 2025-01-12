const { Barbershop } = require('../models/barbershop');

exports.getAllBarbershops = async (req, res) => {
    try {
        const barbershops = await Barbershop.findAll();
        res.send(barbershops);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter barbearias' });
    }
};

exports.getBarbershopById = async (req, res) => {
    try {
        const { id } = req.params;
        const barbershop = await Barbershop.findByPk(id);
        if (!barbershop) {
            return res.status(404).json({ error: 'Barbearia não encontrada' });
        }
        res.send(barbershop);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter barbearia' });
    }
};

exports.createBarbershop = async (req, res) => {
    try {
        const { name, whatsapp, email, logo, street, zipcode, neighborhood, number, complement, city, state } = req.body;
        const barbershop = await Barbershop.create({ name, whatsapp, email, logo, street, zipcode, neighborhood, number, complement, city, state });
        res.send(barbershop);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao registrar barbearia' });
    }
};

exports.updateBarbershop = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, whatsapp, email, logo, street, zipcode, neighborhood, number, complement, city, state } = req.body;
        const barbershop = await Barbershop.findByPk(id);
        if (!barbershop) {
            return res.status(404).json({ error: 'Barbearia não encontrada' });
        }
        await barbershop.update({ name, whatsapp, email, logo, street, zipcode, neighborhood, number, complement, city, state });
        res.send(barbershop);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar barbearia' });
    }
};

exports.deleteBarbershop = async (req, res) => {
    try {
        const { id } = req.params;
        const barbershop = await Barbershop.findByPk(id);
        if (!barbershop) {
            return res.status(404).json({ error: 'Barbearia não encontrada' });
        }
        await barbershop.destroy();
        res.send({ message: 'Barbearia removida com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover barbearia' });
    }
};
