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
import org.uqbar.acciones.RespuestaDeRealizarAccionModel
import org.uqbar.xtrest.respuestas.RespuestaDeRealizarAccion

class GatoEncerradoWebDummyData {
	
	// Si pudiera hacer un static { } para instanciar los laberintos y dejarlos staticos lo haria. 
	// Por alguna razon no puedo
	
	def static getLaberintos(int idUsuario){
		var list = new ArrayList<MinLaberinto>()
        
        var lab1 = new Laberinto => [
            nombreLaberinto = "Cueva"
            idLaberinto     = 01
            imagePath       = "http://localhost/static/cueva_hobbit.jpg"
        ]

        var lab2 = new Laberinto => [
            nombreLaberinto = "Cascada"
            idLaberinto     = 02
            imagePath       = "http://localhost/static/cascada.jpg"
        ]
        
        var lab3 = new Laberinto => [
            nombreLaberinto = "Casa Embrujada"
            idLaberinto     = 03
            imagePath       = "http://localhost/static/casa.jpg"
        ]
        
        var lab4 = new Laberinto => [
            nombreLaberinto = "Cementerio"
            idLaberinto     = 04
            imagePath       = "http://localhost/static/cementerio.jpg"
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
            imagePath       = "http://localhost/static/cueva_hobbit.jpg"
        ]
		
		var habList = new ArrayList<MinHabitacion>()
		
		val hab1 = new Habitacion => [
			nombreHabitacion 	= "Agujero extraÃ±o"
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
				descripcion	= "Esto seria muy util para escalar una pared muy alta..."
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
        var lab = new Laberinto => [
            nombreLaberinto = "Cascada"
            idLaberinto     = 01
            imagePath       = "http://localhost/static/cascada.jpg"
        ]
        
        var habList = new ArrayList<MinHabitacion>()
        
        val hab1 = new Habitacion => [
            nombreHabitacion    = "Lago"
            id                  = 1
            imagePath           = ""
            first               = true
        ]
        
        val hab2 = new Habitacion => [
            nombreHabitacion    = "Precipicio"
            id                  = 2
            imagePath           = ""
        ]
        
        val hab3 = new Habitacion => [
            nombreHabitacion    = "Bosque"
            id                  = 3
            imagePath           = ""
        ]
        
        val hab4 = new Habitacion => [
            nombreHabitacion    = "Entrada a cueva"
            id                  = 4
            imagePath           = ""
            last                = true
        ]
        
        val paracaidas = new Elemento() => [
                nombre      = "Paracaidas"
                descripcion = "Por fin algo de utilidad!"
                id          = 1
        ]

        val linterna = new Elemento() => [
                nombre      = "Linterna"
                descripcion = "Podria resultar util en lugares oscuros..."
                id          = 2
        ]                
        
        val agarrarParacaidas = new AgarrarItem() => [
            item = paracaidas
            id   = 1
        ]
        
        val irAHab2 = new IrAHabitacion() => [
            habitacion = hab2
            id         = 2
        ]
        
        val irAHab1 = new IrAHabitacion() => [
            habitacion = hab1
            id         = 3
        ]
        
        val irAHab3 = new IrAHabitacion() => [
            habitacion = hab3
            id         = 4
        ]
        
        val irASalida = new IrAHabitacion() => [
            habitacion  = hab4
            id          = 5
        ]
        
        val usarParacaidas = new UsarItem() => [
            item        = paracaidas
            accion      = irAHab3
            id          = 6
        ]
        
        val agarrarLinterna = new AgarrarItem() => [
            item = linterna
            id   = 7
        ]
        
        val usarLinterna = new UsarItem() => [
            item        = linterna
            accion      = irASalida
            id          = 8
        ]                
        
        hab1.agregarAccion(agarrarParacaidas)
        hab1.agregarAccion(irAHab2)
        hab2.agregarAccion(irAHab1)
        hab2.agregarAccion(usarParacaidas)
        hab3.agregarAccion(agarrarLinterna)
        hab3.agregarAccion(usarLinterna)
        
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
	
	def static iniciarLaberinto3(XTRestAppModel game){
        var lab = new Laberinto => [
            nombreLaberinto = "Casa Embrujada"
            idLaberinto     = 03
            imagePath       = "http://localhost/static/casa.jpg"
        ]
		
		var habList = new ArrayList<MinHabitacion>()
		
		val hab1 = new Habitacion => [
			nombreHabitacion 	= "Puerta ensangrentada"
			id 					= 1
			imagePath			= ""
			first 				= true
		]
		
		val hab2 = new Habitacion => [
			nombreHabitacion 	= "Pasillo"
			id 					= 2
			imagePath			= ""
		]
		
		val hab3 = new Habitacion => [
			nombreHabitacion 	= "Habitacion de la niña"
			id 					= 3
			imagePath			= ""
		]
		
		val hab4 = new Habitacion => [
			nombreHabitacion 	= "Habitacion de los padres"
			id 					= 4
			imagePath			= ""
		]
		
		val hab5 = new Habitacion => [
			nombreHabitacion	= "Puerta trasera"
			id					= 5
			imagePath			= ""
			last 				= true			
		]
		
		val llave = new Elemento() => [
				nombre 		= "Llave ensangrentada"
				descripcion	= "P-p-por qué esta cubierta en sangre? ..."
				id			= 1
		]
		
		val hacha = new Elemento() => [
				nombre		= "Hacha oxidada"
				descripcion	= "Me pregunto por qué guardarian un hacha en su habitacion..."
				id			= 2
		]
		
		val picaporte = new Elemento() => [
				nombre		= "Picaporte viejo"
				descripcion	= "Puede que todavia sirva para abrir una puerta..."
				id			= 3
		]
		
		val agarrarLlave = new AgarrarItem() => [
			item = llave
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
		
		val irAHab4 = new IrAHabitacion() => [
			habitacion	= hab4
			id 			= 5
		]
		
		val irASalida = new IrAHabitacion() => [
			habitacion	= hab5
			id			= 6
		]
		
		val usarLlave = new UsarItem() => [
			item		= llave
			accion		= irAHab2
			id 			= 6
		]
		
		val agarrarHacha = new AgarrarItem() => [
			item		= hacha
			id			= 7
		]
		
		val usarHacha = new UsarItem() => [
			item		= hacha
			accion		= irASalida
			id			= 8
		]
		
		val agarrarPicaporte = new AgarrarItem() => [
			item		= picaporte
			id			= 9
		]
		
		val usarPicaporte = new UsarItem() => [
			item		= picaporte
			accion		= irAHab4
			id			= 10
		]
		
		hab1.agregarAccion(agarrarLlave)
		hab1.agregarAccion(usarLlave)
		hab2.agregarAccion(irAHab1)
		hab2.agregarAccion(irAHab3)
		hab2.agregarAccion(usarHacha)
		hab2.agregarAccion(usarPicaporte)
		hab3.agregarAccion(irAHab2)
		hab3.agregarAccion(agarrarPicaporte)
		hab4.agregarAccion(irAHab2)
		hab4.agregarAccion(agarrarHacha)
		
		lab.agregarHabitacion(hab1)
		lab.agregarHabitacion(hab2)
		lab.agregarHabitacion(hab3)
		lab.agregarHabitacion(hab4)
		lab.agregarHabitacion(hab5)
		
		habList.add(toMinHabitacion(hab1))
		habList.add(toMinHabitacion(hab2))
		habList.add(toMinHabitacion(hab3))
		habList.add(toMinHabitacion(hab4))
		habList.add(toMinHabitacion(hab5))
		
		val jugador = new Jugador()
		
		game.nuevoJuego(lab, jugador)
		
		val res = new RespuestaDeIniciarLaberinto(habList, jugador.inventario)
		res
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
	
	def static toMinResponse(RespuestaDeRealizarAccionModel response){
		var minResponse = new RespuestaDeRealizarAccion => [
			type = response.type
			item = response.item
			if(response.action != null){
			action = toMinAccion(response.action)
			} else {
			action = null
			}
			idHabitacion = response.idHabitacion
		]
		minResponse
	}
}