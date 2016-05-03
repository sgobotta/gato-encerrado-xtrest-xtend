
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.Laberinto
import org.uqbar.Usuario
import org.uqbar.Habitacion
import org.uqbar.acciones.AgarrarItem
import org.uqbar.acciones.IrAHabitacion

@Data
class RespuestaDeLaberintos {
    Usuario usuario
}

@Data
class RespuestaDeIniciarLaberinto {
    Usuario usuario
    Laberinto laberinto
}

@Controller
class MainController {

    extension JSONUtils = new JSONUtils

    @Get("/laberintos/:id_usuario")
    def listaDeLaberintos() {
        
        val usuario = new Usuario
        usuario.id = Integer.parseInt(id_usuario)
        usuario.nombre = "usuario01"
        usuario.password = "1234"
        
        val lab1 = new Laberinto
            lab1.nombreLaberinto = "Cueva"
            lab1.idLaberinto = 01
            lab1.imagePath = "src/main/entrada.png"

        
        val lab2 = new Laberinto
            lab2.nombreLaberinto = "Cascada"
            lab2.idLaberinto = 02
            lab2.imagePath = "src/main/exit.png"
        
        usuario.agregarLaberinto(lab1)
        usuario.agregarLaberinto(lab2)
        
        ok(new RespuestaDeLaberintos(usuario).toJson)
    }
    
    @Get("/iniciar_laberintos/:id_usuario/:id_laberinto")
    def inciarLaberinto() {
        
        val usuario = new Usuario
        usuario.id = Integer.parseInt(id_usuario)
        usuario.nombre = "usuario01"
        usuario.password = "1234"
    
        val lab1 = new Laberinto
        lab1.nombreLaberinto = "Cueva"
        lab1.idLaberinto = 01
        lab1.imagePath = "src/images/lab/entrada.png"
    
        val hab1 = new Habitacion
        hab1.id = 01
        hab1.nombreHabitacion = "Entrada"
        hab1.imagePath = "src/images/hab/entrada.png"
    
        val hab2 = new Habitacion
        hab1.id = 02
        hab1.nombreHabitacion = "Salida"
        hab1.imagePath = "src/images/hab/salida.png"
       
        val accion1 = new AgarrarItem
        accion1.id = 01
        accion1.nombreItem = "mapa"
        
        hab1.agregarAccion(accion1)
        
        val accion2 = new IrAHabitacion
        accion2.id = 02
        accion2.habitacion = hab1
        
        hab1.agregarAccion(accion2)
        
       
        ok(new RespuestaDeIniciarLaberinto(usuario, laberinto))
    }
    
    def static void main(String[] args) {
        XTRest.start(MainController, 9000)
    }
}