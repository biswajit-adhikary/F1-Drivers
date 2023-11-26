import React from "react";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <footer className="footer-area bg-body-tertiary py-4">
      <Container>
        <p className="text-center m-0">
          &copy; React Application 2023, All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
