package org.uqbar.xtrest.minModelObjects

import org.eclipse.xtend.lib.annotations.Accessors
import java.util.List

@Accessors
class MinHabitacion {
	String nombreHabitacion
	String imagePath
	int id
	List<MinAccion> acciones
	boolean first
	boolean last
}