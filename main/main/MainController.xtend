package main

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Post
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.xtrest.api.annotation.Body


@Controller
class MainController {

    
    def static void main(String[] args) {
        XTRest.start(MainController, 9000)
    }

}