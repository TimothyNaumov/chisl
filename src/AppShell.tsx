import {
  Burger,
  Group,
  AppShell as MantineAppShell,
  Title,
  UnstyledButton,
} from "@mantine/core";
import AppRouter from "./AppRouter";
import { useDisclosure, useHeadroom, useMediaQuery } from "@mantine/hooks";
import HeaderNavigation from "./console/header/HeaderNavigation";
import HeaderRegister from "./console/header/HeaderRegister";

const AppShell = () => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const isSmallerThanSm = useMediaQuery("(max-width: 767px)");

  return (
    <MantineAppShell
      header={{
        height: 168,
      }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      {/* <Portal>
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "var(--mantine-spacing-xs)",
            height: rem(120),
            zIndex: 1000000,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: "transform 400ms ease",
            backgroundColor: "var(--mantine-color-body)",
          }}
        >
          <Group h="100%" px="md" justify="center">
            <Group w="60%">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Group justify="space-between" style={{ flex: 1 }}>
                <Group>
                  <Title order={3}>Chisl</Title>
                  <HeaderNavigation />
                </Group>
                <HeaderRegister />
              </Group>
            </Group>
          </Group>
        </Box>
      </Portal> */}
      <MantineAppShell.Header
        withBorder={false}
        style={{ backgroundColor: "#fdf5e6" }}
      >
        <Group
          h="100%"
          px="md"
          justify={isSmallerThanSm ? "flex-start" : "center"}
        >
          <Group
            h="100%"
            px="md"
            justify="center"
            style={{ maxWidth: "81rem", flex: 1 }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group>
                <Title order={1}>Chisl</Title>
                <HeaderNavigation />
              </Group>
              <HeaderRegister />
            </Group>
          </Group>
        </Group>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar py="md" px={4}>
        <UnstyledButton>Why Chisl?</UnstyledButton>
        <UnstyledButton>Features</UnstyledButton>
        <UnstyledButton>Pricing</UnstyledButton>
        <UnstyledButton>Company</UnstyledButton>
      </MantineAppShell.Navbar>
      <MantineAppShell.Main style={{ backgroundColor: "#fdf5e6" }}>
        <AppRouter />
      </MantineAppShell.Main>
    </MantineAppShell>
  );
};

export default AppShell;
