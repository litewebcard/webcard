import React, { useState } from 'react';
import ProfileHeader from './ProfileComponenets/ProfileHeader';

function Profile() {

    const profiles = [{
        "header": "Basic Information",
        "elements": [{
            "name": "First Name",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter First Name",
            "value": ""
        }, {
            "name": "Last Name",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter Last Name",
            "value": ""
        },
        {
            "name": "Contact Number 1",
            "type": "tel",
            "disabled": false,
            "placeholder": "Enter Contact Number",
            "value": ""
        },
        {
            "name": "Contact Number 2",
            "type": "tel",
            "disabled": false,
            "placeholder": "Enter Contact Number",
            "value": ""
        },
        {
            "name": "Email Id",
            "type": "email",
            "disabled": false,
            "placeholder": "Enter Email id",
            "value": ""
        },
        {
            "name": "Upload Profile Image",
            "type": "image",
            "disabled": false,
            "src": ""
        }]
    }, {
        "header": "Company Information",
        "elements": [{
            "name": "Company Name",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter Company Name",
            "value": ""
        }, {
            "name": "Profession",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter Profession",
            "value": ""
        },
        {
            "name": "Bio",
            "type": "textarea",
            "disabled": false,
            "placeholder": "Enter decription about your company",
            "value": ""
        },
        {
            "name": "Address 1 ",
            "type": "text",
            "disabled": false,
            "placeholder": "123 Main street",
            "value": ""
        },
        {
            "name": "Address 2",
            "type": "text",
            "disabled": false,
            "placeholder": "Apartment, studio or floor",
            "value": ""
        },
        {
            "name": "City",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter City",
            "value": ""
        },
        {
            "name": "State",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter State",
            "value": ""
        },
        {
            "name": "Zip",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter Zip",
            "value": ""
        },
        {
            "name": "Include Google Maps",
            "type": "checkbox",
            "disabled": false,
            "value": ""
        },
        {
            "name": "Upload Profile Image",
            "type": "image",
            "disabled": false,
            "src": ""
        }]
    }, {
        "header": "Social Media Information",
        "elements": [{
            "name": "Whatsapp Number",
            "type": "tel",
            "disabled": false,
            "placeholder": "Enter Whatsapp Number",
            "value": ""
        }, {
            "name": "Whatsapp Message",
            "type": "text",
            "disabled": false,
            "placeholder": "Enter Whatsapp Message",
            "value": ""
        }, {
            "name": "Facebook",
            "type": "text",
            "disabled": false,
            "placeholder": "https://facebook.com/",
            "value": ""
        }, {
            "name": "Instagram",
            "type": "text",
            "disabled": false,
            "placeholder": "https://instagram.com/",
            "value": ""
        }, {
            "name": "Linkedin",
            "type": "text",
            "disabled": false,
            "placeholder": "https://linkedin.com/",
            "value": ""
        }, {
            "name": "Twitter",
            "type": "text",
            "disabled": false,
            "placeholder": "https://twitter.com/",
            "value": ""
        },
        {
            "name": "Youtube",
            "type": "text",
            "disabled": false,
            "placeholder": "https://youtube.com/",
            "value": ""
        },
        {
            "name": "Personal Website",
            "type": "text",
            "disabled": false,
            "placeholder": "https://personalWebsite.com/",
            "value": ""
        },
        ]
    }]

    const getElement = (element, index) => {
        switch (element.type) {
            case "text":
                return <div className="form-item" key={index}>
                    <label className="text-xl ">{element.name}</label>
                    <input type="text" value={element.value} placeholder={element.placeholder}
                        className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                        disabled={element.disabled} />
                </div>
            case "tel":
                return <div className="form-item" key={index}>
                    <label className="text-xl ">{element.name}</label>
                    <input type="tel" value={element.value} placeholder={element.placeholder}
                        className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                        disabled={element.disabled} />
                </div>
            case "email":
                return <div className="form-item" key={index}>
                    <label className="text-xl ">{element.name}</label>
                    <input type="email" value={element.value} placeholder={element.placeholder}
                        className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                        disabled={element.disabled} />
                </div>
            case "textarea":
                return <div className="form-item w-full">
                    <label className="text-xl ">{element.name}</label>
                    <textarea cols="30" rows="10" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                        disabled={element.disabled}>
                        {element.value}
                    </textarea>
                </div>
            case "checkbox":
                return <div className="form-item" key={index}>
                    <label className="text-xl ">{element.name}</label>
                    <input type="checkbox" value={element.value} placeholder={element.placeholder}
                        className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                        disabled={element.disabled} />
                </div>
        }
    }

    return (

        <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
            <div className="top h-64 w-full bg-blue-600 overflow-hidden relative" >
                <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
                <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="h-24 w-24 object-cover rounded-full" />
                    <h1 className="text-2xl font-semibold">Antonia Howell</h1>
                    <h4 className="text-sm font-semibold">Joined Since '19</h4>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white ">

                <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

                    <a href="#" className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>

                    <a href="#" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Template</a>

                    <a href="#" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Pages</a>

                </div>

                <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                    <div className="px-4 pt-4">
                        <form action="#" className="flex flex-col space-y-8">
                            {
                                profiles.map((profile, index) => {
                                    return <>
                                        <ProfileHeader key={index} headerTitle={profile.header} />
                                        {
                                            profile.elements.map((element, eleIndex) => {
                                                return getElement(element, eleIndex);
                                            })
                                        }
                                    </>
                                })
                            }
                        </form>
                        <div className="my-3 mx-auto flex flex-row justify-between">
                          <div> 
                        <button
            class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
          >
            Go To Template
          </button>
          </div>
          <div>
                            
                                <button
            class="inline-block px-6 py-2 mx-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
           Save
          </button>
          <button
            class="inline-block px-6 py-2 mx-1 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
          >
            Cancel
          </button>
          </div>
                            

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile
