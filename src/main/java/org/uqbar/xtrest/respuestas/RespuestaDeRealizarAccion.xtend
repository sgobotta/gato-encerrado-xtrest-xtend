package org.uqbar.xtrest.respuestas

import org.uqbar.jugador.Elemento
import org.uqbar.xtrest.minModelObjects.MinAccion
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class RespuestaDeRealizarAccion {
	String type
	Elemento item
	MinAccion action
	int idHabitacion
}