import React from "react";
import "./../../index.css";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className='parent'>
      <div style={{ height: "70%" }}>
        <div className='text-center'>
          <img
            src='https://res.cloudinary.com/devevangel/image/upload/c_fill,h_449,w_449/v1603645505/LegacyEA/videos/_MG_7354_nkqm52.jpg'
            alt=''
            width='300'
            className='rounded-circle mb-3 img-thumbnail shadow-sm'
          />
          <h1 className='mb-0 color' style={{ textDecoration: "underline" }}>
            Nobleman Chukwu
          </h1>
          <span className='small text-uppercase text-muted'>
            Software developer from Canada
          </span>
          <blockquote className='blockquote'>
            <p className='p-2 mb-0 textColor'>
              Hey there!,
              <br />
              My name is Nobleman Chukwu. I'm a software developer currently
              looking for a job as a Quality Assurance Engineer.
            </p>
          </blockquote>
          <ul className='social mb-0 list-inline'>
            <li className='list-inline-item'>
              <a
                target='blank'
                href='https://web.facebook.com/Taibowest/?_rdc=1&_rdr'
                className='social-link'
              >
                <i
                  className='grow fa fa-2x fa-facebook-f'
                  style={{ color: " #4CAF50" }}
                ></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                target='blank'
                href='https://twitter.com/Taibowest'
                className='social-link'
              >
                <i
                  className='grow fa fa-2x fa-twitter'
                  style={{ color: " #4CAF50" }}
                ></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                target='blank'
                href='https://www.instagram.com/mr_tenacious/'
                className='social-link'
              >
                <i
                  className='grow fa fa-2x fa-instagram'
                  style={{ color: " #4CAF50" }}
                ></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                target='blank'
                href='https://www.linkedin.com/in/nobleman-c/'
                className='social-link'
              >
                <i
                  className='grow fa fa-2x fa-linkedin'
                  style={{ color: " #4CAF50" }}
                ></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='tel:13067151225' className='social-link'>
                <i
                  className='grow fa fa-2x fa-phone'
                  style={{ color: "#4CAF50" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
