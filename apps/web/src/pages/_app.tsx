import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import { useState } from "react";
import { rtlCache } from "../../rtl-cache";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          /** Put your mantine theme override here */
          // Note that all colors that are added should always include 10 shades. You can use some of these tools to generate or copy ready color palettes:
          // https://omatsuri.app/color-shades-generator
          colors: {
            primary: [
              "#B6C2CE",
              "#9CB1C4",
              "#82A2BE",
              "#6794BD",
              "#4887C1",
              "#2E7CC3",
              "#1971C2",
              "#26659F",
              "#2D5B84",
              "#30516F",
            ],
            secondary: [
              "#F0F2FA",
              "#CBD3F2",
              "#A2B2F3",
              "#748FFC",
              "#617CEA",
              "#546ED6",
              "#4B62C1",
              "#495CA8",
              "#4B588F",
              "#49537A",
            ],
            danger: [
              "#D9C9C2",
              "#CEB2A7",
              "#C89D8B",
              "#C7876E",
              "#CC714C",
              "#D85927",
              "#D9480F",
              "#B14920",
              "#92472A",
              "#7A442F",
            ],
            warning: [
              "#D9CCBE",
              "#D0BAA2",
              "#CCAA85",
              "#CD9B65",
              "#D58E41",
              "#E48219",
              "#E67700",
              "#BA6A15",
              "#995F22",
              "#7F5529",
            ],
            success: [
              "#5C9382",
              "#4D8C79",
              "#3F8771",
              "#31826A",
              "#248064",
              "#167F5F",
              "#087F5B",
              "#12684E",
              "#185643",
              "#1B473A",
            ],
            light: [
              "#F7F7F7",
              "#E0E0E1",
              "#CBCBCD",
              "#B8B8BB",
              "#A6A7AB",
              "#95969A",
              "#86878B",
              "#797A7D",
              "#6D6E70",
              "#636364",
            ],
          },
          dir: "rtl",
          spacing: {
            xs: "2px",
            md: "10px",
            xl: "20px",
          },
          colorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
