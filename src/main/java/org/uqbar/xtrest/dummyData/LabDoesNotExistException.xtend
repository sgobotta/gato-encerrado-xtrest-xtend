package org.uqbar.xtrest.dummyData

class LabDoesNotExistException extends Exception{
	override getMessage(){
		return "That maze doesn't exist."
	}
}