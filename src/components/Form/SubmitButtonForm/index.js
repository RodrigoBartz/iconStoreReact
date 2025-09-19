import React from 'react'
import * as C from "./styles";

const SubmitButton = ({ text }) => {
  return (
    <C.Container>
      <C.Button>{text}</C.Button>
    </C.Container>
  )
}

export default SubmitButton