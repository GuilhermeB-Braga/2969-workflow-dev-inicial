import {
    describe, expect, it
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
    const objetoEvento = {
        nome: 'Evento teste',
        descricao: 'descrição do evento test',
        data: '2026-03-10',
        autor_id: 1
    };

    it('Deve instanciar um novo Evento', () => {
        const evento = new Evento(objetoEvento);

        expect(evento).toEqual(
            expect.objectContaining(objetoEvento),
        );
    });

});