package senac.entra21.autenticacao.autenticacao.controller;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import senac.entra21.autenticacao.autenticacao.model.AutenticacaoModel;
import senac.entra21.autenticacao.autenticacao.model.UsuarioEntity;
import senac.entra21.autenticacao.autenticacao.repository.UsuarioRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value="/auth")
public class AutenticacaoController {

    // @PostMapping
    // public HashMap<String,String> Logon(
    //     @RequestBody String login,
    //     @RequestBody String senha
    // ){
    //     HashMap<String,String> response = new HashMap<String,String>();
    //     response.put("login",login);
    //     response.put("senha",senha);
    //     return response;
    // }
    
    @Autowired
    public UsuarioRepository repositorio;

    @PostMapping
    public boolean post(@RequestBody AutenticacaoModel auth)
    throws NoSuchAlgorithmException, UnsupportedEncodingException
    {
        UsuarioEntity user = repositorio.findByLoginAndSenha(
            auth.login,this.hashSenha(auth.senha)
        );
        return user == null ? false : true;
    }
    
    private String hashSenha(String senha) 
    throws NoSuchAlgorithmException, UnsupportedEncodingException
    {
        MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
        byte messageDigest[] = algorithm.digest(senha.getBytes("UTF-8"));

       StringBuilder hexString = new StringBuilder();
       for (byte b : messageDigest) {
         hexString.append(String.format("%02X", 0xFF & b));
       }
       String senhahex = hexString.toString().toLowerCase();  
       return senhahex;    
    }
}