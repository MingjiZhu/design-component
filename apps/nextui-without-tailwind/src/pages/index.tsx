import { useState } from "react";
import Head from "next/head";
import {
  Button,
  Card,
  Text,
  Grid,
  Row,
  Input,
  Container,
  Modal,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { CustomNextUIButton } from "./CustomNextUIButton";
import { useTheme as useNextTheme } from "next-themes";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Head>
        <title>NextUI</title>
      </Head>

      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Text h1>NextUI</Text>
        <div>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </div>
        <div>
          <Input placeholder="Next UI" />
          {/* NetUI button style is not working with tailwind */}
          <Button css={{ mw: "400px", marginTop: "$3" }}>
            Broken Button with tailwind
          </Button>
          <CustomNextUIButton title="product" />
          <CustomNextUIButton bg="$green600" title="order" />
        </div>
        <Card css={{ mw: "400px", marginTop: "$5" }}>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>

        <div>
          <Grid.Container gap={8}>
            <Grid sm={12} md={6}>
              <Card css={{ mw: "330px" }}>
                <Card.Header>
                  <Text b>Card Title</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                  <Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Row justify="flex-end">
                    <Button size="sm" light>
                      Cancel
                    </Button>
                    <Button size="sm">Agree</Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={12} md={5}>
              <Card css={{ mw: "330px" }}>
                <Card.Header>
                  <Text b>Card Title</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                  <Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Row justify="flex-end">
                    <Button size="sm" light>
                      Share
                    </Button>
                    <Button size="sm" color="secondary">
                      Learn more
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </div>
        <div>
          <Grid.Container gap={2}>
            <Grid>
              <Button shadow color="primary" auto>
                Primary
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="secondary" auto>
                Secondary
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="success" auto>
                Success
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="warning" auto>
                Warning
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="error" auto>
                Error
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="gradient" auto>
                Gradient
              </Button>
            </Grid>
          </Grid.Container>
        </div>
        <div>
          {/* type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl"; */}
          <Grid.Container gap={2}>
            <Grid>
              <Button color="primary" auto size="xs">
                XS
              </Button>
            </Grid>
            <Grid>
              <Button color="primary" auto size="sm">
                SM
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="primary" auto size="md">
                MD
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="primary" auto size="lg">
                LG
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="primary" auto size="xl">
                XL
              </Button>
            </Grid>
          </Grid.Container>
        </div>
        <div>
          <Grid.Container gap={2}>
            <Grid>
              <Button bordered color="primary" auto>
                Primary
              </Button>
            </Grid>
            <Grid>
              <Button bordered color="secondary" auto>
                Secondary
              </Button>
            </Grid>
            <Grid>
              <Button bordered color="success" auto>
                Success
              </Button>
            </Grid>
            <Grid>
              <Button bordered color="warning" auto>
                Warning
              </Button>
            </Grid>
            <Grid>
              <Button bordered color="error" auto>
                Error
              </Button>
            </Grid>
            <Grid>
              <Button bordered color="gradient" auto>
                Gradient
              </Button>
            </Grid>
          </Grid.Container>
        </div>
        <div>
          <Button auto ghost color="error" onPress={handler}>
            Open modal
          </Button>
          <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Welcome to
                <Text b size={18}>
                  NextUI
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text>Can't close it by clicking outside </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandler}>
                Close
              </Button>
              <Button auto onPress={closeHandler}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
