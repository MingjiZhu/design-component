import Button from './components/button'

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
}

export default extendTheme(overrides)