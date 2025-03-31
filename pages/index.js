import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>SAG eForm</title>
        <meta
          name="description"
          content="Enty Chile with no stress. Enjoy your holidays."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src="/gtm.js" strategy="beforeInteractive" />
      <noscript><iframe src="//http://www.googletagmanager.com/ns.html?id=GTM-5Z5G8PHK"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      <main>
        <div className="img-container">
          <Image src={"/flag.png"} width={90} height={55} alt="CL flag" />
        </div>
        <div className="backdrop"></div>
        <div className="content">
          <h1>SAG Chile Online Form</h1>
          <p>To complete the Chile Customs Affidavit, you need to fill out the online SAG Chile form. The online application is simple to complete. You need to fill out the online form with basic personal and travel information.  Start Online Application Form and get your SAG by email.</p>
          <div className="btn-wrapper">
            <a href="https://www.chile-onlineform.com/application">
              Start Application
            </a>
          </div>
          <p class="disclaimer">
            Legal Disclaimer: this site is not affiliated with the Government or its sponsors.
          </p>
        </div>
      </main>
    </>
  );
}
