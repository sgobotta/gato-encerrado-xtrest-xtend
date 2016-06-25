package org.uqbar.xtrest.controllers

import org.uqbar.appmodel.XTRestAppModel
import java.util.List
import java.util.ArrayList
import org.uqbar.Usuario
import org.uqbar.Laberinto
import org.uqbar.jugador.Jugador
import org.uqbar.xtrest.dummyData.GatoEncerradoWebDummyData
import org.uqbar.xtrest.minModelObjects.MinUser
import org.uqbar.xtrest.dummyData.UserIsNotLoggedException
import org.uqbar.xtrest.dummyData.UserNotPlayingThatLabException
import org.uqbar.xtrest.dummyData.UserDoesNotExistException

class GEManager {
 
    List<XTRestAppModel> games = new ArrayList<XTRestAppModel>
    List<MinUser> usersThatLoggedIn = new ArrayList<MinUser>
   
    def logIn(int id){
    	if(GatoEncerradoWebDummyData.isValidUserId(id)){
    		this.usersThatLoggedIn.add(new MinUser(id))
    	} else {
    		throw new UserDoesNotExistException
    	}
    }
    
    def logOut(int id){
    	this.usersThatLoggedIn.remove(getUserById(id))
    	this.deleteGamesFromUserWithId(id)
    }
	
	def deleteGamesFromUserWithId(int id) {
		var toDelete = new ArrayList<XTRestAppModel>
		for(game : games){
			if(game.usuario.id == id){
				toDelete.add(game)
			}
		}
		for(game : toDelete){
			games.remove(game)
		}
	}
    
    def getUserById(int id){
    	var MinUser res = null
    	for(user : usersThatLoggedIn){
    		if(user.id == id){
    			res = user
    		}
    	}
    	res
    }
    
    def getGameById(int idUsuario) {
        var XTRestAppModel gameRes = null
        for(game : games){
            if(game.usuario.id == idUsuario){
                gameRes = game
            }  
        }
        gameRes
    }
    
    def getInventoryById(int idUsuario, int idLaberinto){
    	if(getGameById(idUsuario) != null && getGameById(idUsuario).laberintoActual.idLaberinto == idLaberinto){
	    	var game = getGameById(idUsuario)
	    	game.jugador.inventario
    	} else {
    		throw new UserNotPlayingThatLabException()
    	}
    }
    
    def getUsersAvailable(){
    	var res = new ArrayList<MinUser>
    	for(user : GatoEncerradoWebDummyData.getMinUsers){
    		if(getUserById(user.id) == null){
    			res.add(user)
    		}
    	}
    	res
    }
    
    def nuevoJuego(Usuario user, Laberinto lab, Jugador jug){
		if(getUserById(user.id) != null){
			if(getGameById(user.id) != null){
				games.remove(getGameById(user.id))
			}
		    var game = new XTRestAppModel
		    game.nuevoJuego(user, lab, jug)
		    games.add(game)
		    
		} else {
			throw new UserIsNotLoggedException
		}
    }
    
    def realizarAccion(int idHabitacion, int idAccion, int idUsuario){
	    var res = this.getGameById(idUsuario).realizarAccion(idHabitacion, idAccion, idUsuario)
	    if(res.type == 'ganar'){
	    	this.games.remove(this.getGameById(idUsuario))
	    }
	    res
    }
    
    def getUsersPlaying(){
    	games.map[GatoEncerradoWebDummyData.toMinUser(it.usuario)]
    }
    
    def getUsersLogged(){
    	var userList = usersThatLoggedIn
    	userList.map[GatoEncerradoWebDummyData.getMinUserById(it.id)]
    }
}