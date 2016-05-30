package org.uqbar.xtrest.controllers

import org.uqbar.appmodel.XTRestAppModel
import java.util.List
import java.util.ArrayList
import org.uqbar.Usuario
import org.uqbar.Laberinto
import org.uqbar.jugador.Jugador

class GEManager {
 
    List<XTRestAppModel> games = new ArrayList<XTRestAppModel>
   
    
    def getGameById(int idUsuario) {
        var XTRestAppModel gameRes = null
        for(game : games){
            if(game.usuario.id == idUsuario){
                gameRes = game
            }  
        }
        gameRes
    }
    
    def nuevoJuego(Usuario user, Laberinto lab, Jugador jug){
        var game = new XTRestAppModel
        game.nuevoJuego(user, lab, jug)
        games.add(game)
    }
    
}