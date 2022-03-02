import React, { useState, useRef} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, ContainerItens, InputLabel, Input } from './styles'
import H1 from '../../components/Tittle'
import OrderButton from '../../components/Button'
import LogoBurger from '../../assets/logoBurger.svg'


//COMPONENTE PRINCIPAL
const App = () => {
  //ESTADO (memória) do Componente Principal
  const [orders, setOrders] = useState([])
  const inputClientName = useRef()
  const inputOrder = useRef()
  const history = useHistory()


  //FUNCIONALIDADE do Componente Principal
  async function addNewOrder() {
    const { data: newOrder } = await axios.post('http://localhost:3001/orders', { order: inputOrder.current.value, clientName: inputClientName.current.value })

    setOrders([...orders, newOrder])

    history.push('/orders')

  }

  //Retorna a parte VISUAL do Componente
  return (
    <Container>
      <Image alt="LogoBurger" src={LogoBurger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='1 Coca-Cola, 1-X Salada' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder='Steve Jobs' />

        <OrderButton onClick={addNewOrder}>Novo Pedido</OrderButton>   


      </ContainerItens>
    </Container>
  )
}

export default App