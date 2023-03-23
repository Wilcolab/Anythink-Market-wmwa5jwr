import React from "react";
import styled from "styled-components";
import logo from "../../imgs/logo.png";



const Banner = () => {

  const Container = styled.div`
    background-color: ${props => props.theme.dark}
  `;

  return (
      <Container className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span>A place to </span>
            <span id="get-part">get</span>
            <span> the cool stuff.</span>
          </div>
        </div>
      </Container>
  );
};

export default Banner;
