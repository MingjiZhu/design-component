import Head from "next/head";
import { Button, Card, Text, Grid, Row, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NextUI</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
          NextUI
        </h1>
        <div>
          <Input placeholder="Next UI" />
          {/* NetUI button style is not working with tailwind */}
          <Button>Broken Button with tailwind</Button>
          <Button
            auto
            css={{
              borderRadius: "$xs", // radii.xs
              border: "$space$1 solid transparent",
              background: "$pink800", // colors.pink800
              color: "$pink100",
              height: "$12", // space[12]
              boxShadow: "$md", // shadows.md
              "&:hover": {
                background: "$pink100",
                color: "$pink800",
              },
              "&:active": {
                background: "$pink200",
              },
              "&:focus": {
                borderColor: "$pink400",
              },
            }}
          >
            NextUI GitHub
          </Button>
        </div>
        <Card css={{ mw: "400px" }}>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
        <Grid.Container gap={2}>
          <Grid sm={12} md={5}>
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
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
      </main>
    </div>
  );
}
