import React, { useEffect, useState } from 'react';
import InputForm from '../../Form/InputForm';
import SelectForm from '../../Form/SelectForm';
import SubmitButtonForm from '../../Form/SubmitButtonForm';
import * as C from "./styles";



const IconForm = ({ handleSubmit, btnText, iconData }) => {
    const [categories, setCategories] = useState([])
    const [icon, setIcon] = useState(iconData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(icon)
    }

    function handleChange(e) {
        setIcon({ ...icon, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setIcon({
            ...icon, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <C.Container onSubmit={submit}>
            <InputForm
                type="text"
                text="Nome do ícone"
                name="name"
                placeholder="Insira o nome do ícone"
                handleOnChange={handleChange}
                value={icon.name ? icon.name : ''}
            />
            <InputForm
                type="number"
                text="Preço"
                name="preco"
                placeholder="Insira o custo do ícone"
                handleOnChange={handleChange}
                value={icon.preco ? icon.preco : ''}
            />
            <SelectForm
                name="category_id"
                text="Selecione a categoria:"
                options={categories}
                handleOnChange={handleCategory}
                value={icon.category ? icon.category.id : ''}
            />
           <SubmitButtonForm text={btnText}/>

        </C.Container>
    )
}

export default IconForm