import { Stack, Center } from "@mantine/core";
import ValueProposition from "./sections/ValueProposition";
import UsageStats from "./sections/UsageStats";
import Testimonial from "./sections/Testimonial";

const Home = () => {
  return (
    <Center>
      <Stack style={{ maxWidth: "81rem" }}>
        <ValueProposition mt={125} />
        <UsageStats mt={125} />
        <Testimonial mt={125} />
      </Stack>
    </Center>
  );
};

export default Home;
