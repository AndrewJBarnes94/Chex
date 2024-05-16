import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #2d9cdb;
  margin-top: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-top: 10px;
`;

const Button = styled.a`
  background-color: #2d9cdb;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;

  &:hover {
    background-color: #1c7bbd;
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Feature = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;

  @media (min-width: 768px) {
    width: 250px;
    margin: 15px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    margin: 15px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2em;
  color: #2d9cdb;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
`;

const TestimonialsSection = styled.section`
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
  text-align: center;
`;

const Testimonial = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialText = styled.p`
  font-size: 1em;
  color: #666;
`;

const PricingSection = styled.section`
  background-color: #f0f0f0;
  padding: 40px 20px;
  margin-top: 30px;
  width: 100%;
  text-align: center;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

const PricingTitle = styled.h3`
  font-size: 1.5em;
  color: #2d9cdb;
  margin-bottom: 10px;
`;

const PricingAmount = styled.p`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

const ContactSection = styled.section`
  background-color: #fff;
  padding: 40px 20px;
  margin-top: 30px;
  width: 100%;
  text-align: center;
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
  background-color: #2d9cdb;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;

  &:hover {
    background-color: #1c7bbd;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <Title>Chex</Title>
        <Subtitle>Mastering Efficiency in Manufacturing</Subtitle>
        <Button href="#get-started">Get Started</Button>
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
        <Testimonial>
          <TestimonialText>
            "Chex has transformed our QA process. The data insights are invaluable." – Jane Doe, QA Manager
          </TestimonialText>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "We’ve seen a significant boost in efficiency since switching to Chex." – John Smith, Operations Director
          </TestimonialText>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "The real-time data collection and analytics dashboard are game-changers." – Mary Johnson, Plant Manager
          </TestimonialText>
        </Testimonial>
      </TestimonialsSection>
      <PricingSection id="pricing">
        <h2>Pricing</h2>
        <PricingTable>
          <PricingCard>
            <PricingTitle>Basic</PricingTitle>
            <PricingAmount>$9.99/month</PricingAmount>
            <p>Essential features for small teams</p>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Pro</PricingTitle>
            <PricingAmount>$19.99/month</PricingAmount>
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
    </Container>
  );
};

export default LandingPage;
