## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## daisyUI

### Pros

- it leverates all the tailwind classes
- styles can be customized with additional tailwind classes

### Cons

- slow to show updates in the page when add new components
- sometimes it is buggy, it shows bug but refresh page couple times then the error will disappear
- adding color theme is limited with the limited color names options from the list of daisyUI color names
- no hooks
- react-daisyUI is still new and buggy

### Experience

- tried to use `Modal` in react-daisyUI was not working as expected
- responsive size can be set through tailwind classes but not as simple as mantine or chakra to set responsive background color.
- since it doesn't have hooks, for toggle theme, detect operation system, ect,. functions are not ready to use. Need to write them yourself.
