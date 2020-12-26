import React, { useState, useEffect } from 'react';
import { Route, Switch ,withRouter,useHistory,useLocation } from 'react-router-dom';

import Header from './components/Header';
import SignUp from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout'
import ForgotPassword from './ForgotPassword';
import Profile from './components/Profile';
import MultiForm from './components/MultiForm';
import PrivateRoute from './components/PrivateRoute'
import {Container} from 'react-bootstrap';
import {AuthProvider} from './contexts/AuthContext';


import './styles/main.css';
import ReactCardFlip from 'react-card-flip';

//import logo from '../public/divinedestiny/logo.png'

import Home from './components/Home';
import NavHeaders from './components/NavHeader';
import BackPage from './components/BackPage';
import OrderListView from './components/OrderListView';
import Story from './components/Story';
import Slider from './components/Slider';
import HandleFlip from './components/HandleFlip';
import data from './data/constant.json';



function App() {

  let history = useHistory();
  let location = useLocation();
  
  const[userName,setUserName] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [navHeaders,setNavHeaders] = useState([]);
  const [navHeaderSelected, setNavHeaderSelection] = useState({});
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [primaryFont, setPrimaryFont] = useState("");
  const [secondaryFont, setSecondaryFont] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [logo,setLogo]=useState("");
  const [orderList,setOrderList] = useState([]);
  const [stories,setStories] =useState([]);
  const [testimonials,setTestimonials] = useState([]);
  const [formPages, setFormPages] = useState(["Basic Form","Company Form","Social Media Form","List View Menu Form",
              "Caoursel With Image Form","Testimonial Form", "Caoursel With Modal Form","Article Form",
              "Menu With Details Form","Review" ])

  const API_URL = './data/constant.json';

  useEffect(() => {
    let pathname = location.pathname.split('/');
    //console.log("pathname...",pathname);
    if(pathname.length>1 && pathname[1]!=null && pathname[1]!="" 
        && pathname[1]!="signup" && pathname[1]!="login" && 
        pathname[1]!="forgot-password" && pathname[1]!="dashboard"
        && pathname[1]!="logout"  && pathname[1]!="form" && pathname[1]!="profile"
        ){
     setUserName(pathname[1]);
    }
   // console.log("userName...",userName);
  },[location.pathname,userName])

  useEffect(()=>{
    if(userName!=null && userName!=""){
     // console.log("inside useEffect");
      fetchData();
    }
  });

  const fetchData= ()=>{
  
    let userDataArr = data.map((item) =>{
      //console.log(Object.keys(item));
      let matchingKey = Object.keys(item).filter(key => key.indexOf(userName)!=-1);
    //  console.log("matchingKey...",matchingKey);
      return matchingKey.map(key => { return item[key] });
    });
    //console.log("userDataArr...",userDataArr);
    if(userDataArr.length>0){
      let userData = userDataArr[0][0]; 
    console.log("userData..",userData);
      setNavHeaders(userData.pages);
      setNavHeaderSelection(Object.keys(navHeaderSelected).length > 0 ? navHeaderSelected :userData.pages[0]);
      setCompanyName(userData.companyName);
      setProfessionalTitle(userData.professionalTitle);
      setPrimaryFont(userData.primaryFont);
      setSecondaryFont(userData.secondaryFont);
      setPrimaryColor(userData.primaryColor);
      setSecondaryColor(userData.secondaryColor);
      setLogo(userData.logo);
      setOrderList(userData.orderList);
      setStories(userData.stories);
      setTestimonials(userData.testimonials);

    }
  
    
   
  }


  let backPageContent = () => {

    let backPage;
    console.log("navHeaderSelected...",navHeaderSelected);
    switch (navHeaderSelected["page"]) {
      case "Order List View":
        backPage = <OrderListView orderList={orderList}/>
        break;
      case "Story":
        backPage = <Story stories = {stories}/>
        break;
      case "Projects":
        break;
      case "Slider":
        backPage = <Slider data={testimonials}/>
        break;
      default:
        backPage = "";
        break;
    }

    return backPage;
  }

  let handleCardFlip = ()=>{
    setIsFlipped(!isFlipped);
    if(isFlipped){
      history.push(`/${userName}`);
    }
    else{
      history.push(`/${userName}/${navHeaderSelected["title"]}`);
    }
    
  }


  return (
    
    <div className="App  h-screen w-screen flex content-center flex-col" id="app" >
       <AuthProvider>
         <Header pages = {formPages}/>
       </AuthProvider>
      
      <div>
       {(userName == null || userName == "") && 
       
        <Container className = "d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
          <div className = "" style={{minWidth:"90%"}}>
         
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component = {Profile}/>
              <Route path="/signup" component = {SignUp}/>
              <Route path="/login" component = {Login}/>
              <Route path="/logout" component = {Logout}/>
              <Route path="/forgot-password" component = {ForgotPassword}/>
              <PrivateRoute path="/form" component = {MultiForm} pages = {formPages}/>
             
            </Switch>
             
          </AuthProvider>
         
          </div>
          
        </Container>
      
       } 
      { (userName!=null  && userName!="") &&
        <Switch>
          <ReactCardFlip className="" isFlipped={isFlipped} flipDirection="vertical">
            <Route exact path={`/${userName}`} 
              render={() => <Home primaryColor={primaryColor} secondaryColor={secondaryColor} 
                            companyName ={companyName} professionalTitle={professionalTitle}
                            primaryFont={primaryFont} secondaryFont={secondaryFont} logo={logo}/>}  />
            <div className="flex content-center flex-col bg-white max-w-sm mx-auto my-10 w-full
                   rounded-lg shadow-lg" style={{ height: "100%", backgroundColor: `${primaryColor}`, color: `${secondaryColor}` }}
            >
              <div className="h-full my-5">
                <NavHeaders navHeaders={navHeaders} navHeaderSelected={navHeaderSelected}
                  clickNavHeader={(clickHeader) => setNavHeaderSelection(clickHeader)}
                  userName={userName}
                />
                <BackPage navHeaders ={navHeaders} backPageContent ={() => backPageContent()} 
                  userName={userName}
                />
              </div>
            </div>
          </ReactCardFlip>
        </Switch>
      }
      </div>
      { userName!=null && userName!="" &&
      <HandleFlip isFlipped={isFlipped} handleCardFlip={()=>handleCardFlip()}/>
      }
      
    </div>
    
  );
}

export default withRouter(App);
