import React from "react";
import WelcomeCard from "../components/welcomeCard";
import Legislacao from "../components/legislacao";
import Service from "../components/service";
import Contatos from "../components/contatos";
import Footer from "../components/footer";

function MainPage() {
  return (
    <>
      <WelcomeCard />
      <Legislacao />
      <Service />
      <Contatos />
      <Footer />
    </>
  );
}

export default MainPage;
