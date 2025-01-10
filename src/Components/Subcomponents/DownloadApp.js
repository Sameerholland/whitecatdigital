import React from "react";
import "../../Css/Carousel.css";
import appimg1 from "../../media/images/feat1.png";
import appimg2 from "../../media/images/feat2.png";
import appimg3 from "../../media/images/feat3.png";
import appimg4 from "../../media/images/feat4.png";
const Features = [
  {
    Title:'Best Web Design',
    img:appimg1,
  },{
    Title:'24/7 Customer Support',
    img:appimg2
  },
  {
  Title:'Creative Solutions',
  img:appimg3
},
{
  Title:'Domain Experts',
  img:appimg4,
}
]
export default function DownloadApp() {
  return (
    <div className="secondCrousel">
      <div className="secondCrousel-imagecontanier">
        {
          Features.map((item,index)=>{
            return (
              <div className="feature-container">
                 <img className="secondCrousel-image" src={item.img} />
                 <p className="feature-title">{item.Title}</p>

              </div>
            )
          })
        }

      </div>
    
    </div>
  );
}
