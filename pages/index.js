import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";

// queryBrake
export default function Home({ exploreData, cardsData }) {
  // then dont used props.exloreData

  return (
    <div>
      <head>
        <title>
          CLONE Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </head>
      <Header />
      <Banner />
      {/* main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          {/* Explore Nearby */}
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull some data from a server - API endpoints */}
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        {/* Live Anywhere */}
        <section>
          <div className="flex items-center py-8">
            <div className="flex-grow text-4xl font-semibold">
              <h2>Live Anywhere</h2>
            </div>
            <div className="flex items-center space-x-4 justify-end">
              <button
                className="hover:scale-110 transition duration-200"
                onClick={handleClickLeft}
              >
                <ArrowCircleLeftIcon className="h-8" />
              </button>
              <button
                className="hover:scale-110 transition duration-200"
                onClick={handleClickRight}
              >
                <ArrowCircleRightIcon className="h-8" />
              </button>
            </div>
          </div>
          <div
            id="cardcontainer"
            className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 scroll-smooth"
          >
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* large card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspied"
        />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );

  //scroll button fucntion
  function handleClickLeft() {
    if (process.browser) {
      document.getElementById("cardcontainer").scrollLeft -= 200;
    }
  }

  function handleClickRight() {
    if (process.browser) {
      document.getElementById("cardcontainer").scrollLeft += 200;
    }
  }
}
// ssr
export async function getStaticProps() {
  // json information
  // have image, location, distance
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
