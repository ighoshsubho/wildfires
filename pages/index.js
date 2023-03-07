import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home({ exploreData }) {
  let router = useRouter();

  const logout = () => {
    sessionStorage.removeItem("Token");
    router.push("/loggedIn");
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (!token) {
      router.push("/loggedIn");
    }
  }, []);
  return (
    <div className="">
      <Head>
        <title>wildfire-detector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Ongoing WildFires..</h2>
          {/* {pull the locations from API} */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const exploreData = [
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];
  return {
    props: {
      exploreData,
    },
  };
}
