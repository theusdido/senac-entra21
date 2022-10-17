package senac.entra21.autenticacao.autenticacao.model;

public class AutenticacaoModel {
    public String login;
    public String senha;

    public void setSenha(String senha){
        this.senha = senha;
    }
    public String getSenha(){
       return this.senha;
    }

    public void setLogin(String login){
        this.login = login;
    }

    public String getLogin(){
        return this.login;
    }
}
