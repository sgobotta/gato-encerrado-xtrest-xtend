package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.dummyData.GatoEncerradoWebDummyData

@Controller
class MainController {

    static XTRestAppModel game

    extension JSONUtils = new JSONUtils

    @Get("/laberintos/:id_usuario")
    def listaDeLaberintos() {
        
        ok(GatoEncerradoWebDummyData.getLaberintos(Integer.parseInt(id_usuario)).toJson)
    }
    
    @Get("/iniciar_laberintos/:id_usuario/:id_laberinto")
    def inciarLaberinto() {
        ok(GatoEncerradoWebDummyData.iniciarLaberinto(Integer.parseInt(id_usuario),Integer.parseInt(id_laberinto), game).toJson)
    }
    
    
    @Get("/realizar_accion/:id_habitacion/:id_accion")
    def realizarAccionHabitacion() {
        
        var res = game.realizarAccion(Integer.parseInt(id_habitacion), Integer.parseInt(id_accion))
        ok(res.toJson)
    }
 
    @Get("/gato_encerrado")
    def index2() {
        val data = #{
            
        }
        render('gatoencerrado.html', data)
    }   
    
    def static void main(String[] args) {
    	game = new XTRestAppModel()
        XTRest.start(MainController, 9001)
    }
}