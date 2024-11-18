import React from "react";
import HomeTwo from "../src/home/home";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web."
        />
        <meta
          property="og:title"
          content="Neitrys Barrera - Practicas de programación"
        />
        <meta
          property="og:description"
          content="Esto es una practica de desarrollo guiada por Neitrys Barrera."
        />
      </Head>    
      <HomeTwo />
    </>
  );
}
