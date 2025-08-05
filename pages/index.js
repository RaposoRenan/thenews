import Head from "next/head";
import {
  Container,
  Header,
  Logo,
  Nav,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  AboutText,
  ServicesGrid,
  ServiceCard,
  PortfolioGrid,
  PortfolioItem,
  ContactSection,
  ContactTitle,
  ContactButton,
  Footer,
} from "../styles/Home.styles";

function Home() {
  return (
    <>
      <Head>
        <title>UriAço - Serralheria Artesanal</title>
        <meta
          name="description"
          content="Serralheria de alta qualidade por Carlos Urias da Silveira."
        />
      </Head>
      <Container>
        <Header>
          <Logo>UriAço</Logo>
          <Nav>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contact">Contato</a>
          </Nav>
        </Header>

        <main>
          <HeroSection>
            <HeroTitle>UriAço</HeroTitle>
            <HeroSubtitle>A Arte de Transformar Aço em Soluções</HeroSubtitle>
          </HeroSection>

          <Section id="about">
            <SectionTitle>Sobre Nós</SectionTitle>
            <AboutText>
              Com anos de experiência e paixão pelo ofício, Carlos Urias da
              Silveira lidera a UriAço com a missão de entregar projetos de
              serralheria com precisão, durabilidade e um acabamento impecável.
              Cada peça é tratada como uma obra de arte, unindo a força do metal
              à sensibilidade do design para criar soluções que superam as
              expectativas.
            </AboutText>
          </Section>

          <Section id="services" style={{ backgroundColor: "#f9f9f9" }}>
            <SectionTitle>Nossos Serviços</SectionTitle>
            <ServicesGrid>
              <ServiceCard>
                <h4>Portões e Grades</h4>
                <p>
                  Projetos sob medida para garantir segurança com estilo e
                  sofisticação para sua residência ou empresa.
                </p>
              </ServiceCard>
              <ServiceCard>
                <h4>Estruturas Metálicas</h4>
                <p>
                  Desenvolvimento e montagem de mezaninos, coberturas e outras
                  estruturas com a máxima resistência.
                </p>
              </ServiceCard>
              <ServiceCard>
                <h4>Mobiliário em Aço</h4>
                <p>
                  Criação de móveis de design industrial, como estantes, mesas e
                  bancadas, que unem funcionalidade e beleza.
                </p>
              </ServiceCard>
            </ServicesGrid>
          </Section>

          <Section id="portfolio">
            <SectionTitle>Nosso Portfólio</SectionTitle>
            <PortfolioGrid>
              {/* Substitua os links pelas imagens dos seus projetos */}
              <PortfolioItem
                src="https://images.unsplash.com/photo-1593963643948-3c350631baa7?q=80&w=3540&auto=format&fit=crop"
                alt="Projeto 1"
              />
              <PortfolioItem
                src="https://images.unsplash.com/photo-1629272373059-99435b8a5360?q=80&w=3540&auto=format&fit=crop"
                alt="Projeto 2"
              />
              <PortfolioItem
                src="https://images.unsplash.com/photo-1508213797635-738a1b63b49c?q=80&w=3437&auto=format&fit=crop"
                alt="Projeto 3"
              />
            </PortfolioGrid>
          </Section>

          <ContactSection id="contact">
            <ContactTitle>Vamos Construir seu Projeto?</ContactTitle>
            <p>Entre em contato e solicite um orçamento sem compromisso.</p>
            {/* Substitua pelo seu link do WhatsApp */}
            <ContactButton href="https://wa.me/5500000000000" target="_blank">
              Falar pelo WhatsApp
            </ContactButton>
          </ContactSection>
        </main>

        <Footer>
          <p>&copy; 2025 UriAço. Todos os direitos reservados.</p>
        </Footer>
      </Container>
    </>
  );
}

export default Home;
