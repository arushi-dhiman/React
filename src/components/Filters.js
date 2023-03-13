import { Form,Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filters = ()=>{
    const{prodState : {byStock,byFastDelivery,sort,byRating},prodDispatch}= CartState()
    return(
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                inline 
                label ="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange={()=>
                    prodDispatch({
                        type : 'SORT_BY_PRICE',
                        payload : 'lowToHigh'
                    })
                }
                checked = {sort === 'lowToHigh' ? true : false}
                />
                </span>
                <span>
                 <Form.Check
                inline 
                label ="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={()=>
                    prodDispatch({
                        type : 'SORT_BY_PRICE',
                        payload : 'highToLow'
                    })
                }
                checked = {sort === 'highToLow' ? true : false}

                />
            </span>
            <span>
                <Form.Check
                inline 
                label ="Include Out of Stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
                onChange={()=>
                    prodDispatch({
                        type:'FILTER_BY_STOCK',
                    })}
                    checked ={byStock}
                />
            </span>
            <span>
                <Form.Check
                inline 
                label ="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`inline-4`}
                onChange={()=>
                    prodDispatch({
                        type:'FILTER_BY_Delivery',
                    })}
                    checked ={byFastDelivery}
                />
            </span>
            <span>
                <label style ={{paddingRight:10}}> Rating : </label>
                <Rating rating ={byRating}  onClick= {(i)=> prodDispatch({
                    type: 'FILTER_BY_Rating',
                    payload : i+1
                })} />
            </span>
            <Button variant="light" onClick={()=>prodDispatch({
                type:'CLEAR_FILTERS'
            })}>Clear Filters</Button>
        </div>
    );
}
export default Filters;