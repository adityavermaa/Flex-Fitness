import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import US from '../assets/images/us.jpg'
const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  /* Add any additional global styles here */
`;

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 12%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 12%;
  }
`;

const AboutLeft = styled.div`
  img {
    width: 420px;
    height: auto;
    transform: translateY(50px);

    @media screen and (max-width: 768px) {
      width: 100%;
      transform: none;
    }
  }
`;

const AboutRight = styled.div`
  width: 54%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  h1 {
    color: #e74d06;
    font-size: 37px;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    color: #444;
    line-height: 26px;
    font-size: 15px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  .address {
    margin: 25px 0;

    @media screen and (max-width: 768px) {
      margin: 15px 0;
    }
  }

  .address ul li {
    margin-bottom: 5px;
  }

  .address-logo {
    margin-right: 15px;
    color: #e74d06;
  }

  .saprater {
    margin: 0 35px;
  }

  .expertise ul {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .expertise h3 {
    margin-bottom: 10px;
  }

  .expertise-logo {
    font-size: 19px;
    margin-right: 10px;
    color: #e74d06;
  }
`;

const About = () => {
  return (
    <>
      <GlobalStyle />
    <Section id="about-section">
      <AboutLeft>
        <img src={US} alt="About Img" />
      </AboutLeft>
      <AboutRight>
        {/* <h4>My Story</h4> */}
        <h1>About Us</h1>
        <p>
        Welcome to Flex Fitness! Founded by three friends, Aditya Verma, Aditya Singhal, and Arpit Soni, during their B.Tech 3rd year. Our website aims to revolutionize your fitness journey, providing expert guidance, personalized plans, and a vibrant community. Join us as we empower you to achieve your fitness goals and embrace a healthier lifestyle.
        </p>
        <div className="address">
          <ul>
            <li>
              <span className="address-logo">
                <i className="fas fa-paper-plane"></i>
              </span>
              <p>Address</p>
              <span className="saprater">:</span>
              <p>1-ka-3 Jawahar Nagar, Jaipur</p>
            </li>
            <li>
              <span className="address-logo">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>Phone No</p>
              <span className="saprater">:</span>
              <p>+91-6350237211, +91-8766666200, +91-8003445673 </p>
            </li>
            <li>
              <span className="address-logo">
                <i className="far fa-envelope"></i>
              </span>
              <p>Email ID</p>
              <span className="saprater">:</span>
              <p>aditya.20bcrn002@jecrcu.edu.in</p>
            </li>
          </ul>
        </div>
        <div className="expertise">
          <h3>My Expertise</h3>
          <ul>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-html5"></i>
              </span>
              <p>HTML</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-css3-alt"></i>
              </span>
              <p>CSS</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-node-js"></i>
              </span>
              <p>JavaScript</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-react"></i>
              </span>
              <p>React.js</p>
            </li>
          </ul>
        </div>
      </AboutRight>
    </Section>
    </>
  );
};

export default About;
