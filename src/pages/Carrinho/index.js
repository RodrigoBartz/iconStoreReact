import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import * as C from './styles'
import CarrinhoList from '../../components/CarrinhoList'
import AppContext from '../../contexts/appContext'

const Carrinho = () => {

  const { carrinhoIcons } = useContext(AppContext);

  return (
    <>
      <Navbar></Navbar>
      <C.Container>
        <C.Title>Carrinho de Compras</C.Title>
        <C.CarrinhoContainer>
          <C.Carrinho>
            <C.IconsList>
              {carrinhoIcons.map((carrinhoIcon) =>
                <CarrinhoList
                  key={carrinhoIcon.id}
                  data={carrinhoIcon}
                />)}

            </C.IconsList>
            <C.IconsSum>
              <C.Total>Total: R$ &nbsp;</C.Total>
            </C.IconsSum>
          </C.Carrinho>
        </C.CarrinhoContainer>
      </C.Container>
    </>
  )
}

export default Carrinho