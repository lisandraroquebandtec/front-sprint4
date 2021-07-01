import React from "react";
import {Container404, Tittle, Info, Initial} from './StyleNotFound404'
import {Link} from 'react-router-dom';

function NotFound404() {
    return(
        <Container404>
            <Tittle>Página não encontrada</Tittle>
            <Info>Desculpe, parece que a página que você está procurando já não existe mais. Por favor, 
            continue navegando ou confira nossas sugestões abaixo.
            </Info>
            <Link to="/">
                <Initial>
                Quero ir para a Página Inicial
                </Initial>
            </Link>
        </Container404> 
    );
}

export default NotFound404;