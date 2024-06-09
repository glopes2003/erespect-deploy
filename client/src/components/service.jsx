import React from "react";
import { Link } from "react-router-dom";
import cybersafe from "../assets/cyberSafe.svg";

function Service() {
  return (
    <>
      <section id="servico">
        <div className="d-flex flex-row justify-content-evenly align-items-center mt-5 text-dark position-absoulute my-service ">
          <div>
            <img src={cybersafe} alt="" width={500}></img>
          </div>

          <div className="w-50 text-end">
            <h2 className="mt-5">Juntos por uma internet mais segura!</h2>
            <p className="text-dark mt-5">
              Nosso serviço permite que os usuários submetam seus casos de
              cyberbullying através de um formulário seguro. Nossa equipe
              especializada revisa cada caso e fornece uma análise detalhada,
              oferecendo recomendações personalizadas sobre os próximos passos a
              serem tomados. Garantimos total confidencialidade em relação às
              informações fornecidas e um suporte empático e compreensivo
              durante todo o processo.
            </p>
            <Link to={"/service"}>
              <button className="btn btn-dark my-service-btn w-25 mt-4">
                Vamos lá
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
