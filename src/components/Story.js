import React, {useState} from 'react';
import shopInterior from '../resource/images/divinedestiny/shop_interior.jpg';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {MdClose} from 'react-icons/md';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      height                : 'auto',
      maxWidth              : '640px',
      width                 : '100%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  //Modal.setAppElement('#app');

const Story = ({stories}) =>{


    const [modalIsOpen,setIsOpen] = useState(false);
    const [serviceSelected, setservice] = useState({});
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    function showCarousel(item){
        setservice(item);
        openModal(true);
    }

    return(
        <div className ="flex flex-row justify-between flex-wrap px-2" id="serviceElement">
            {stories.map((item,index) => {
               return <div className="flex flex-col align-center justify-start m-2 w-1/4 cursor-pointer"
                        onClick={()=>showCarousel(item)} key={index}> 
               <div className = "rounded-full bg-cover w-24 h-24 border-2" 
                    style={{ backgroundImage: "url(" + shopInterior + ")" , borderStyle:"solid",boxShadow:"2px 2px #888888"}}></div>
               <div className = "text-sm w-full mt-2 ml-1" style={{overflowWrap : "break-word",textAlign:"center"}}>
                   {item.title}
                </div>
               </div>
            })}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
         // className="w-1/2"
          contentLabel="Example Modal"
        >
         <div className="flex flex-row justify-between">
          <h2>{serviceSelected.title}</h2>
          <button onClick={closeModal}><MdClose /></button>
         </div>   
        
         <Carousel>
                <div>
                    <img src={shopInterior} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={shopInterior} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={shopInterior} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </Modal>

        </div>
    )
}

export default Story;