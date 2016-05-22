package org.uqbar.xtrest.respuestas

import org.uqbar.jugador.Elemento
import java.util.List
import org.uqbar.Habitacion

@Data
class RespuestaDeIniciarLaberinto {
	List<Habitacion> habitaciones
    List<Elemento> inventario
}