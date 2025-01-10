import React from "react";
import "../Css/Service.css";
import { AiFillStar } from "react-icons/ai"; // Importing a star icon

import service1 from "../media/images/servcie1.png";
import service2 from "../media/images/service2.png";
import service3 from "../media/images/service3.png";
import service4 from "../media/images/ervice4.png";
import service5 from "../media/images/ecommerce.png";
import service6 from "../media/images/wordpress.png";
import service7 from "../media/images/news.png";
import service8 from "../media/images/php.png";


const data = [
  {
    name: "Website Development",
    img: service4,
  },
  {
    name: "App Development",

    img: service3,
  },
  {
    name: "UI design",

    img: service2,
  },
  {
    name: "Digital Marketing",

    img: service1,
  },
  {
    name: "WordPress Website",

    img: service6,
  },
  {
    name: "E-Commerce Website",

    img: service5,
  },
  {
    name: "News Website",

    img: service7,
  },
  {
    name: "Php Website",

    img: service8,
  },
];

export default function Service() {
  return (
    <div className="container">
      <div>
        <div className="services">
          {data.map((item, index) => {
            return (
              <div className="service-container">
                <img className="img" src={item.img} />
               
                <div className="info">
                  
                  <p className="name">{item.name}</p>
                </div>
                <button  onClick={() =>
                window.open("https://wa.me/917970515036", "_blank")
              }
            >Get Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
