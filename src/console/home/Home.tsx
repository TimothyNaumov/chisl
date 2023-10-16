import { Center, Grid, Group, Image, Stack, Title } from "@mantine/core";
import ValueProposition from "./sections/ValueProposition";
import HowItWorks from "./sections/HowItWorks";
import UsageStat from "./components/UsageStat";

const Home = () => {
  return (
    <Group justify="center">
      <Center style={{ maxWidth: "81rem" }}>
        <Grid mt={125}>
          <Grid.Col span={6}>
            <ValueProposition />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src="/Organize-resume.svg" h={500} w="auto" fit="contain" />
          </Grid.Col>
          {/* <Grid.Col span={12}>
            <HowItWorks />
          </Grid.Col> */}
          <Grid.Col span={4}>
            <UsageStat title="69420+" description="resumes created so far" />
          </Grid.Col>
          <Grid.Col span={4}>
            <UsageStat title="369" description="jobs landed" />
          </Grid.Col>
          <Grid.Col span={4}>
            <UsageStat title="3141" description="satisfied customers" />
          </Grid.Col>
        </Grid>
      </Center>
    </Group>
  );
};

export default Home;
