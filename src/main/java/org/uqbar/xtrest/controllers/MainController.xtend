package org.uqbar.xtrest.controllers

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.appmodel.XTRestAppModel
import org.uqbar.xtrest.api.annotation.Post
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.respuestas.PedidoLogin
import org.uqbar.LoginService
import org.uqbar.xtrest.dummyData.GatoEncerradoWebDummyData
import org.uqbar.xtrest.respuestas.PedidoSignUp

@Controller
class MainController {

	static XTRestAppModel game

	extension JSONUtils = new JSONUtils

	LoginService loginService = new LoginService
	
	@Post("/login")
	def logear(@Body String body) {
		val account = body.fromJson(PedidoLogin).account
		var acc = loginService.login(account.username, account.password)

		var res = GatoEncerradoWebDummyData.getRespuestaLogin(acc)

		ok(res.toJson)
	}

	@Post("/signup")
	def registrar(@Body String body) {
		val pedidoSignUp = body.fromJson(PedidoSignUp)

		var cuenta = pedidoSignUp.account
		var reppassword = pedidoSignUp.repeatpassword
		var appmodel = new XTRestAppModel
		appmodel.validar(cuenta, reppassword)

		loginService.registrarCuenta(cuenta)
		ok("Cuenta creada satisfactoriamente")

	}

	//no se usa
	@Get("/laberintos/:id_usuario")
	def listaDeLaberintos() {
		response.contentType = "application/json"
		ok(GatoEncerradoWebDummyData.getLaberintos(Integer.parseInt(id_usuario)).toJson)
	}

	@Get("/iniciar_laberinto/:id_usuario/:id_laberinto")
	def inciarLaberinto() {
		response.contentType = "application/json"
		ok(
			GatoEncerradoWebDummyData.iniciarLaberinto(Integer.parseInt(id_usuario), Integer.parseInt(id_laberinto),
				game).toJson)
	}

	@Get("/realizar_accion/:id_habitacion/:id_accion/:id_usuario")
	def realizarAccionHabitacion() {
		response.contentType = "application/json"
		var resTemp = game.realizarAccion(Integer.parseInt(id_habitacion), Integer.parseInt(id_accion),
			Integer.parseInt(id_usuario))
		var res = GatoEncerradoWebDummyData.toMinResponse(resTemp)
		ok(res.toJson)
	}

	@Get("/gato_encerrado")
	def index2() {
		val data = #{}
		render('gatoencerrado.html', data)
	}
	@Get("/loginpage")
	def indexlogin() {
		val data = #{}
		render('logingatoencerrado.html', data)
	}
	
	def static void main(String[] args) {
		game = new XTRestAppModel()
		XTRest.start(MainController, 9001)
	}
}
