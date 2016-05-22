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

	@Post("/login")
	def logear(@Body String body){
		val pedidoLogin = body.fromJson(PedidoLogin)
		
		try{
			var account = loginService.login(pedidoLogin.username, pedidoLogin.password)
			ok(new RespuestaLogin(account).toJson)
		}
		catch(Exception a){
			badRequest("No se pudo logear a " + pedidoLogin.username)
		}
	}
	
	@Post("/signup")
	def registrar(@Body String body){
		val pedidoSignUp = body.fromJson(PedidoSignUp)
		val laberintos = new ArrayList<Laberinto>()
		
		val lab1 = new Laberinto()
		lab1.nombreLaberinto = "laberinto"
		laberintos.add(lab1)
		val user = new Usuario
		user.nombre = "admin" 
		user.laberintos = laberintos
				
		val cuenta = new Account() => [
			username = pedidoSignUp.username
			password = pedidoSignUp.password
			usuario = user 
			]
			
		try{
			if(pedidoSignUp.repeatpassword != pedidoSignUp.password){
				throw new Exception("sacar del controller")
			}
			loginService.registrarCuenta(cuenta)
			ok("Cuenta creada satisfactoriamente")
		}
		catch(Exception a){
			badRequest("No se pudo crear esa cuenta")
		}
		
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

