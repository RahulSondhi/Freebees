package controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

@Controller
public class errorController {

    @RequestMapping(value="/error", method = RequestMethod.GET)
    public String renderError(WebRequest request, Model model) {
        return "error";
    }
}
