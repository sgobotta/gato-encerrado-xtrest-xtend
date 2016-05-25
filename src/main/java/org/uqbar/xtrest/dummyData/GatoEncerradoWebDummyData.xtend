package org.uqbar.xtrest.dummyData

import java.util.ArrayList
import org.uqbar.xtrest.respuestas.RespuestaDeLaberintos
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.minModelObjects.MinLaberinto
import org.uqbar.Habitacion
import org.uqbar.Laberinto

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
		
		var habList = new ArrayList<Habitacion>()
		
		var hab1 = new Habitacion => [
			nombreHabitacion 	= "Agujero extraño"
			id 					= 1
			imagePath			= ""
		]
		
		var hab2 = new Habitacion => [
			nombreHabitacion 	= "Tunel"
			id 					= 2
			imagePath			= ""
		]
		
		var hab3 = new Habitacion => [
			nombreHabitacion 	= "Salida"
			id 					= 3
			imagePath			= ""
		]
		
	}
	
	def static iniciarLaberinto2(XTRestAppModel game){
		
	}
	
	def static iniciarLaberinto3(XTRestAppModel game){
		
	}
	
	def static iniciarLaberinto4(XTRestAppModel game){
		
	}

	def static toMinLaberinto(Laberinto lab){
		var minLab = new MinLaberinto => [
			nombreLaberinto = lab.nombreLaberinto
			idLaberinto		= lab.idLaberinto
			imagePath		= lab.imagePath
		]
		
		minLab
	}
}