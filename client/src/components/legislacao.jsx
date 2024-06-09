import React from "react";
import judge from "../assets/judge.svg";

function Legislacao() {
  return (
    <>
      <section id="legislacao">
        <div className="d-flex flex-row justify-content-center align-items-center pb-5 text-dark legislacao">
          <div className="d-flex flex-column w-50">
            <h2 className="mt-5">A lei está do seu lado!</h2>
            <p className="text-dark w-75 mt-5">
              No cenário digital, a proteção de crianças e adolescentes contra o
              cyberbullying é uma prioridade. Para enfrentar esse desafio, o
              Brasil conta com leis e regulamentações específicas, onde cada uma
              desempenha um papel fundamental na prevenção e punição desses
              atos.
            </p>
            <a href="https://abraceprogramaspreventivos.com.br/o-que-diz-a-lei-13-185-2015-combate-a-intimidacao-sistematica-bullying/">
              -&#62; Lei Antibullying (Lei 13.185/2015)
            </a>
            <a href="https://www.projuris.com.br/blog/lei-carolina-dieckman-tudo-o-que-voce-precisa-saber-sobre/#:~:text=A%20Lei%2012.737%2F2012%2C%20tamb%C3%A9m,154%2DA.">
              -&#62; Lei Carolina Dieckmann/Lei de Crimes Cibernéticos (Lei
              12.737/2012)
            </a>
            <a href="https://www.aurum.com.br/blog/marco-civil-da-internet/">
              -&#62; Marco Civil da Internet (Lei 12.965/2014)
            </a>
            <p>-&#62; Estatuto da Criança e do Adolescente (ECA)</p>
            <p>-&#62; Código Penal Brasileiro</p>
          </div>
          <div>
            <img className="balance-img" src={judge} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Legislacao;
