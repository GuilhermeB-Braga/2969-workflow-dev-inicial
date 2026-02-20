import Evento from '../models/evento.js';

class EventosControllers {
  static liberarEvento = () => process.env.EVENTO_FLAG === 'true';

  static listarEventos = async (req, res) => {
    if (this.liberarEvento()) {
      try {
        const resultado = await Evento.pegarEventos();
        res.status(200).json(resultado);
      } catch (err) {
        res.status(500).json(err.message);
      }
    } else {
      res.status(404).send();
    }
  };
}

export default EventosControllers;
