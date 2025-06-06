import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>About Me</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                
                <div className="right">
                  <p>{data.role}</p>
                 
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
