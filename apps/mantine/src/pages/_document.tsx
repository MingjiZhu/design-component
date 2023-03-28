import { createGetInitialProps } from '@mantine/next';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyles, createStylesServer } from '@mantine/next';
import { rtlCache } from '../../rtl-cache';

const stylesServer = createStylesServer(rtlCache);

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }

  render() {
    return (
      <Html className="bg-zinc-900">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
