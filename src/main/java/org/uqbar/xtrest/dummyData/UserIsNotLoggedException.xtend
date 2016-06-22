package org.uqbar.xtrest.dummyData

import java.lang.Exception

class UserIsNotLoggedException extends Exception {
	
	override getMessage(){
		return "User is not logged in."
	}
}