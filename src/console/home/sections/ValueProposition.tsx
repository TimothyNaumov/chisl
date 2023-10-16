import { Button, Grid, Stack, Text, Title, Image } from "@mantine/core";

const ValueProposition = (props: any) => {
  return (
    <Grid {...props}>
      <Grid.Col span={6}>
        <Stack style={{ maxWidth: "90%" }}>
          <Title style={{ fontSize: "72px" }}>
            Sculpt your next opportunity.
          </Title>
          <Text c="dimmed" style={{ fontSize: "24px" }}>
            Tailor your resume to any job description in seconds by leveraging
            the power of AI to be the perfect fit for any position.
          </Text>
          <Button size="lg" variant="gradiant" style={{ width: "fit-content" }}>
            Try it out
          </Button>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Image src="/Organize-resume.svg" h={500} w="auto" fit="contain" />
      </Grid.Col>
    </Grid>
  );
};

export default ValueProposition;
