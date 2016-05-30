package org.uqbar.xtrest.respuestas

import org.uqbar.jugador.Elemento
import java.util.List
import org.uqbar.xtrest.minModelObjects.MinHabitacion
import org.uqbar.xtrest.minModelObjects.MinJugador

@Data
class RespuestaDeIniciarLaberinto {
	MinJugador jugador
	List<MinHabitacion> habitaciones
    List<Elemento> inventario
}