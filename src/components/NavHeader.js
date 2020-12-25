import React from 'react';
import { Link} from 'react-router-dom';

function NavHeader({navHeaders,navHeaderSelected,clickNavHeader,userName}) {
    return (
        <div className="flex content-center flex-row w-full justify-evenly pb-5" style={{fontSize:"12px",color:"#c9a56f",lineHeight:"10px",fontFamily:"Montserrat",height:"auto"}} >
     {
       navHeaders.map((item,index) => {
         if(navHeaderSelected["title"] === item["title"]){
          return <Link to={`/${userName}/${item["title"]}`}  key={index}><div className="cursor-pointer header active" onClick={()=>clickNavHeader(item)}>{item["title"]}</div> </Link>  
         }
         return <Link to={`/${userName}/${item["title"]}`} key={index}><div className="cursor-pointer header" onClick={()=>clickNavHeader(item)}>{item["title"]}</div></Link>   
        
       })
     }
     
    </div>
    )
}

export default NavHeader

