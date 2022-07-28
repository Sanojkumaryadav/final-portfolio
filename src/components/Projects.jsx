import React from "react";
import './Project.css';
// import arrayDestruct from "../assets/project/arrayDestruct.png";
// import installNode from "../assets/project/installNode.jpg";
// import navbar from "../assets/project/navbar.png";
// import reactParallax from "../assets/project/reactParallax.png";
// import reactSmooth from "../assets/project/reactSmooth.jpg";
// import dineout from '../assets/project/dineoutclone.png'
// import reactWeather from "../assets/project/reactWeather.jpg";

const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/Wku2r3VyxS0?autoplay=1&mute=1&loop=1&playlist=Wku2r3VyxS0",
      title:"Swiggy Web Clone",
      description :" Restaurent, Login, Signup and Restaurent details page, Add to Cart, Payment Section. A collaborative project built by 4 Developers within 7 days. Area of Responsibility  Develop multiple filter options and search, offers and help page.",
      techstack: "HTML, CSS, JavaScript, Json-Server, DOM Api ",
      live : "https://sanojswiggyclone.netlify.app/",
      code : "https://github.com/Sanojkumaryadav/Swiggy-Clone"
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/g10znAnUdbM?autoplay=1&mute=1&loop=1&playlist=g10znAnUdbM",
      title:"Zara Web Clone",
      description :"ZARA, is a Spanish apparel retailer based in Arteixo, A Coruña, Galicia, Spain. The company specialises in fast fashion.We were a team of five members, distributed the whole website amoung us and make a clone of Zara Website. in 5 days",
      techstack: "HTML, CSS, JavaScript, DOM Api",
      live: "https://sanojzaraclone.netlify.app/",
      code:"https://github.com/Sanojkumaryadav/Zara-Clone.git"
   
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/V6eQnBa2fXE?autoplay=1&mute=1&loop=1&playlist=V6eQnBa2fXE",
      title:"Grocery Website",
      description :"E-commerce app using HTML CSS and JavaScript we mainly focuses on frontend part. In frontend part design home page, features page, product page,  categories page, blog page, review page, add to card, search, login, create an account, footer and blogs page.",
      techstack: "HTML, CSS, JavaScript",     
        live : "https://sanojvegmartwebsite.netlify.app/",
        code : "https://github.com/Sanojkumaryadav/VegMartWebsite.git",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/aw1a9Hqv-oM?autoplay=1&mute=1&loop=1&playlist=aw1a9Hqv-oM",
      title:"Text-Transform",
      description :" Text transform convert the text into uppercase and lowercase, it can count the number of words in your text and number of characters.",
      techstack: "HTML, CSS, JavaScript, Bootstrap, React",     
        live : "https://sanoj-tetx-transform-in-react.netlify.app/",
        code : "https://github.com/Sanojkumaryadav/React-Text-Converter",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/mcQk9iidxsM?autoplay=1&mute=1&loop=1&playlist=mcQk9iidxsM",
      title:"E-commerce Website",
      description :"E-commerce web app, In frontend part design man page, Women page, signup page, categories and login page.",
      techstack: "HTML, CSS, JavaScript, Local Storage",     
        live : "https://sanoj-e-commerce-pages.netlify.app/men.html",
        code : "https://github.com/Sanojkumaryadav/E-commerce-Pages",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/TACgDsRXAgM?autoplay=1&mute=1&loop=1&playlist=TACgDsRXAgM",
      title:"Claculator Web Apps",
      description :"This app allow user to perform basic arithemic operation.Is is solo project developed in 2 days",
      techstack: "HTML, CSS, JavaScript",     
        live : "https://sanojcalculator.netlify.app/",
        code : "https://github.com/Sanojkumaryadav/Calculator.git",
    },
  ];

  return (
    <div
      name="projects"

      // 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,description,techstack, live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                   <iframe
                      class="rounded-md duration-200 hover:scale-105" 
                      src={src}
                    ></iframe>
              <div className=" own-container">
                <p className="title-own font-bold ">{title}</p>
                <p className="desc-own font-light">{description}</p>
                <hr />
                <p className="tech-title-own font-bold ">Tech Stack</p>
                <p className="techstack-own font-medium">{techstack}</p>            
                
              </div>
              <hr />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(code)}>
                  Code
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
