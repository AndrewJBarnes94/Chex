import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBarContainer = styled.nav`
  width: 100%;
  background: #2c3e50; /* Dark Blue */
  padding: 20px 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box; /* Ensure padding is included in the width */
`;

const Logo = styled.a`
  font-size: 1.5em;
  color: white;
  text-decoration: none;
  margin-right: auto; /* Align logo to the left */
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1; /* Take up remaining space */
`;

const CenteredLinks = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-left: auto; /* Push the dropdown to the far right */
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownButton = styled.div`
  color: white;
  cursor: pointer;
  font-size: 1.5em;
`;

const DropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
  border-radius: 5px;
`;

const DropdownItem = styled.a`
  color: #2c3e50; /* Dark Blue */
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SubmenuContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 100%;
  top: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 5px;
`;

const SubmenuItem = styled(DropdownItem)`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 0;
`;

const Header = styled.header`
  text-align: center;
  padding: 60px 20px;
  background-color: #34495e; /* Darker Blue */
  color: white;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3em;
  margin-top: 0;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 10px;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f1; /* Light Gray */
  padding: 60px 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Feature = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 300px;
  text-align: center;

  @media (min-width: 768px) {
    width: 250px;
    margin: 15px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    margin: 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.4em;
  color: #333; /* Dark Gray */
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1em;
  color: #666; /* Medium Gray */
  margin-bottom: 10px;
`;

const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c3e50; /* Dark Blue */
  padding: 60px 20px;
  width: 100%;
  color: white;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Testimonial = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  max-width: 800px;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1em;
  color: #444; /* Dark Gray */
  margin-bottom: 15px;
  line-height: 1.6;
  padding: 20px;
  white-space: normal;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TestimonialAuthor = styled.p`
  font-size: 1em;
  color: #888; /* Light Gray */
  font-style: italic;
  margin-top: 10px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#ffffff' : '#ccc')}; /* White when active */
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const PricingSection = styled.section`
  background-color: #ecf0f1; /* Light Gray */
  padding: 60px 20px;
  width: 100%;
  text-align: center;
  border-top: 2px solid #2c3e50; /* Dark Blue */
`;

const PricingTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PricingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 300px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

const PricingTitle = styled.h3`
  font-size: 1.5em;
  color: #333; /* Dark Gray */
  margin-bottom: 10px;
`;

const PricingAmount = styled.p`
  font-size: 2em;
  color: #333; /* Dark Gray */
  margin-bottom: 10px;
`;

const ContactSection = styled.section`
  background-color: #34495e; /* Darker Blue */
  padding: 60px 20px;
  width: 100%;
  text-align: center;
  color: white;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  margin-top: 15px;
  background-color: white;
  color: #2c3e50; /* Dark Blue */
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2c3e50; /* Dark Blue */
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

const testimonials = [
  { 
    text: "Chex has completely revolutionized our QA process. The real-time data insights we gain are not just invaluable but critical for our decision-making. We've reduced errors by 30% and improved our overall efficiency. Chex is an absolute game-changer for our operations.", 
    author: "Alice Johnson, QA Manager" 
  },
  { 
    text: "Since integrating Chex, we've seen a phenomenal boost in our operational efficiency. The seamless data collection and powerful analytics have enabled us to make informed decisions swiftly. Our team collaboration has reached new heights, and our production timelines have improved by 25%.", 
    author: "Mark Thompson, Operations Director" 
  },
  { 
    text: "The real-time data collection and comprehensive analytics dashboard provided by Chex have transformed our plant's operations. We're now able to identify and address issues before they escalate, saving us significant time and resources. Chex is an indispensable tool for any manufacturing setup.", 
    author: "Rachel Adams, Plant Manager" 
  },
  { 
    text: "Chex is an essential tool that has streamlined our workflows and improved our operational efficiency dramatically. The intuitive interface and customizable checklists have made our daily tasks much easier to manage. Our team's productivity has increased by 20% since we started using Chex.", 
    author: "James Williams, Team Lead" 
  },
  { 
    text: "Adopting Chex has been one of the best decisions for our organization. The accuracy of our data has improved remarkably, and team collaboration has never been better. Chex's robust features and user-friendly interface are unmatched. Our project completion rate has gone up by 15%.", 
    author: "David Brown, Project Manager" 
  },
  { 
    text: "The user-friendly interface and robust features of Chex have made it an indispensable part of our daily operations. We've seen significant improvements in our workflow efficiency and data accuracy. Chex has empowered us to achieve our operational goals more effectively.", 
    author: "Lisa White, Operations Manager" 
  },
  { 
    text: "Chex has provided us with unparalleled insights into our processes. The ability to make data-driven decisions has improved our overall efficiency and productivity. The support team is exceptional, always ready to help and ensure we maximize the potential of the product.", 
    author: "Michael Green, Data Analyst" 
  },
  { 
    text: "The support team at Chex is fantastic. They are always ready to help and ensure we get the most out of the product. The data insights and analytics provided by Chex have been crucial in enhancing our operational efficiency. We couldn't be happier with this tool.", 
    author: "Emily Clark, Customer Success Manager" 
  },
];

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
      }, 8000); // Change testimonial every 8 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <Container>
      <NavBarContainer>
        <Logo href="#">Chex</Logo>
        <CenteredLinks>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </CenteredLinks>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} />
          </DropdownButton>
          <DropdownContent show={dropdownVisible}>
            <DropdownItem href="#profile">Profile</DropdownItem>
            <SubmenuItem onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
              Settings
              <SubmenuContent show={submenuVisible}>
                <DropdownItem href="#account-settings">Account Settings</DropdownItem>
                <DropdownItem href="#privacy-settings">Privacy Settings</DropdownItem>
              </SubmenuContent>
            </SubmenuItem>
            <DropdownItem href="#logout">Logout</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
      </NavBarContainer>
      <Header>
        <Title>Chex</Title>
        <Subtitle>Mastering Efficiency in Manufacturing</Subtitle>
      </Header>
      <FeaturesSection id="features">
        <Feature>
          <FeatureTitle>Digital Checklists</FeatureTitle>
          <FeatureDescription>
            Create and manage checklists with ease. Customizable templates for various needs.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Real-Time Data Collection</FeatureTitle>
          <FeatureDescription>
            Capture data instantly as tasks are completed. Ensure accuracy and accountability with user-specific logs.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Analytics Dashboard</FeatureTitle>
          <FeatureDescription>
            Visualize data with intuitive charts and graphs. Generate reports to track performance and identify trends.
          </FeatureDescription>
        </Feature>
      </FeaturesSection>
      <TestimonialsSection id="testimonials">
        <h2>What Our Clients Say</h2>
        <Testimonial
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TestimonialText>"{testimonials[currentTestimonial].text}"</TestimonialText>
          <TestimonialAuthor>– {testimonials[currentTestimonial].author}</TestimonialAuthor>
        </Testimonial>
        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === currentTestimonial}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </DotsContainer>
      </TestimonialsSection>
      <PricingSection id="pricing">
        <h2>Pricing</h2>
        <PricingTable>
          <PricingCard>
            <PricingTitle>Basic</PricingTitle>
            <PricingAmount>$XXX/month</PricingAmount>
            <p>Essential features for small teams</p>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Pro</PricingTitle>
            <PricingAmount>$XXX/month</PricingAmount>
            <p>Advanced features for growing teams</p>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Enterprise</PricingTitle>
            <PricingAmount>Contact us</PricingAmount>
            <p>Customized solutions for large organizations</p>
          </PricingCard>
        </PricingTable>
      </PricingSection>
      <ContactSection id="contact">
        <h2>Contact Us</h2>
        <ContactForm>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Textarea placeholder="Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
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
    </Container>
  );
};

export default LandingPage;
