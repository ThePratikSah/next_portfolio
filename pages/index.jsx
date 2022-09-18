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
        Pratik is a software developer currently based in Indore, India. With
        over 3 years of experience in Web development and building mobile apps
        for businesses to grow.
      </Para>

      <Para>
      Currently, he is working with the creative folks at deqode.
      He shares his experience in web-dev, and Jamstack on his blog, Learn Syntax.
      </Para>

      <Para>
      Outside of his work, Pratik enjoys playing video games, singing, and watching football. He even started learning Piano.
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

const Para = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 30em;
  margin-bottom: 0;
`;
