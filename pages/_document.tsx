import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body className='font-raleway'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
