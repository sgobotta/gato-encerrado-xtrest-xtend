package org.uqbar.xtrest.respuestas

import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.Account

@Accessors
class PedidoSignUp{
	
	Account account
	String repeatpassword
}