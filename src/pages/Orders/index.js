import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, ContainerItens, Order } from './styles'
import H1 from '../../components/Tittle'
import OrderButton from '../../components/Button'
import LogoBurger2 from '../../assets/logoBurger2.svg'
import Trash from '../../assets/trash.svg'


//COMPONENTE PRINCIPAL
const Orders = () => {
  //ESTADO (memória) do Componente Principal
  const [orders, setOrders] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get('http://localhost:3001/orders')
      setOrders(newOrders)
    }
    fetchOrders()

  }, [])



  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)

    const newOrders = orders.filter(order => order.id !== orderId) // Filtrar todos os pedidos que não tem o Id 
    setOrders(newOrders)


  }


  function goBackPage(){
    history.push('/')
  }


  //Retorna a parte VISUAL do Componente
  return (
    <Container>
      <Image alt="LogoBurger" src={LogoBurger2} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map(order => (
            <Order key={order.id}>
              <div>
                <p className='first-paragraph'>{order.order}</p>
                <p className='seccond-paragraph'>{order.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)} ><img alt='lata-lixo' src={Trash} /></button>
            </Order>
          ))
          }
        </ul>

        <OrderButton isGrey={true} onClick={goBackPage}>Voltar</OrderButton>
      </ContainerItens>
    </Container>
  )
}

export default Orders