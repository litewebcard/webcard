import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {Card,Alert,Button} from 'react-bootstrap';

import PageSettings from './PageSettings';

import BasicForm from './BasicForm';
import CompanyForm from './CompanyForm';
import SocialMediaForm from './SocialMediaForm';
import ListViewMenuForm from './ListViewMenuForm';
import CaourselWithImageForm from './CaourselWithImageForm';
import TestimonialForm from './TestimonialForm';

function MultiForm(props) {

    const {pages} = props.location.aboutprops;
    console.log("pages...",pages);
    const {currentUser} = useAuth();
    const history = useHistory();
    const [formName,setFormName] = useState("Basic Form");
    const [error,setError] = useState("");
    const [displayNextButton,setDisplayNextButton] = useState(true);
    const [displayPrevButton,setDisplayPrevButton] = useState(false);
    
    //get currentuser data
   
    //set progress bar
    //create click next function
    const handleNext = () =>{
        let formIndex = pages.findIndex(page => page === formName);
        if(formIndex!=-1 && formIndex!=pages.length-1){
            formIndex = formIndex + 1;
            setFormName(pages[formIndex]);
            setDisplayPrevButton(true);
            setDisplayNextButton(true);
        }
        if(formIndex==pages.length-1){
            setDisplayNextButton(false);
            setDisplayPrevButton(true);
        }
    }
    //create click previous function
    const handlePrev = () =>{
        let formIndex = pages.findIndex(page => page === formName);
        if(formIndex!=-1 && formIndex!=0){
            formIndex = formIndex -1;
            setFormName(pages[formIndex]);
            setDisplayPrevButton(true);
            setDisplayNextButton(true);
        }
        if(formIndex == 0){
            setDisplayPrevButton(false);
            setDisplayNextButton(true);
        }
    }
    //create cancel function
    const handleCancel = ()=>{
        setError('');
        try{
        history.push(`/${currentUser.email.split('@')[0]}`);
        }
        catch(e){
            setError("Something went wrong while handling cancel");
        }
    }
    //create function to select type of form
    const getForm = (() =>{
        switch(formName){
            case "Basic Form":
                return <BasicForm />
            case "Company Form":
                return <CompanyForm />    
            case "Social Media Form":
                return <SocialMediaForm />
            case "List View Menu Form":
                return <ListViewMenuForm />
            case "Caoursel With Image Form":
                return <CaourselWithImageForm />
            case "Testimonial Form":
                return <TestimonialForm />
            {/*case "Caoursel With Modal Form":
                return <CaourselWithModalForm />
            case "Article Form":
                return <ArticleForm />
            case "Menu With Details Form":
                return <MenuWithDetailsForm />    */}    
        }
    })

    
    return (
        <div className="my-2">
            {/*
                1. Basic Form
                2. Social Media Form
                3. List view Menu
                4. Caoursel with image
                5. Review
                6. Caoursel with modal
                7. 

            */ }
            <>
        <Card>
            
                <div className="flex flex-row justify-between items-center bg-gray-200 px-3 pt-1">
                  <h4 className="">{formName}</h4>
                  <div>
                    <PageSettings pages={pages}/>
                  </div>
                </div>
                <div className = "p-3">
                    {error && <Alert variant="danger" onClose={() => setError('')} dismissible><p>{error}</p></Alert>}
                    {getForm()}
                    {displayPrevButton && <Button variant="secondary" size="sm" className="w-24 mr-1 text-sm" type="button" onClick={handlePrev}> Previous</Button>}
                    {displayNextButton && <Button variant="primary" size="sm" className="w-24 mr-1 text-sm" type="button"  onClick={handleNext}> Next</Button>}
                    {!displayNextButton && <Button variant="primary" size="sm" className="w-24 mr-1 text-sm" type="button" > Submit</Button>}
                    <Button variant="light" className="w-24 text-sm" size="sm" type="button"  onClick={handleCancel}> Cancel</Button>
                </div>
        </Card>
        
        </>


        </div>
    )
}

export default MultiForm
