import { Group, Title, UnstyledButton } from "@mantine/core";

const HeaderNavigation = () => {
  return (
    <Group ml="xl" gap="xl" visibleFrom="sm">
      <UnstyledButton>Why Chisl?</UnstyledButton>
      <UnstyledButton>Features</UnstyledButton>
      <UnstyledButton>Pricing</UnstyledButton>
      <UnstyledButton>Company</UnstyledButton>
    </Group>
  );
};

export default HeaderNavigation;
