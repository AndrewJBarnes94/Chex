import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2d9cdb;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5em;
  &:hover {
    color: #f1f1f1;
  }
`;

const Copyright = styled.p`
  font-size: 0.9em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#features">Features</FooterLink>
        <FooterLink href="#pricing">Pricing</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
      <SocialLinks>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </SocialLink>
      </SocialLinks>
      <Copyright>&copy; 2024 Chex. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
