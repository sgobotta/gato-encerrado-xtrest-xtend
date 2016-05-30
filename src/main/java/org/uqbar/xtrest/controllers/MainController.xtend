package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.dummyData.GatoEncerradoWebDummyData
import org.uqbar.xtrest.dummyData.UserDoesNotExistException
import org.uqbar.exceptions.UserDoesNotHaveLabException
import org.uqbar.exceptions.UserCantExecuteActionException
import org.uqbar.exceptions.PlayerIsNotOnThisRoomException
import org.uqbar.exceptions.ActionIsNotOnThisRoomException
import org.uqbar.xtrest.dummyData.LabDoesNotExistException

@Controller
class MainController {

    static XTRestAppModel game

    extension JSONUtils = new JSONUtils

    @Get("/laberintos/:id_usuario")
    def listaDeLaberintos() {
    	try{
	        response.contentType = "application/json"
	        ok(GatoEncerradoWebDummyData.getLaberintos(Integer.parseInt(id_usuario)).toJson)
        } catch(UserDoesNotExistException e){
        	badRequest(e.message)
        }
    }
    
    @Get("/iniciar_laberinto/:id_usuario/:id_laberinto")
    def inciarLaberinto() {
    	try{
	    	response.contentType = "application/json"
	        ok(GatoEncerradoWebDummyData.iniciarLaberinto(Integer.parseInt(id_usuario),Integer.parseInt(id_laberinto), game).toJson)
        } catch(UserDoesNotHaveLabException e){
        	badRequest(e.message)
        } catch(LabDoesNotExistException e){
        	badRequest(e.message)
        }
    }
    
    
    @Get("/realizar_accion/:id_habitacion/:id_accion/:id_usuario")
    def realizarAccionHabitacion() {
    	try{
	        response.contentType = "application/json"
	        var resTemp = game.realizarAccion(Integer.parseInt(id_habitacion), Integer.parseInt(id_accion), Integer.parseInt(id_usuario))
	        var res = GatoEncerradoWebDummyData.toMinResponse(resTemp)
	        ok(res.toJson)
        } catch(UserCantExecuteActionException e){
        	badRequest(e.message)
        } catch(PlayerIsNotOnThisRoomException e) {
        	badRequest(e.message)
        } catch(ActionIsNotOnThisRoomException e) {
        	badRequest("The action selected doesn't belong to your current room.")
        }
    }
    
    // fijate si podes actualizar el inventario del juego con la data que nos llega
    @Get("/drop_item/:id_usuario/:id_item")
    def tirarItem() {
        
            response.contentType = "application/json"
            game.tirarItem(Integer.parseInt(id_usuario), Integer.parseInt(id_item))
            ok(response.toJson)
    }
    
 
    // eliminar
 	// Esto quedo de m�s de cuando estabamos boludeando en xtrest, habria que borrarlo... (creo).
 	// -Juanma
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