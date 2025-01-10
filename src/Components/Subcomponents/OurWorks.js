import React from "react";
import "../../Css/ourWork.css";

// You can replace this with actual logo images
const websites = [
  { name: "BhokalTrader", url: "https://bhokaltrader.com/" },
  { name: "OmAstro", url: "https://www.omastro.in/" },
  { name: "Stawish", url: "https://www.stawish.com/" },
  // Add more websites as needed
];

export default function OurWorks() {
  return (
    <div className="crousel-portfolio ">
      <div className="">
        <h1>Our Works</h1>
        <div className="works-container">
          {websites.map((website, index) => (
            <div key={index} className="work-item">
              {/* If you want to show logos */}
              <a
                href={website.url}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="logo1">{website.name}</p>
              </a>
              {/* Or show just the name */}
              {/* <a href={website.url} target="_blank" rel="noopener noreferrer">
              <p>{website.name}</p>
            </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
