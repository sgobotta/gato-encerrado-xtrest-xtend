package org.uqbar.xtrest.respuestas

import org.uqbar.Usuario
import org.uqbar.Laberinto
import org.uqbar.jugador.Elemento
import java.util.List

@Data
class RespuestaDeIniciarLaberinto {
    Usuario usuario
    Laberinto laberinto
    List<Elemento> inventario
}