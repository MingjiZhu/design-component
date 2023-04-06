import Head from "next/head";
import { useState } from "react";
import { CustomDaisyUIButton } from "ui";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center py-2"
      data-theme={theme}
    >
      <Head>
        <title>daisyUI</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
          daisyUI
        </h1>
        <div className="mt-5 mb-5 space-x-2 text-center">
          <text>Your system color scheme is light</text>
        </div>
        <div className="text-center">
          <label className="">
            <span className="label-text">
              Turn {theme === "dark" ? "off" : "on"} dark mode
            </span>
            <input type="checkbox" className="toggle" onClick={toggleTheme} />
          </label>
        </div>

        <text>Responsive Button</text>
        <div className="mt-2 mb-5 space-x-2">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-0 bg-error">
            Responsive button
          </button>
        </div>
        {/* bg-primary or bg-seconry would not work in this responsive buttton classname */}

        <text>Custom Button</text>
        <div className="mt-2 mb-5 space-x-2">
          <CustomDaisyUIButton title="test" className="bg-pink border-0" />
          <CustomDaisyUIButton title="test" color="success" />
        </div>
        <text>Original Buttons</text>
        <div className="mt-2 space-x-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-error">Danger</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Light</button>
        </div>
        <div className="mt-2 space-x-2">
          <button className="btn btn-lg">Large</button>
          <button className="btn">Normal</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-xs">Tiny</button>
        </div>
        <div className="mt-2 space-x-2">
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-error">Danger</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button className="btn btn-outline btn-info">Light</button>
        </div>
      </main>
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You have been selected for a chance to get one year of subscription
            to use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
}
