package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.xtrest.dummyData.GatoEncerradoWebDummyData
import org.uqbar.xtrest.dummyData.UserDoesNotExistException
import org.uqbar.exceptions.UserDoesNotHaveLabException
import org.uqbar.exceptions.UserCantExecuteActionException
import org.uqbar.exceptions.PlayerIsNotOnThisRoomException
import org.uqbar.exceptions.ActionIsNotOnThisRoomException
import org.uqbar.xtrest.dummyData.LabDoesNotExistException
import org.uqbar.xtrest.dummyData.UserIsNotLoggedException

@Controller
class MainController {

//  static XTRestAppModel game
    static GEManager geManager

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
	        ok(GatoEncerradoWebDummyData.iniciarLaberinto(Integer.parseInt(id_usuario),Integer.parseInt(id_laberinto), geManager).toJson)
        } catch(UserDoesNotHaveLabException e){
        	badRequest(e.message)
        } catch(LabDoesNotExistException e){
        	badRequest(e.message)
        } catch(UserIsNotLoggedException e){
        	badRequest(e.message) // Muy raro que llegue a esto, pero por si acaso, esta el bad request...
        }
    }
    
    
    @Get("/realizar_accion/:id_habitacion/:id_accion/:id_usuario")
    def realizarAccionHabitacion() {
    	try{
	        response.contentType = "application/json"
	        var resTemp = geManager.realizarAccion(Integer.parseInt(id_habitacion), Integer.parseInt(id_accion), Integer.parseInt(id_usuario))
	        var res = GatoEncerradoWebDummyData.toMinResponse(resTemp)
	        ok(res.toJson)
        } catch(UserCantExecuteActionException e){
        	badRequest(e.message)
        } catch(PlayerIsNotOnThisRoomException e) {
        	badRequest(e.message)
        } catch(ActionIsNotOnThisRoomException e) {
        	badRequest(e.message)
        }
    }
    
    @Get("/drop_item/:id_usuario/:id_item")
    def tirarItem() {
            response.contentType = "application/json"
            geManager.getGameById(Integer.parseInt(id_usuario)).tirarItem(Integer.parseInt(id_usuario), Integer.parseInt(id_item))
            ok()
    }
    
    @Get("/users")
    def usuarios(){
    	response.contentType = "application/json"	
    	var res = geManager.getUsersAvailable
    	ok(res.toJson)

    }

    @Get("/login/:id_usuario")
    def logIn(){
    	geManager.logIn(Integer.parseInt(id_usuario))
    	ok()
    } 
    
    @Get("/logout/:id_usuario")
    def logOut(){
    	geManager.logOut(Integer.parseInt(id_usuario))
    	ok()
    }     
    
    // API para android especificamente
    @Get("/users/playing")
    def usuariosJugando(){
    	response.contentType = "application/json"	   	
    	var res = geManager.getUsersPlaying()
    	ok(res.toJson)
    }    
    
    def static void main(String[] args) {
        geManager = new GEManager
        XTRest.start(MainController, 9001)
    }
}