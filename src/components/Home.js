import React from 'react';
import logo1 from '../resource/images/divinedestiny/logo.png';
//import logo2 from '../../public/divinedestiny/logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';


function Home({companyName,professionalTitle,primaryColor,secondaryColor,primaryFont,secondaryFont,logo}) {

    const baseUrl = "D:/Code/divinedestiny/socialmediacard/divinedestinysocialmediacard";
   console.log("logo...",logo);
    return (
        <div className="flex content-center flex-col bg-white max-w-sm mx-auto my-10 w-full
        rounded-lg shadow-lg" style={{ height: "100%", backgroundColor: `${primaryColor}` }}
        >
            <div className="h-full my-5">
                <div className=" flex justify-start content-center flex-col w-full" style={{ height: "auto" }}>
                    <div className=" mx-auto bg-cover w-5/12 h-32">
                        <img src={logo!=null && logo!="" ? require(`${logo1}`):undefined}/>
                    </div>
                    <div className="mx-auto  font-semibold" style={{ fontSize: "24px", color: `${secondaryColor}`, fontFamily: `${primaryFont}` }}>{companyName}</div>
                    <div className="mx-auto" style={{ fontSize: "14px", color: `${secondaryColor}`, lineHeight: "10px", fontFamily: `${secondaryFont}` }}>{professionalTitle}</div>
                    <div className="flex flex-col w-full mx-auto mt-5" style={{ color: `${secondaryColor}`, lineHeight: "15px" }}>
                        <div className="flex flex-row justify-evenly p-1 text-lg">
                            <div className="m-2 ml-0"><FaPhoneAlt /></div>
                            <div className="m-2 "><FaFacebook /></div>
                            <div className="m-2"><FaInstagram /></div>
                            <div className="m-2"><FaWhatsapp /></div>
                            <div className="m-2"><MdEmail /></div>

                            {/*<div className="m-2"><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon></div>
       <div className="m-2 mr-0"><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></div>*/}
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default Home
