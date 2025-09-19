import React, { useState } from 'react'
import propTypes from 'prop-types';
import AppContext from './appContext'

const Provider = ({ children }) => {

    const [carrinhoIcons, setCarrinhoIcons] = useState([]);

    const value = {
        carrinhoIcons,
        setCarrinhoIcons
    };

  return (
    <AppContext.Provider value={ value }>
        {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;

export default Provider