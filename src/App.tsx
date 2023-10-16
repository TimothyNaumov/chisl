import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MantineProvider>
  );
}
