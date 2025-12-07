package com.premier.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"/", "/index", "/home"})
    public String index() {
        // Forward to static index.html (placed in src/main/resources/static/index.html after frontend build)
        return "forward:/index.html";
    }
}
