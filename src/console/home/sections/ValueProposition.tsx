import { Button, Stack, Text, Title } from "@mantine/core";

const ValueProposition = () => {
  return (
    <Stack style={{ maxWidth: "90%" }}>
      <Title style={{ fontSize: "72px" }}>Sculpt your next opportunity.</Title>
      <Text c="dimmed" style={{ fontSize: "24px" }}>
        Tailor your resume to any job description in seconds by leveraging the
        power of AI to be the perfect fit for any position.
      </Text>
      <Button size="lg" variant="gradient" style={{ width: "fit-content" }}>
        Try it out
      </Button>
    </Stack>
  );
};

export default ValueProposition;
