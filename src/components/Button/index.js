import React from 'react'
import {Button} from './styles'

function OrderButton({children, ...props}){

    return <Button {...props}>{children}</Button>
}

export default OrderButton