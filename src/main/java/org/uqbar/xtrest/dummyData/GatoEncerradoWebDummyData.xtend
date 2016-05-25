package org.uqbar.xtrest.dummyData

import java.util.ArrayList
import org.uqbar.xtrest.respuestas.RespuestaDeLaberintos
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.minModelObjects.MinLaberinto
import org.uqbar.Habitacion
import org.uqbar.Laberinto
import org.uqbar.xtrest.minModelObjects.MinHabitacion
import org.uqbar.acciones.Accion
import org.uqbar.xtrest.minModelObjects.MinAccion
import org.uqbar.acciones.AgarrarItem
import org.uqbar.jugador.Elemento
import org.uqbar.acciones.IrAHabitacion
import org.uqbar.acciones.UsarItem
import org.uqbar.jugador.Jugador
import org.uqbar.xtrest.respuestas.RespuestaDeIniciarLaberinto

class GatoEncerradoWebDummyData {
	
	// Si pudiera hacer un static { } para instanciar los laberintos y dejarlos staticos lo haría. 
	// Por alguna razon no puedo
	
	def static getLaberintos(int idUsuario){
		var list = new ArrayList<MinLaberinto>()
        
        var lab1 = new Laberinto => [
            nombreLaberinto = "Cueva"
            idLaberinto     = 01
            imagePath       = ""
        ]

        var lab2 = new Laberinto => [
            nombreLaberinto = "Cascada"
            idLaberinto     = 02
            imagePath       = ""
        ]
        
        var lab3 = new Laberinto => [
            nombreLaberinto = "Casa Embrujada"
            idLaberinto     = 03
            imagePath       = ""
        ]
        
        var lab4 = new Laberinto => [
            nombreLaberinto = "Cementerio"
            idLaberinto     = 04
            imagePath       = ""
        ]
        
        list.add(toMinLaberinto(lab1))
        list.add(toMinLaberinto(lab2))
        list.add(toMinLaberinto(lab3))
        list.add(toMinLaberinto(lab4))
        
        new RespuestaDeLaberintos(list)
	}
	
	def static iniciarLaberinto(int idUsuario, int idLaberinto, XTRestAppModel game){
		switch(idLaberinto){
			case 1: iniciarLaberinto1(game)
			case 2: iniciarLaberinto2(game)
			case 3: iniciarLaberinto3(game)
			case 4: iniciarLaberinto4(game)
		}
	}
	
	def static iniciarLaberinto1(XTRestAppModel game){
		var lab = new Laberinto => [
            nombreLaberinto = "Cueva"
            idLaberinto     = 01
            imagePath       = ""
        ]
		
		var habList = new ArrayList<MinHabitacion>()
		
		val hab1 = new Habitacion => [
			nombreHabitacion 	= "Agujero extraño"
			id 					= 1
			imagePath			= ""
			first 				= true
		]
		
		val hab2 = new Habitacion => [
			nombreHabitacion 	= "Tunel"
			id 					= 2
			imagePath			= ""
		]
		
		val hab3 = new Habitacion => [
			nombreHabitacion 	= "Pared enorme"
			id 					= 3
			imagePath			= ""
		]
		
		val hab4 = new Habitacion => [
			nombreHabitacion 	= "Salida"
			id 					= 4
			imagePath			= ""
			last 				= true
		]
		
		val piqueta = new Elemento() => [
				nombre 		= "piqueta para escalar"
				descripcion	= "Esto sería muy util para escalar una pared muy alta..."
				id			= 1
		]
		
		val agarrarPiqueta = new AgarrarItem() => [
			item = piqueta
			id	 = 1
		]
		
		val irAHab2 = new IrAHabitacion() => [
			habitacion = hab2
			id		   = 2
		]
		
		val irAHab1 = new IrAHabitacion() => [
			habitacion = hab1
			id 		   = 3
		]
		
		val irAHab3 = new IrAHabitacion() => [
			habitacion = hab3
			id		   = 4
		]
		
		val irASalida = new IrAHabitacion() => [
			habitacion	= hab4
			id 			= 5
		]
		
		val usarPiqueta = new UsarItem() => [
			item		= piqueta
			accion		= irASalida
			id 			= 6
		]
		
		hab1.agregarAccion(agarrarPiqueta)
		hab1.agregarAccion(irAHab2)
		hab2.agregarAccion(irAHab1)
		hab2.agregarAccion(irAHab3)
		hab3.agregarAccion(irAHab2)
		hab3.agregarAccion(usarPiqueta)
		
		lab.agregarHabitacion(hab1)
		lab.agregarHabitacion(hab2)
		lab.agregarHabitacion(hab3)
		lab.agregarHabitacion(hab4)
		
		habList.add(toMinHabitacion(hab1))
		habList.add(toMinHabitacion(hab2))
		habList.add(toMinHabitacion(hab3))
		habList.add(toMinHabitacion(hab4))
		
		val jugador = new Jugador()
		
		game.nuevoJuego(lab, jugador)
		
		val res = new RespuestaDeIniciarLaberinto(habList, jugador.inventario)
		res
	}
	
	def static iniciarLaberinto2(XTRestAppModel game){
		// TODO
	}
	
	def static iniciarLaberinto3(XTRestAppModel game){
		// TODO
	}
	
	def static iniciarLaberinto4(XTRestAppModel game){
		// TODO
	}

	def static toMinLaberinto(Laberinto lab){
		var minLab = new MinLaberinto => [
			nombreLaberinto = lab.nombreLaberinto
			idLaberinto		= lab.idLaberinto
			imagePath		= lab.imagePath
		]
		
		minLab
	}
	
	def static toMinHabitacion(Habitacion hab){
		var minHab = new MinHabitacion => [
			nombreHabitacion = hab.nombreHabitacion
			id				 = hab.id
			imagePath		 = hab.imagePath
			first			 = hab.first
			last			 = hab.last
			acciones		 = hab.acciones.map[a | toMinAccion(a)]
		]
		minHab
	}
	
	def static toMinAccion(Accion acc) {
		var minAcc = new MinAccion => [
			nombre = acc.nombre
			id	   = acc.id
		]
		minAcc
	}
	
}