import React, { useContext } from 'react'
import * as C from './styles'
import AppContext from '../../../contexts/appContext'
import { FaCartPlus, FaReact } from 'react-icons/fa'


const IconCard = ({ name, preco, category }) => {

    const { carrinhoIcons, setCarrinhoIcons } = useContext(AppContext);

    const handleAddCarrinho = () => setCarrinhoIcons([...carrinhoIcons, name, preco])

    return (
        <C.IconCard>
            <C.IconImageContainer>
                <FaReact alt='Icon'></FaReact>
            </C.IconImageContainer>
            <C.IconDescription>
                <h3>{name}</h3>
                <h2>R$&nbsp;{preco}</h2>
                <h4>{category}</h4>
            </C.IconDescription>
            <C.CarrinhoButton
                onClick={handleAddCarrinho}
            >
                <FaCartPlus />
            </C.CarrinhoButton>
        </C.IconCard>

    )
}

export default IconCard