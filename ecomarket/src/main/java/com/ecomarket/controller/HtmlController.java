package com.ecomarket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {

    @GetMapping({"/", "/**/{path:[^.]*}"})
    public String forward() {
        return "forward:/index.html";
    }
}
