import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://mika-jet.lrnecgysiam.com/"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content="mika-jet"></meta>
            <meta property="og:description" content="A Personal blog on Web, Personal, and cultural Development"></meta>
            <meta property="og:image" content="https://github.com/lrnecgcysiam/next-netlify-starter/blob/main/public/mika.shinnouske.minase.jpg"></meta>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          {/* Get started by editing <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
