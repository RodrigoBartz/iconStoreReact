import React, { useEffect, useState } from "react";
import IconCard from '../../components/Icon/IconCard';
import * as C from "./styles";
import Navbar from "../../components/Navbar";

const Home = () => {

  const [icons, setIcons] = useState([])

  useEffect(() => {
      fetch('http://localhost:5000/icons', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then((data) => {
          console.log(data)
          setIcons(data)
        })
        .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <C.Container>
        <C.Title>
          <h1>Ícones</h1>
        </C.Title>
        <C.IconCards>
          {icons.length > 0 &&
            icons.map((icon) => (<IconCard
              id={icon.id}
              name={icon.name}
              preco={icon.preco}
              category={icon.category?.name}
              key={icon.id}
              />
            ))}
          {icons.length === 0 && (
            <p>Sem cursos</p>
          )}
        </C.IconCards>
      </C.Container>
    </>
  );
};

export default Home;