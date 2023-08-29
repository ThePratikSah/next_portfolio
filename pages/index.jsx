import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Pratik Sah</title>
        <meta name="description" content="Node Js developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headline>Hey, there!</Headline>
      <Title>Thanks for your visit.</Title>

      <Para>
        Pratik is a software developer currently based in Banglore, India. With
        over 3 years of experience in Web development and building mobile apps
        for businesses to grow.
      </Para>

      <Para>
      Currently, he is working with the creative folks at <Href><A href={"https://www.etherealcovenant.com/"} target={"_blank"} rel="noopener noreferrer">ETHEREAL COVENANT</A></Href>.
      He shares his experience in web-dev, and Jamstack on his blog, <Href><A href={"https://learnsyntax.com/"} target={"_blank"} rel="noopener noreferrer">Learn Syntax</A></Href>.
      </Para>

      <Para>
      Outside of his work, Pratik enjoys playing video games, singing, and watching football. You can connect with him on <Href><A href={"https://www.linkedin.com/in/pratiksah"} target={"_blank"} rel="noopener noreferrer">LinkedIn</A></Href>, <Href><A href={"https://twitter.com/jspratik"} target={"_blank"} rel="noopener noreferrer">Twitter</A></Href>, and <Href><A href={"https://github.com/ThePratikSah/"} target={"_blank"} rel="noopener noreferrer">Github</A></Href>.
      </Para>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10vh 10vw;
  @media (max-width: 768px) {
    padding: 10vh 10vw;
  }
`;

const Headline = styled.h1`
  font-size: 4.5em;
  margin-bottom: 0;
`;

const Title = styled.p`
  font-size: 2.2em;
  margin-bottom: 0;
`;

const A = styled.a`
  text-decoration: none;
`;

const Href = styled.span`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 1px;
  transition: color ease 0.3s;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 5%;
    left: 0;
    bottom: 0;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    transition: all ease 0.3s;
  }
  &:hover:after {
    height: 60%;
  }
`;

const Para = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 30em;
  margin-bottom: 0;
`;
