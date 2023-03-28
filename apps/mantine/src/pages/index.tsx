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
} from "@mantine/core";
import { useDebouncedState, useOs, useScrollIntoView } from "@mantine/hooks";
import {
  IconArrowDown,
  IconHanger,
  IconNotification,
  IconPlayCard,
} from "@tabler/icons-react";
import Head from "next/head";
import { CustomButton } from "ui";

const useStyles = createStyles((theme) => {
  return {
    title: {
      margin: theme.spacing.md,
    },
  };
});

export default function Home() {
  const os = useOs();

  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const [value, setValue] = useDebouncedState("", 200);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mantine Explore</title>
      </Head>

      <main className="mx-auto w-auto px-4 mt-10 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight dark:text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Mantine Explore
        </h1>
        <Grid mt="lg" grow>
          <Grid.Col span={8}>
            {/* can add classname on Mantine Components */}
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

        <div className="text-center mt-4">
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
        <Title className={cx(classes.title)} order={5}>
          Custom Buttons
        </Title>
        <Group>
          <CustomButton intent="primary">Primary</CustomButton>
          <CustomButton intent="secondary">Secondary</CustomButton>
          <CustomButton intent="danger">Danger</CustomButton>
          <CustomButton intent="warning">Warning</CustomButton>
          <CustomButton intent="success">Success</CustomButton>
          <CustomButton intent="light">Light</CustomButton>
        </Group>
        <Group mt="lg">
          <CustomButton size="xs">xs</CustomButton>
          <CustomButton size="sm">sm</CustomButton>
          <CustomButton size="md">md</CustomButton>
          <CustomButton size="lg">lg</CustomButton>
          <CustomButton size="xl">xl</CustomButton>
        </Group>
        <Group mt="lg">
          <CustomButton intent="primary" variant="outline">
            Primary
          </CustomButton>
          <CustomButton intent="secondary" variant="outline">
            Secondary
          </CustomButton>
          <CustomButton intent="danger" variant="outline">
            Danger
          </CustomButton>
          <CustomButton intent="warning" variant="outline">
            Warning
          </CustomButton>
          <CustomButton intent="success" variant="outline">
            Success
          </CustomButton>
          <CustomButton intent="light" variant="outline">
            Light
          </CustomButton>
        </Group>
        <Title className={cx(classes.title)} order={5}>
          Original Buttons
        </Title>
        <Group>
          <MantineButton color="blue.8">Primary</MantineButton>
          <MantineButton color="indigo.4">Secondary</MantineButton>
          <MantineButton color="orange.9">Danger</MantineButton>
          <MantineButton color="yellow.9">Warning</MantineButton>
          <MantineButton color="teal.9">Success</MantineButton>
          <MantineButton color="dark.1">Light</MantineButton>
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
              <Title order={4} className={cx(classes.title)}>
                Custom Card
              </Title>
            </Tabs.Tab>

            <Tabs.Tab value="os" icon={<IconNotification size="1rem" />}>
              <Title order={4} className={cx(classes.title)}>
                Your OS
              </Title>
            </Tabs.Tab>

            <Tabs.Tab value="hooks" icon={<IconHanger size="1rem" />}>
              <Title order={4} className={cx(classes.title)}>
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
