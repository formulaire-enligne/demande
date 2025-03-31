import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Formulaire</title>
        <meta
          name="description"
          content="Enty uk with no stress. Enjoy your holidays."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/demande/favicon.ico" />
      </Head>
      {/* User http://localhost:3000/demande to watch the site */}
      <main>
        <div className="img-container">
          <Image src={"/demande/flag.png"} width={90} height={55} alt="UK flag" />
        </div>
        <div className="backdrop"></div>
        <div className="content">
          <h1>United Kingdom ETA</h1>
          <p>
            Les visiteurs qui prévoient de séjourner maximum 6 mois au
            Royaume-Uni peuvent demander leur United Kingdom ETA pour voyager
            dans le pays.
          </p>
          <p>
            Vous pouvez facilement obtenir votre United Kingdom ETA, ce qui
            simplifie la procédure d&rsquo;entrée au Royaume-Uni pour les visiteurs
            titulaires de l&rsquo;autorisation de voyage électronique.
          </p>
          <div className="btn-wrapper">
            <a href="https://www.uk-onlinetraveldoc.com/application">
              Demande en ligne
            </a>
          </div>
          <p class="disclaimer">
            Legal Mentions légales : le site n&apos;est pas affilié au gouvernement
            ni à ses partenaires officiels.
          </p>
        </div>
      </main>
    </>
  );
}
