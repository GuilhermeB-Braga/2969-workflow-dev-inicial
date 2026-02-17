import Evento from '../models/evento.js';

class EventosControllers {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      res.status(200).json(resultado);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
}

export default EventosControllers;