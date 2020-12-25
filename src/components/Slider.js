import React,{useEffect,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import '../styles/slider.css';



function Slider({data}) {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

   // const baseUrl = '../resource/images/customer/';
    function importAll(r) {
        return r.keys().map(r);
      }
      
    //const images = importAll(require.context('../resource/images/customer/', false, /\.(png|jpe?g|svg)$/));
   // console.log("images...",images);
    
    useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, people]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
  

    return (
      <section className='section'>
      
      <div className='section-center '>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img h-24 w-24' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
            
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>




    )
}

export default Slider
 {/*  <div>
              <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        showIndicators={false}
        interval={6100}
      >
      
    {customerDelightSec()}
      </Carousel>
      </div>*/}