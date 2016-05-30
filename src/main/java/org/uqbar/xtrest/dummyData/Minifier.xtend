package org.uqbar.xtrest.dummyData

import org.uqbar.Laberinto
import org.uqbar.xtrest.minModelObjects.MinLaberinto
import org.uqbar.Habitacion
import org.uqbar.xtrest.minModelObjects.MinHabitacion
import org.uqbar.acciones.Accion
import org.uqbar.xtrest.minModelObjects.MinAccion
import org.uqbar.xtrest.respuestas.RespuestaDeRealizarAccion
import org.uqbar.acciones.RespuestaDeRealizarAccionModel
import org.uqbar.xtrest.minModelObjects.MinJugador
import org.uqbar.jugador.Jugador
import org.uqbar.Usuario
import org.uqbar.xtrest.minModelObjects.MinUsuario
import org.uqbar.xtrest.respuestas.RespuestaLogin

class Minifier {
	def static MinLaberinto toMinLaberinto(Laberinto lab) {
		var minLab = new MinLaberinto => [
			nombreLaberinto = lab.nombreLaberinto
			idLaberinto = lab.idLaberinto
			imagePath = lab.imagePath
		]

		minLab
	}

	def static MinHabitacion toMinHabitacion(Habitacion hab) {
		var minHab = new MinHabitacion => [
			nombreHabitacion = hab.nombreHabitacion
			id = hab.id
			imagePath = hab.imagePath
			first = hab.first
			last = hab.last
			acciones = hab.acciones.map[a|toMinAccion(a)]
		]
		minHab
	}

	def static MinAccion toMinAccion(Accion acc) {
		var minAcc = new MinAccion => [
			nombre = acc.nombre
			id = acc.id
		]
		minAcc
	}

	def static MinJugador totMinJugador(Jugador j) {
		var minJugador = new MinJugador => [
			energia = j.energia
		]
		minJugador
	}

	def static toMinResponse(RespuestaDeRealizarAccionModel response) {
		var minResponse = new RespuestaDeRealizarAccion
		minResponse.type = response.type
		minResponse.item = response.item
		minResponse.idHabitacion = response.idHabitacion
//		minResponse.jugador = totMinJugador(response.unJugador)
		minResponse.action = null
		
		if (response.action != null) {
			minResponse.action = toMinAccion(response.action)
		}

		minResponse
	}
	def static toMinUsuario(Usuario u){
		var minUsuario = new MinUsuario()
		minUsuario.id = u.id
		minUsuario.nombre = u.nombre
		minUsuario
	}	
	def static toMinLogin(Usuario usuario) {
		var minResponse = new RespuestaLogin
		minResponse.usuario = toMinUsuario(usuario)
		minResponse.laberintos = usuario.laberintos.map[toMinLaberinto(it)]
		minResponse
	}
	
}
