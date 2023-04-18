## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Chakra

### Pros

- built-in support for responsive styling, can use either the arrary or object notation to set responsive styles
- can change light and dark color with `useColorModeValue`
- for responsive styles, can add nested styles throughout the code instead of manually adding @media queries

### Cons

- import { useColorMode } from '@chakra-ui/color-mode' is not working
  import { useColorMode } from "@chakra-ui/react" works
- Chakra UI uses CSS-in-JS under the hood ( emotion + styled-system), slow runtime when the app deals with high, frequently changing data. Suits for small or medium data-driven application.
- button colorScheme is not working with color.number
- custom components need to have props written, otherwise by just passing props when using custom button is not going to work. For example, I had to write mr={proprs.mr} in order to make mr property in `<CustomButton>` work
- button does not have xl size
- Chakra does not have enough hooks like Mantine does. Mantine has hooks for auto scroll, debounced, operating system, Chakra doesn't have any of those.

### Experience

- RESPONSIVE: Chakra UI provides default breakpoints. Can customize it with extendTheme if needed
- SPACING: can set spacking in extendTheme
- COLOR: can set theme color with shades
- CUSTOMIZE: can set modal not be closed by click outside by setting `closeOnOverlayClick` to false
- THEME: can set theme color with extendTheme
