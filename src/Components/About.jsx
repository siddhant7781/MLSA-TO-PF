/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/backgroundSidd.jpg";

const imageAltText = "background of stairs";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "They call me Sidd, the back-end guy. During the day, I tackle .JS and .TS, turning cryptic errors into victory dances. After hours, I wish to talk with .Py, making it perform amazing data and ML stuffs. If your project needs a touch of logic and AI magic, I'm your go-to. Just don't ask me to pick fonts and fix CSS —that's a whole different story! Cheers😉";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Backend Development",
  "RESTFUL APIs",
  "Microservices",
  "content writing",
  "Web hosting and deployment",

];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"“The only way to do great work is to love what you do.” – Steve Jobs";
// "They call me Sidd, the back-end guy. During the day, I tackle .JS and .TS, turning cryptic errors into victory dances. After hours, I wish to talk with .Py, making it perform amazing data and ML stuffs. If your project needs a touch of logic and AI magic, I'm your go-to. Just don't ask me to pick fonts and fix CSS —that's a whole different story! Cheers😉";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
