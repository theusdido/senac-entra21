package senac.entra21.autenticacao.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin()
@RestController
@RequestMapping(value="/auth")
public class AutenticacaoController {

    @PostMapping
    public HashMap<String,String> Logon(
        @RequestBody String login,
        @RequestBody String senha
    ){
        HashMap<String,String> response = new HashMap<String,String>();
        response.put("login",login);
        response.put("senha",senha);
        return response;
    }
}