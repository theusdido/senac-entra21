package senac.entra21.autenticacao.autenticacao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import senac.entra21.autenticacao.autenticacao.model.UsuarioEntity;

@Repository
public interface UsuarioRepository 
extends JpaRepository<UsuarioEntity,Integer>{
    public UsuarioEntity findByLoginAndSenha(String login,String senha);
}
