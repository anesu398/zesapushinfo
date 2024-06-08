import Head from 'next/head';
import LoadsheddingStatus from '../components/LoadsheddingStatus';
import AreaSearch from '../components/AreaSearch';
import UpcomingEvents from '../components/UpcomingEvents';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZETDC Loadshedding Information</title>
        <meta name="description" content="ZETDC Loadshedding Information and Updates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">ZETDC Loadshedding Information</h1>
        <LoadsheddingStatus />
        <AreaSearch />
        <UpcomingEvents />
      </main>
    </div>
  );
}
