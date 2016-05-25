package org.uqbar.xtrest.respuestas

import org.uqbar.jugador.Elemento
import java.util.List
import org.uqbar.xtrest.minModelObjects.MinHabitacion

@Data
class RespuestaDeIniciarLaberinto {
	List<MinHabitacion> habitaciones
    List<Elemento> inventario
}