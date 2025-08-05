import styled from "styled-components";

export const Container = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
`;

export const Header = styled.header`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  color: #c8a46e;
`;

export const Nav = styled.nav`
  a {
    color: white;
    margin-left: 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      color: #c8a46e;
    }
  }
`;

export const HeroSection = styled.section`
  background: url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop")
    no-repeat center center/cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const HeroTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

export const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceCard = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h4 {
    font-size: 1.5rem;
    color: #c8a46e;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export const PortfolioItem = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContactSection = styled(Section)`
  background-color: #1a1a1a;
  color: white;
`;

export const ContactTitle = styled(SectionTitle)`
  color: white;
`;

export const ContactButton = styled.a`
  display: inline-block;
  background-color: #c8a46e;
  color: #1a1a1a;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #b38f5a;
  }
`;

export const Footer = styled.footer`
  background-color: #0d0d0d;
  color: #aaa;
  text-align: center;
  padding: 1.5rem;
`;
