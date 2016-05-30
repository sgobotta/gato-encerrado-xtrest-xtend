package org.uqbar.xtrest.dummyData

class UserDoesNotExistException extends Exception{
	override getMessage(){
		return "That user doesn't exist."
	}
}