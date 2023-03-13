import React, { useState, useEffect } from "react";
import { ListGroup, Button, Row, Col, Image, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { AiFillDelete } from 'react-icons/ai';

import "./styles.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { Cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

 
  useEffect(() => {
    setTotal(
      Cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [Cart]);
  /*fluid property : takes the full width of the section */
  return (
    <div className="home">
      <div className="cartContainer">
        <ListGroup>
          {Cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>$ {prod.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.rating}></Rating>
                </Col>
                <Col md={2}>
                  <Form.Control as="select" value={prod.qty}
                  onChange={(e)=> dispatch({
                    type:'CHANGE_CART_QTY',
                    payload: {
                      id:prod.id,
                      qty:e.target.value
                    },
                  })}
                  
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="cartFilters">
        <span className="title">Subtotal ({Cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total : $ {total}</span>
      
          <Button type="button" disabled={Cart.length === 0} >
            Proceed to Checkout
          </Button>
        
        <Link to = '/'>
        <Button type="button" style={{position: 'fixed',bottom: 10, width:'27.5%'}} fluid>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
