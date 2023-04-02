import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio 
      </SectionTitle>
      <SectionText>
        Hello My name is Sanzhar. I'm Software Engineer. I can improve your company business proceses.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/sanzhar-kuanyshbay-59aa04235/'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;