package org.uqbar.xtrest.dummyData

import org.uqbar.Laberinto
import java.util.ArrayList
import org.uqbar.xtrest.minModelObjects.MinHabitacion
import org.uqbar.Habitacion
import org.uqbar.jugador.Elemento
import org.uqbar.acciones.AgarrarItem
import org.uqbar.acciones.IrAHabitacion
import org.uqbar.acciones.UsarItem
import org.uqbar.acciones.Accion
import org.uqbar.xtrest.minModelObjects.MinAccion
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class LaberintoCuatroDummy {

    Laberinto lab
    ArrayList<MinHabitacion> habList
    
    new() {
        this.lab = new Laberinto => [
            nombreLaberinto = "Cementerio"
            idLaberinto     = 04
            imagePath       = "images/cementerio/cementerio.jpg"
        ]
    
        /**
         * Habitaciones
         */
            
        habList = new ArrayList<MinHabitacion>()
        
        val hab1 = new Habitacion => [
            nombreHabitacion    = "Entrada del cementerio"
            id                  = 1
            imagePath           = "images/cementerio/01_entrada.jpg"
            first               = true
        ]
        
        val hab2 = new Habitacion => [
            nombreHabitacion    = "Salida"
            id                  = 2
            imagePath           = ""
            last                = true          
        ]        
        
        val hab3 = new Habitacion => [
            nombreHabitacion    = "Camino de lapidas"
            id                  = 3
            imagePath           = "images/cementerio/03_camino_lapidas.jpg"
        ]
        
        val hab4 = new Habitacion => [
            nombreHabitacion    = "Cuarto de utileria"
            id                  = 4
            imagePath           = "images/cementerio/04_cuarto_utileria.jpg"
        ]
        
        val hab5 = new Habitacion => [
            nombreHabitacion    = "Casucha del conserje"
            id                  = 5
            imagePath           = "images/cementerio/05_casucha_conserje.jpg"
        ]

        val hab6 = new Habitacion => [
            nombreHabitacion    = "Sotano del conserje"
            id                  = 6
            imagePath           = "images/cementerio/06_sotano_conserje.jpg"         
        ]
        
        val hab7 = new Habitacion => [
            nombreHabitacion    = "Panteon del cementerio"
            id                  = 7
            imagePath           = "images/cementerio/07_panteon.jpg"          
        ]        
 
        val hab8 = new Habitacion => [
            nombreHabitacion    = "Jardines encantados"
            id                  = 8
            imagePath           = "images/cementerio/08_jardines_encantados.jpg"
        ]        
        
        val hab9 = new Habitacion => [
            nombreHabitacion    = "Invernadero incandescente"
            id                  = 9
            imagePath           = "images/cementerio/09_invernadero.png"
        ]        
        
        val hab10 = new Habitacion => [
            nombreHabitacion    = "Barrera magica impenetrable"
            id                  = 10
            imagePath           = "images/cementerio/10_barrera_magica.jpg"          
        ]
        
        // va al patio de gengi
        val hab11 = new Habitacion => [
            nombreHabitacion    = "Atmosfera de extraña atraccion"
            id                  = 11
            imagePath           = "images/cementerio/11_atmosfera.jpg"
        ]
        
        val hab12 = new Habitacion => [
            nombreHabitacion    = "Crematorio espeluznante"
            id                  = 12
            imagePath           = "images/cementerio/12_crematorio.jpg"
        ]
        
        val hab13 = new Habitacion => [
            nombreHabitacion    = "Salon principal abandonado"
            id                  = 13 
            imagePath           = "images/cementerio/13_salon_principal.jpg"         
        ]
        
        val hab14 = new Habitacion => [
            nombreHabitacion    = "Cocina de la recepcion"
            id                  = 14
            imagePath           = "images/cementerio/14_cocina.jpg"          
        ]
        
        val hab15 = new Habitacion => [
            nombreHabitacion    = "Cripta de la familia Robinson"
            id                  = 15
            imagePath           = "images/cementerio/15_cripta.jpg"          
        ]
        
        val hab16 = new Habitacion => [
            nombreHabitacion    = "Claro en el bosque"
            id                  = 16
            imagePath           = "images/cementerio/16_claro_bosque.png"          
        ]

        val hab17 = new Habitacion => [
            nombreHabitacion    = "El Bosque Tenebroso!"
            id                  = 17 
            imagePath           = "images/cementerio/17_bosque_tenebroso.jpg"
        ]
        
        val hab18 = new Habitacion => [
            nombreHabitacion    = "Casa del Coloso"
            id                  = 18
            imagePath           = "images/cementerio/18_casa_coloso.jpg"          
        ]                        
        
        val hab19 = new Habitacion => [
            nombreHabitacion    = "Casa de Jengibre"
            id                  = 19 
            imagePath           = "images/cementerio/19_casa_jengibre.jpg"         
        ]
        val hab20 = new Habitacion => [
            nombreHabitacion    = "Patio de Jengibre"
            id                  = 20 
            imagePath           = "images/cementerio/20_patio_jengibre.jpg"
        ]
        
        /**
         * Elementos
         */
        
        val pala = new Elemento() => [
                nombre      = "Pala embarrada"
                descripcion = "Parece en buen estado, alguien debio haberla usado ultimamente"
                id          = 1
        ]
        
        val hoz = new Elemento() => [
                nombre      = "Hoz"
                descripcion = "Una hoz bien afilada. Tal vez si fuera jardinero me seria de gran utilidad..."
                id          = 2
        ]        
        
        val mapa = new Elemento() => [
                nombre      = "Mapa viejo"
                descripcion = "El mapa esta muy sucio. Una esquina visible revela: *la llave la cuida el Coloso!*"
                id          = 3
        ]
        
        val antorcha = new Elemento() => [
                nombre      = "Antorcha antigua"
                descripcion = "Siempre encontraras la antorcha antes que algo con que encenderla"
                id          = 4
        ]
        
        val sandia = new Elemento() => [
                nombre      = "Sandia"
                descripcion = "Hmm, jugosa sandia"
                id          = 5
        ]
        
        val banana = new Elemento() => [
                nombre      = "Banana"
                descripcion = "Tan solo.. una banana... en una huerta?!"
                id          = 6
        ]

        val lanzallamas = new Elemento() => [
                nombre      = "Lanzallamas con combustible"
                descripcion = "Ahhh, cuantas cosas podria hacer con un lanzallamas!!!"
                id          = 7
        ]
        
        val cuchillo = new Elemento() => [
                nombre      = "Cuchillo"
                descripcion = "Es tan solo un tramontina cerruchito.. pero podria ser util!"
                id          = 8
        ]
        
        val llave = new Elemento() => [
                nombre      = "Llave"
                descripcion = "Una simple llave. Espero que sea la que necesito..."
                id          = 9
        ]        
            
        val hongo = new Elemento() => [
                nombre      = "Hongo magico"
                descripcion = "Un fluorescente champignon salido de las raices de un gigantesco arbol"
                id          = 10
        ]
        
        val nota = new Elemento() => [
                nombre      = "Nota del coloso"
                descripcion = "Lo siento, la princesa esta en otro cast... EHH digo, la llave esta en otra habitacion"
                id          = 11
        ]
        
        val rosquilla = new Elemento() => [
                nombre      = "Rosquilla del coloso"
                descripcion = "Hhhmmmm, deliciosa rosquilla del infierno!"
                id          = 12
        ] 

        /**
         * Agarrar Elementos
         */

        val agarrarPala = new AgarrarItem() => [
            item = pala
            id   = 1
        ]
        
        val agarrarHoz = new AgarrarItem() => [
            item = hoz
            id   = 2
        ]         

        val agarrarMapa = new AgarrarItem() => [
            item = mapa
            id   = 3
        ]
        
        val agarrarAntorcha = new AgarrarItem() => [
            item = antorcha
            id   = 4
        ]
        
        val agarrarSandia = new AgarrarItem() => [
            item = sandia
            id   = 5
        ]
        
        val agarrarBanana = new AgarrarItem() => [
            item = banana
            id   = 6
        ]         

        val agarrarLanzallamas = new AgarrarItem() => [
            item = lanzallamas
            id   = 7
        ]
        
        val agarrarCuchillo = new AgarrarItem() => [
            item = cuchillo
            id   = 8
        ]
        
        val agarrarLlave = new AgarrarItem() => [
            item = llave
            id   = 9
        ]
        
        val agarrarHongo = new AgarrarItem() => [
            item = hongo
            id   = 10
        ]
        
        val agarrarNota = new AgarrarItem() => [
            item = nota
            id   = 11
        ]        

        val agarrarRosquilla = new AgarrarItem() => [
            item = rosquilla
            id   = 12
        ]
                
        /**
         * Ir a Habitaciones
         */
         
        val irAEntrada = new IrAHabitacion() => [
            habitacion  = hab1
            id          = 13
        ]
        
        val irAsalida = new IrAHabitacion() => [
            habitacion  = hab2
            id          = 14
        ]
        
        val irACaminoLapidas = new IrAHabitacion() => [
            habitacion  = hab3
            id          = 15
        ]

        val irACuartoUtileria = new IrAHabitacion() => [
            habitacion  = hab4
            id          = 16
        ]

        val irACasuchaConserje = new IrAHabitacion() => [
            habitacion  = hab5
            id          = 17
        ]
        
        val irASotanoConserje = new IrAHabitacion() => [
            habitacion  = hab6
            id          = 18
        ]
        
        val irAPanteon = new IrAHabitacion() => [
            habitacion  = hab7
            id          = 19
        ]
        
        val irAJardines = new IrAHabitacion() => [
            habitacion  = hab8
            id          = 20
        ]
        
        val irAInvernadero = new IrAHabitacion() => [
            habitacion  = hab9
            id          = 21
        ]

        val irABarreraMagica = new IrAHabitacion() => [
            habitacion  = hab10
            id          = 22
        ]

        val irAAtmosferaExtrania = new IrAHabitacion() => [
            habitacion  = hab11
            id          = 23
        ]

        val irACrematorio = new IrAHabitacion() => [
            habitacion  = hab12
            id          = 24
        ]

        val irASalonPrincipal = new IrAHabitacion() => [
            habitacion  = hab13
            id          = 25
        ]

        val irACocina = new IrAHabitacion() => [
            habitacion  = hab14
            id          = 26
        ]

        val irACripta = new IrAHabitacion() => [
            habitacion  = hab15
            id          = 27
        ]
        
        val irAClaroEnElBosque = new IrAHabitacion() => [
            habitacion  = hab16
            id          = 28
        ]
        
        val irABosqueTenebroso = new IrAHabitacion() => [
            habitacion  = hab17
            id          = 29
        ]

        val irACasaDelColoso = new IrAHabitacion() => [
            habitacion  = hab18
            id          = 30
        ]

        val irACasaDeJengibre = new IrAHabitacion() => [
            habitacion  = hab19
            id          = 31
        ]
        
        val irAPatioDeJengibre = new IrAHabitacion() => [
            habitacion  = hab20
            id          = 32
        ]

        /**
         * Usar Elementos
         */        
        
        val usarPala = new UsarItem() => [
            item        = pala
            accion      = irASotanoConserje
            id          = 33
        ]
        
        val usarHoz = new UsarItem() => [
            item        = hoz
            accion      = agarrarSandia
            id          = 34
        ]
        
        val usarAntorcha = new UsarItem() => [
            item        = antorcha
            accion      = irABosqueTenebroso
            id          = 35
        ]
        
        val usarSandia = new UsarItem() => [
            item        = sandia
            accion      = irAPatioDeJengibre
            id          = 36
        ]
        
        val usarLanzallamas = new UsarItem() => [
            item        = lanzallamas
            accion      = usarAntorcha
            id          = 37
        ]
        
        val usarCuchillo = new UsarItem() => [
            item        = cuchillo
            accion      = usarSandia
            id          = 38
        ]
       
        val usarLlave = new UsarItem() => [
            item        = llave
            accion      = irAsalida
            id          = 39
        ]
        
        val usarHongo = new UsarItem() => [
            item        = hongo
            accion      = irAAtmosferaExtrania
            id          = 40
        ]
        
        val usarRosquilla = new UsarItem() => [
            item        = rosquilla
            accion      = agarrarCuchillo
            id          = 40
        ]        
       
        /**
         * Set Acciones en habitaciones
         */

        hab1.agregarAccion(usarLlave)
        hab1.agregarAccion(irACaminoLapidas)
        hab1.agregarAccion(irAPanteon)
        
        hab3.agregarAccion(agarrarPala)
        hab3.agregarAccion(irAEntrada)
        hab3.agregarAccion(irACuartoUtileria)
        hab3.agregarAccion(irACasuchaConserje)
        
        hab4.agregarAccion(agarrarHoz)
        hab4.agregarAccion(irACaminoLapidas)
        
        hab5.agregarAccion(usarPala)
        hab5.agregarAccion(irACaminoLapidas)
        
        hab6.agregarAccion(agarrarMapa)
        hab6.agregarAccion(irACasuchaConserje)
        
        hab7.agregarAccion(agarrarAntorcha)
        hab7.agregarAccion(irAEntrada)
        hab7.agregarAccion(irAJardines)
        hab7.agregarAccion(irACrematorio)
        
        hab8.agregarAccion(irAPanteon)
        hab8.agregarAccion(irAInvernadero)
        hab8.agregarAccion(irABarreraMagica)
        
        hab9.agregarAccion(usarHoz)
        hab9.agregarAccion(agarrarBanana)
        hab9.agregarAccion(irAJardines)
        
        hab10.agregarAccion(usarHongo)
        hab10.agregarAccion(irAJardines)
        
        hab11.agregarAccion(agarrarLlave)
        hab11.agregarAccion(irAPatioDeJengibre)
        
        hab12.agregarAccion(agarrarLanzallamas)
        hab12.agregarAccion(irAPanteon)
        hab12.agregarAccion(irASalonPrincipal)
        
        hab13.agregarAccion(irACrematorio)
        hab13.agregarAccion(irACocina)
        hab13.agregarAccion(irACripta)
        
        hab14.agregarAccion(agarrarRosquilla)
        hab14.agregarAccion(irASalonPrincipal)
        
        hab15.agregarAccion(irASalonPrincipal)
        hab15.agregarAccion(irAClaroEnElBosque)
        
        hab16.agregarAccion(usarLanzallamas)
        hab16.agregarAccion(irACripta)
        hab16.agregarAccion(irACasaDeJengibre)
        
        hab17.agregarAccion(irAClaroEnElBosque)
        hab17.agregarAccion(irACasaDelColoso)
        
        hab18.agregarAccion(usarRosquilla)
        hab18.agregarAccion(agarrarNota)
        hab18.agregarAccion(irABosqueTenebroso)
        
        hab19.agregarAccion(usarCuchillo)
        hab19.agregarAccion(irAClaroEnElBosque)
        
        hab20.agregarAccion(agarrarHongo)
        hab20.agregarAccion(irACasaDeJengibre)
        
//        1 Entrada del Cementerio, 2 salida, 3 camino de lapidas, 4 cuarto de utileria, 5 casucha del conserje,
//        6 sotano del conserje, 7 panteon del cementerio, 8 jardines encantados, 9 invernadero incandescente,
//        10 barrera magica impenetrable, 11 atmosfera de extrania atraccion, 12 crematorio espeluznante,
//        13 salon principal labandonado, 14 cocina de la recepcion, 15 cripta de la familia robinson,
//        16 claro en el bosque, 17 bosque tenebroso, 18 casa del coloso, 19 casa de jengibre, 20patio de jengibre        
        
        /**
         * Add Habitaciones a laberinto
         */
        
        lab.agregarHabitacion(hab1)
        lab.agregarHabitacion(hab2)
        lab.agregarHabitacion(hab3)
        lab.agregarHabitacion(hab4)
        lab.agregarHabitacion(hab5)
        lab.agregarHabitacion(hab6)
        lab.agregarHabitacion(hab7)
        lab.agregarHabitacion(hab8)
        lab.agregarHabitacion(hab9)
        lab.agregarHabitacion(hab10)
        lab.agregarHabitacion(hab11)
        lab.agregarHabitacion(hab12)
        lab.agregarHabitacion(hab13)
        lab.agregarHabitacion(hab15)
        lab.agregarHabitacion(hab16)
        lab.agregarHabitacion(hab17)
        lab.agregarHabitacion(hab18)
        lab.agregarHabitacion(hab19)
        lab.agregarHabitacion(hab20)            
        
        habList.add(toMinHabitacion(hab1))
        habList.add(toMinHabitacion(hab2))
        habList.add(toMinHabitacion(hab3))
        habList.add(toMinHabitacion(hab4))
        habList.add(toMinHabitacion(hab5))
        habList.add(toMinHabitacion(hab6))
        habList.add(toMinHabitacion(hab7))
        habList.add(toMinHabitacion(hab8))
        habList.add(toMinHabitacion(hab9))
        habList.add(toMinHabitacion(hab10))
        habList.add(toMinHabitacion(hab11))
        habList.add(toMinHabitacion(hab12))
        habList.add(toMinHabitacion(hab13))
        habList.add(toMinHabitacion(hab14))
        habList.add(toMinHabitacion(hab15))
        habList.add(toMinHabitacion(hab16))
        habList.add(toMinHabitacion(hab17))
        habList.add(toMinHabitacion(hab18))
        habList.add(toMinHabitacion(hab19))
        habList.add(toMinHabitacion(hab20))            
    }
    
    def static toMinHabitacion(Habitacion hab){
        var minHab = new MinHabitacion => [
            nombreHabitacion = hab.nombreHabitacion
            id               = hab.id
            imagePath        = hab.imagePath
            first            = hab.first
            last             = hab.last
            acciones         = hab.acciones.map[a | toMinAccion(a)]
        ]
        minHab
    }
    
    def static toMinAccion(Accion acc) {
        var minAcc = new MinAccion => [
            nombre = acc.nombre
            id     = acc.id
        ]
        minAcc
    }    
    
}