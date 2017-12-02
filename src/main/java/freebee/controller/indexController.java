package freebee.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

@Controller
public class indexController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String index(WebRequest request, Model model){
        return "index";
    }
}
