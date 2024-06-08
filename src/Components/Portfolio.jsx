/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/code.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Zoom Clone",
    description:
    "I have cloned the Zoom using React, Node, and Socket.io and MongoDB. The app enables two way communication with audio, video, and screen sharing.",
    url: "https://github.com/siddhant7781/zoom-clone-node",
  },
  {
    title: "Contact Management App",
    description:
     "I built a comprehensive contact management web application. The user interface (UI) is designed for ease of use and utilizes the templating. On the backend, I implemented a robust API using ExpressJS with a secure database (like MongoDb) and employed tools like Mongoose for seamless data management.",
    url: "https://github.com/siddhant7781/contact-manager-app-using-nodejs-and-express-js",
  },
  {
    title: "Celestial Cruiser",
    description:
    "My team built a space exploration itinerary app on the NASA Space App Challenge. We used Express, JavaScript, MongoDB, and Mongoose to develop the API. We utilized Flutter and packages for the UI.",
    url: "https://github.com/siddhant7781/celestial_cruiser",
  },
  {
    title: "Mapty",
    description:"This is the app that I made while I was learning backend, It helps to keep track of outdoor workouts (like cycling, and running) on a location basis using the map. As a back-end developer, I worked on setting up the map using geolocation API.",
    url: "https://github.com/siddhant7781/Mapty-mark-your-workout",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
