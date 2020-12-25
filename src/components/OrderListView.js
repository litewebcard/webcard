import React from 'react';
import {FaCircle} from 'react-icons/fa';


const orderListView = ({orderList}) => {


    return(
        <ul className = "reasons-list">
           {orderList.map((item,index) => {
               return <li className="flex flex-row" key={index}>
                <FaCircle className="mt-1 pr-2"/>{item} </li>
           })}    
        </ul>
    )

}

export default orderListView