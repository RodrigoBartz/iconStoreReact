import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import IconForm from '../../components/Icon/IconForm';
import Navbar from '../../components/Navbar';

const NewIcon = () => {

    const navigate = useNavigate()

    function createPost(icon) {

        fetch('http://localhost:5000/icons', {
            method: 'POST',
            header: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(icon),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                navigate("/home");

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />
            <C.Container>

                <h1>Novo Icone</h1>
                <IconForm handleSubmit={createPost} btnText="Criar Ícone" />
            </C.Container>
        </>
    )
}

export default NewIcon