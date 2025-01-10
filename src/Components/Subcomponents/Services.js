import React from "react";
import "../../Css/Carousel.css";
import model1 from "../../media/images/servcie1.png";
import model2 from "../../media/images/service2.png";
import model3 from "../../media/images/service3.png";
import model4 from "../../media/images/ervice4.png";

const service = [
  {
    id: 1,
    name: "Webiste Development",

    icon:model4
  },
  {
    id: 1,
    name: "App Devlopment",

    icon: model3,
  },
  {
    id: 1,
    name: "UI Design",

    icon: model3,
  },
  {
    id: 1,
    name: "Digital Marketing",

    icon: model1,
  },
];

export default function Services() {
  return (
    <div className="Carousel-service">
      <div className="Carousel-service-img-contanier">
        {service.map((item, index) => {
          return (
            <div className="Carousel-service-img-contanier-service">
              <img src={item.icon} className="servcie-model-img" />

             
              <p className="Carousel-service-img-contanier-servicename">
                {item.name}
              </p>
              <button className="Carousel-service-img-contanier-button"
             
              onClick={() =>
                window.open("https://wa.me/917970515036", "_blank")
              }>
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
