import { Stack, Text, Title } from "@mantine/core";

interface UsageStatProps {
  title: string;
  description: string;
}

const UsageStat = (props: UsageStatProps) => {
  return (
    <Stack justify="center">
      <Title order={1} style={{ textAlign: "center", fontSize: "64px" }}>
        {props.title}
      </Title>
      <Text style={{ textAlign: "center" }} size="xl">
        {props.description}
      </Text>
    </Stack>
  );
};

export default UsageStat;
