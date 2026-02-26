import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CouplePhoto from "../components/CouplePhoto";
import Venue from "../components/Venue";
import Details from "../components/Details";
import Travel from "../components/Travel";
import Faq from "../components/Faq";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CouplePhoto />
        <Venue />
        <Details />
        <Travel />
        <Faq />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
