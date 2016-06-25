package org.uqbar.xtrest.dummyData

import java.lang.Exception

class UserNotPlayingThatLabException extends Exception {

	override String getMessage(){
		return "The user is not actually playing that maze, try again later."
	}	
}