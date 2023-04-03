import {
  Button as MantineButton,
  Card,
  Center,
  createStyles,
  Grid,
  Group,
  Switch,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  useDebouncedState,
  useOs,
  useScrollIntoView,
  useViewportSize,
} from "@mantine/hooks";
import {
  IconArrowDown,
  IconHanger,
  IconNotification,
  IconPlayCard,
} from "@tabler/icons-react";
import Head from "next/head";
import { CustomMantineButton } from "ui";

const useStyles = createStyles((theme) => {
  return {
    tabTitle: {
      margin: theme.spacing.md,
    },
    responsiveButton: {
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        background: "green",
        fontSize: theme.fontSizes.xs,
        width: "120px",
        height: "25px",
      },
      [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
        background: "purple",
        fontSize: theme.fontSizes.md,
        width: "200px",
        height: "30px",
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        background: "pink",
        fontSize: theme.fontSizes.lg,
        width: "300px",
        height: "50px",
      },
    },
  };
});

export default function Home() {
  const os = useOs();
  const theme = useMantineTheme();

  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { width } = useViewportSize();

  const [value, setValue] = useDebouncedState("", 200);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mantine</title>
      </Head>

      <main className="mx-auto w-auto px-4 mt-10 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight dark:text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Mantine
        </h1>
        <Grid mt="lg" grow>
          <Grid.Col span={8}>
            {/* can add classname on Mantine Components but does not work/support most classes*/}
            <Text
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz="xl"
              fw={700}
              className="ml-2"
            >
              Your system color scheme is {colorScheme}
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Switch
              label={`Turn ${
                colorScheme === "dark" ? "off dark" : "on dark"
              } mode`}
              onChange={() => {
                toggleColorScheme();
              }}
              className="mt-2"
            />
          </Grid.Col>
        </Grid>

        {/* 
          Note, there can only pass code color, when hover, 
          theme.fn.darken in this component will result black color when using color scheme
          */}
        <div className="text-center m-5">
          <MantineButton
            variant="light"
            leftIcon={
              <ThemeIcon
                size="lg"
                variant="gradient"
                gradient={{ from: "teal", to: "lime", deg: 105 }}
                m="lg"
              >
                <IconArrowDown size="1rem" />
              </ThemeIcon>
            }
            onClick={() =>
              scrollIntoView({
                alignment: "end",
              })
            }
          >
            Scroll to Card
          </MantineButton>
        </div>
        <Title order={5} mt="lg" mb="md">
          Responsive Button
        </Title>
        <MantineButton className={cx(classes.responsiveButton)}>{`${
          width < Number(theme.breakpoints.xs) ? "Small" : "Big"
        } Button`}</MantineButton>
        <Title order={5} mt="lg" mb="md">
          Custom Buttons
        </Title>
        <CustomMantineButton title="order" />
        <CustomMantineButton title="product" bg="#0ca678" />

        <Title order={5} mt="lg">
          Original Buttons
        </Title>
        <Group mt="lg">
          <MantineButton color="primary">Primary</MantineButton>
          <MantineButton color="secondary">Secondary</MantineButton>
          <MantineButton color="danger">Danger</MantineButton>
          <MantineButton color="warning">Warning</MantineButton>
          <MantineButton color="success">Success</MantineButton>
          <MantineButton color="light">Light</MantineButton>
        </Group>
        <Group mt="lg">
          <MantineButton size="xs">xs</MantineButton>
          <MantineButton size="sm">sm</MantineButton>
          <MantineButton size="md">md</MantineButton>
          <MantineButton size="lg">lg</MantineButton>
          <MantineButton size="xl">xl</MantineButton>
        </Group>
        <Group mt="lg">
          <MantineButton color="blue.8" variant="outline">
            Primary
          </MantineButton>
          <MantineButton color="indigo.4" variant="outline">
            Secondary
          </MantineButton>
          <MantineButton color="orange.9" variant="outline">
            Danger
          </MantineButton>
          <MantineButton color="yellow.9" variant="outline">
            Warning
          </MantineButton>
          <MantineButton color="teal.9" variant="outline">
            Success
          </MantineButton>
          <MantineButton color="dark.1" variant="outline">
            Light
          </MantineButton>
        </Group>
        <Tabs
          variant="pills"
          defaultValue="gallery"
          mt="lg"
          color="teal.9"
          ref={targetRef}
        >
          <Tabs.List>
            <Tabs.Tab value="card" icon={<IconPlayCard size="1rem" />}>
              <Title order={5} className={cx(classes.tabTitle)}>
                Custom Card
              </Title>
            </Tabs.Tab>

            <Tabs.Tab value="os" icon={<IconNotification size="1rem" />}>
              <Title order={5} className={cx(classes.tabTitle)}>
                Your OS
              </Title>
            </Tabs.Tab>

            <Tabs.Tab value="hooks" icon={<IconHanger size="1rem" />}>
              <Title order={5} className={cx(classes.tabTitle)}>
                Mantine Hooks
              </Title>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="card">
            <Card
              mt="lg"
              shadow="sm"
              radius="md"
              withBorder
              sx={(theme) => ({
                width: "300px",
                height: "100px",
                backgroundImage: theme.fn.gradient(),
                color: theme.white,
              })}
            >
              <Title order={6}>Mantine custom card</Title>
              <Center maw={200} h={60} mx="auto">
                <div>All elements inside Center are centered</div>
              </Center>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="os">
            <Text m="md" fw={500}>
              Your os is <b>{os}</b>
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="hooks">
            <>
              <TextInput
                label="Enter value to see debounce effect"
                defaultValue={value}
                onChange={(event) => setValue(event.currentTarget.value)}
              />
              <Text>Debounced value: {value}</Text>
            </>
          </Tabs.Panel>
        </Tabs>
      </main>
    </div>
  );
}
