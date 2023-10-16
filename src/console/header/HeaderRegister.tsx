import { Group, UnstyledButton } from "@mantine/core";

const HeaderRegister = () => {
  return (
    <Group ml="xl" gap="xl" visibleFrom="sm">
      <UnstyledButton>Register</UnstyledButton>
      <UnstyledButton>Login</UnstyledButton>
    </Group>
  );
};

export default HeaderRegister;
