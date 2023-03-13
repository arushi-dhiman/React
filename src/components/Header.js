import React from 'react'
import {Link} from 'react-router-dom'
import { Container, FormControl,Dropdown,Badge,Nav,Navbar, Button } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import './styles.css';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {state : {Cart}, dispatch, prodDispatch }= CartState();
  return (
    <Navbar bg='dark' variant='dark' className='sticky-nav'>
        <Container>
            <Navbar.Brand>
                <Link to ='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style ={{width : 500}} placeholder ='Search A Product' className='m-auto'
                onChange={(e)=> {prodDispatch({
                    type : 'FILTER_BY_SEARCH',
                    payload : e.target.value
                })}}
                />  
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant = 'success'>
                        <FaShoppingCart color = 'white' fontSize = '23px'/>
                        <Badge bg='transparent'>{Cart.length}</Badge>    
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu-right' style={{ width : 370,}}>
                        {Cart.length > 0 ?(
                        <>
                        {Cart.map((prod)=>(
                            <span className='cartItem' key={prod.id}>
                                <img src={prod.image}
                                className='cartItemImg'
                                alt={prod.name}/>
                                <div className='cardItemDetail'>
                                    <span>{prod.name}</span>
                                    <span>$ {prod.price.split("."[0])}</span>
                                </div>
                                <AiFillDelete 
                                fontSize="20px"
                                style ={{cursor : "pointer"}}
                                onClick = {()=>
                                    dispatch({
                                        type:'REMOVE_FROM_CART',
                                        payload : prod
                                    }) }
                                 />
                            </span>
                        ))}
                        <Link to ='/cart'>
                            <Button style={{width:'95%',margin:'0 10px'}}>Go To Cart</Button>
                        </Link>
                        </> )
                        :( <span style ={{padding :10}}> Cart Is Empty! </span> )
                        }

                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
