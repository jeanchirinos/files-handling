import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      <title>Manejo de archivos</title>
      <meta
        name="description"
        content="Aplicación para organizar envíos de correos con archivos según un peso máximo"
      />
    </Head>
  );
}
