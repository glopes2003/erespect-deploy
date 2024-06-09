import React from "react";
import Navbar from "./navbar";

function welcomeCard() {
  return (
    <>
      <section id="sobreNos" className="my-welcome">
        <Navbar />
        <div className="d-flex flex-column justify-center align-items-center">
          <div className="w-50 text-center text-light my-welcome-container">
            <h2 className=" mb-5">Bem Vindo!</h2>
            <p>
              Olá, como vai? Bem vindo (a) ao eRespect, um site de viés social
              com o intuito de fornecer conhecimento e acesso a soluções em
              conformidade com a legislação brasileira para combater o
              cyberbullying, uma prática cada vez mais comum na sociedade
              digital. Com acesso à informação, apoio mútuo, prevenção e
              respeito à legislação, nosso site busca desempenhar um papel
              significativo na promoção da justiça e no combate ao
              cyberbullying.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default welcomeCard;
