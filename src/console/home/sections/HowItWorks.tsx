import { Stepper } from "@mantine/core";
import { useState } from "react";

function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Upload your resume" />
      <Stepper.Step
        label="Step 2"
        description="Tell us about your work experience"
      />
      <Stepper.Step label="Step 3" description="Generate chiseled resume" />
      <Stepper.Step
        label="Step 3"
        description="Celebrate your new job position"
      />
    </Stepper>
  );
}

export default HowItWorks;
