import { Grid } from "@mantine/core";
import UsageStat from "../components/UsageStat";

const UsageStats = (props: any) => {
  return (
    <Grid {...props}>
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
  );
};

export default UsageStats;
