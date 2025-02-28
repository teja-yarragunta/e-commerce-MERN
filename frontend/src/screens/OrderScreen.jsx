import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Col, Row } from 'react-bootstrap'

const OrderScreen = () => {
  const { id: orderId } = useParams()
  const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId)
  return (
    isLoading ? <Loader /> : error ? <Message varient="danger" /> : (
      <>
        <h1>Order: {order._id}</h1>
        <Row>
          <Col md={8}>Column</Col>
          <Col md={4}>Column</Col>
        </Row>
      </>
    )
  )
}

export default OrderScreen