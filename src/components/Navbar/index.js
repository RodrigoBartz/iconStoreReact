import React from 'react';
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SearchBar from '../SearchBar';
import logoImg from '../../images/logo_iconstore.png'

const Navbar = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <Link to="/home"><C.Logo src={logoImg}></C.Logo></Link>
            <SearchBar/>
            <C.List>
                <C.Item><Link to="/newicon">Novo Ícone</Link></C.Item>
                <C.Item><Link to="/carrinho">Carrinho</Link></C.Item>
                <C.Item onClick={() => [signout(), navigate("/")]}><Link>Sair</Link></C.Item>
            </C.List>
        </C.Container>
    )
}

export default Navbar