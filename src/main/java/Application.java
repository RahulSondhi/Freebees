import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

@RestController
@EnableAutoConfiguration
public class Application {

    @RequestMapping("/")
    String home(WebRequest request, Model model) {
        return "index";
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }

}