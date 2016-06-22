package org.uqbar.xtrest.minModelObjects

import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class MinUser {
	int id
    String nombre
    
    new(){
    	
    }
    
    new(int id){
    	this.id = id
    }
}