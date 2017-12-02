package controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

@Controller
public class homepageController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String renderIndex(WebRequest request, Model model) {
        System.out.println("HELLO");
        return "index";
    }
}
