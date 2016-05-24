package org.uqbar.xtrest.respuestas

import org.uqbar.jugador.Jugador
import org.uqbar.Habitacion
import org.uqbar.Laberinto

@Data
class RespuestaDeRealizarAccion {
	Laberinto laberinto
    Jugador jugador
    Habitacion habitacion
}
