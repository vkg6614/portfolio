import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { WritingEffect } from "./WritingEffect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h1 style={{ color: "magenta" }}>{`Hi, I am Vikas`}</h1>
      </SectionText>
      <WritingEffect />
      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/drive/folders/1BhNjPV_hv74In3FRwd2yQbliDYeYXTna?usp=sharing",
            "_blank"
          )
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
