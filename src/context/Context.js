import { createContext , useContext, useReducer} from "react"
import { faker } from '@faker-js/faker';
import { cartReducer, prodReducer } from "./Reducers";

const Cart = createContext()
faker.seed(99); /* Runs only one type of data, static*/

const Context = ({children}) => {
  const Products = [...Array(300)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery : faker.datatype.boolean(),
    ratings : faker.helpers.arrayElements([1,2,3,4,5])
  }))

  const [state, dispatch] = useReducer(cartReducer, {initialState : Products,
  Cart:[]})
  const [prodState, prodDispatch] = useReducer(prodReducer, {
    byStock: false,
    byFastDelivery : false,
    byRating : 0,
    searchQuery:""
  })
  return (
    <Cart.Provider value={{state, dispatch ,prodState, prodDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart);
}
