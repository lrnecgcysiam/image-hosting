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
            <meta property="og:image" content="https://avatars.githubusercontent.com/u/6336862?s=400&u=a0e9b57d02118d67fddd5947113a8fa01dcca55e&v=4"></meta>
      
            {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:domain" content="lrnecgysiam.com"></meta>
                <meta property="twitter:url" content="https://mika-jet.lrnecgysiam.com/"></meta>
                <meta name="twitter:title" content="Mika-Jet"></meta>
                <meta name="twitter:description" content="A Personal blog on Web, Personal, and cultural Development"></meta>
                <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/88948670?s=400&u=37177928f43cd41c701284b1eae589f9235e768a&v=4"></meta>
      
      
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
