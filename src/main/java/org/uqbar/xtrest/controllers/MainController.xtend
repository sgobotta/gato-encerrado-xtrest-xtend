package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.Laberinto
import org.uqbar.Usuario
import org.uqbar.Habitacion
import org.uqbar.acciones.AgarrarItem
import org.uqbar.acciones.IrAHabitacion
import org.uqbar.jugador.Elemento
import org.uqbar.jugador.Jugador
import java.util.ArrayList
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.respuestas.RespuestaDeLaberintos
import org.uqbar.xtrest.respuestas.RespuestaDeIniciarLaberinto
import org.uqbar.xtrest.respuestas.RespuestaDeRealizarAccion

@Controller
class MainController {

    XTRestAppModel appmodel

    extension JSONUtils = new JSONUtils

    @Get("/laberintos/:id_usuario")
    def listaDeLaberintos() {
        
//        val usuario = new Usuario => [
//            id          = Integer.parseInt(id_usuario)
//            nombre      = "usuario01"
//            password    = "1234"    
//        ]
        
        var list = new ArrayList<Laberinto>()
        
        val lab1 = new Laberinto => [
            nombreLaberinto = "Cueva"
            idLaberinto     = 01
            imagePath       = "src/main/entrada.png"
        ]

        val lab2 = new Laberinto => [
            nombreLaberinto = "Cascada"
            idLaberinto     = 02
            imagePath       = "src/main/exit.png"
        ]
        
        list.add(lab1)
        list.add(lab2)
        
        ok(new RespuestaDeLaberintos(list).toJson)
    }
    
    @Get("/iniciar_laberintos/:id_usuario/:id_laberinto")
    def inciarLaberinto() {
        
        val usuario = new Usuario => [

            id          = Integer.parseInt(id_usuario)
            nombre      = "usuario01"
            password    = "1234"            
        ]

    
        val laberinto = new Laberinto => [
            nombreLaberinto = "Cueva"
            idLaberinto     = 01
            imagePath       = "src/images/lab/entrada.png"            
        ]

        val hab1 = new Habitacion => [
            id                  = 01
            nombreHabitacion    = "Entrada"
            imagePath           = "src/images/hab/entrada.png"    
        ]
        
        val hab2 = new Habitacion => [
            id                  = 02
            nombreHabitacion    = "Salida"
            imagePath           = "src/images/hab/salida.png"            
        ]
       
        val accion1 = new AgarrarItem => [
            id          = 01
            item  = new Elemento() => [
            	nombre = "mapa"   
            ]         
        ]

        val accion2 = new IrAHabitacion => [
            id          = 02
            habitacion  = hab1    
        ]
        
        val accion3 = new AgarrarItem => [
            id          = 03
            item  = new Elemento() => [
            	nombre = "diamante"   
            ]         
        ]

        val jugador = new Jugador
        
        val elemento1 = new Elemento => [
            id            = 01
            nombre        = "Soga"
            descripcion   = "Que hago con una soga?"       
        ]
        
        val elemento2 = new Elemento => [
            id            = 02
            nombre        = "Paracaidas"
            descripcion   = "Un paracaidas en una cueva?!"
        ]
        
        val inventario = new ArrayList<Elemento>()
        inventario.add(elemento1)
        inventario.add(elemento2)
        
        jugador.inventario = inventario

        hab1.agregarAccion(accion1)
        hab2.agregarAccion(accion2)
        hab2.agregarAccion(accion3)
        
        laberinto.agregarHabitacion(hab1)
        laberinto.agregarHabitacion(hab2)
        laberinto.jugador = jugador
        
        usuario.agregarLaberinto(laberinto)
        
       //esto deberia devolver los laberintos!!!
        ok(new RespuestaDeIniciarLaberinto(usuario, laberinto, laberinto.jugador.inventario).toJson)
    }
    
    
    @Get("/realizar_accion/:id_habitacion/:id_accion")
    def realizarAccionHabitacion() {
        
        var habitacion = Integer.parseInt(id_habitacion)
        var accion = Integer.parseInt(id_accion)
        var res = appmodel.realizarAccion(habitacion, accion)
        var test = new RespuestaDeRealizarAccion(appmodel.laberintoActual, appmodel.jugador, appmodel.findHabitacionById(habitacion))
        ok(res.toJson)
    }
 
    @Get("/gato_encerrado")
    def index2() {
        val data = #{
            
        }
        render('gatoencerrado.html', data)
    }   
    
    @Get("/pruebaGato")
    def prueba(){
    	        val data = #{
            
        }
        render('inicio.html', data)
    }
    
    def static void main(String[] args) {
        XTRest.start(MainController, 9001)
    }
}