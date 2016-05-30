package org.uqbar.xtrest.respuestas

import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.xtrest.minModelObjects.MinUsuario
import java.util.List
import org.uqbar.xtrest.minModelObjects.MinLaberinto

@Accessors
class RespuestaLogin {
	MinUsuario usuario
	List<MinLaberinto> laberintos
}