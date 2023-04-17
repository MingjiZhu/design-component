import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#4887C1",
      secondary: "#617CEA",
    },
    space: {},
    fonts: {},
  },
});
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#4887C1",
      secondary: "#617CEA",
    }, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#B6C2CE",
      secondary: "#F0F2FA",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
