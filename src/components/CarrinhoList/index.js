import React from 'react'
import * as C from './styles'
import { AiFillDelete } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';



const CarrinhoList = ({name, preco}) => {
    

    return (
        <C.Container>
            <C.IconImage><FaReact size={30}/></C.IconImage>
            <C.IconDetails>
                <C.IconName>{name}</C.IconName>
                <C.IconPrice>{preco}</C.IconPrice>
                <C.RemoveButton
                    type='button'
                >
                    <AiFillDelete/>
                </C.RemoveButton>
            </C.IconDetails>

        </C.Container>
    )
}


export default CarrinhoList;



