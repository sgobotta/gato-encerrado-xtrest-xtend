package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.LoginService
import org.uqbar.xtrest.api.annotation.Post
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.respuestas.PedidoSignUp
import org.uqbar.Laberinto
import java.util.ArrayList
import org.uqbar.Usuario
import org.uqbar.Account
import org.uqbar.xtrest.respuestas.RespuestaLogin
import org.uqbar.xtrest.respuestas.PedidoLogin

@Controller
class LoginWebController {

	
	extension JSONUtils = new JSONUtils

	LoginService loginService
	
	new(){
		loginService = new LoginService		
	}

	
    @Get("/loginpage")
    def login() {
        val data = #{
            
        }
        render('logingatoencerrado.html', data)
    }
	
	def static void main(String[] args) {
		XTRest.start(LoginWebController, 9001)
	}
}

