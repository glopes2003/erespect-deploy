/* global bootstrap */

import React, { useRef, useState } from "react";
import axios from "axios";
import serviceForm from "../assets/service-form.svg";
import verified from "../assets/verified.svg";
import { toast } from "react-toastify";

const ServiceFormPage = () => {
  const ref = useRef();
  const [textArea, setTextArea] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.relacao.value
    ) {
      return toast.warn("Preencha todos os campos!");
    } else {
      await axios
        .post("https://erespect-back.vercel.app/user", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          relacao: user.relacao.value,
        })
        .then(({ data }) => {
          toast.success("Usuário criado com sucesso!");
          setShowModal(true);
          const modal = new bootstrap.Modal(
            document.getElementById("exampleModal")
          );
          modal.show();
        })
        .catch((error) => {
          const errorMessage = error.response ? error.response.data.error : "Erro desconhecido";
          toast.error(errorMessage);
        });
    }

    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";
    user.relacao.value = "";
    setTextArea("");
    setCheckbox1(false);
    setCheckbox2(false);
  };

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <>
      <div className="p-4">
        <header>
          <h1 className="text-center">eRespect</h1>
        </header>
        <div className="d-flex flex-collumn justify-center align-items-center p-5">
          <section className="w-50">
            <h1 className="w-50">Será um prazer lhe ajudar!</h1>
            <div>
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="mb-3 w-50 mt-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="mb-3 w-50">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email@email.com"
                  />
                </div>
                <div className="mb-3 w-50">
                  <label
                    htmlFor="exampleInputTelephone1"
                    className="form-label"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    className="form-control"
                    id="exampleInputTelephone1"
                    placeholder="5581912341234"
                  />
                </div>
                <div className="mb-3 d-flex justify-center align-items-center">
                  <label
                    htmlFor="exampleInputRelation1"
                    className="form-label position-absolute"
                  >
                    Relação com o caso:
                  </label>
                  <select
                    id="exampleInputRelation1"
                    className="p-2 options"
                    name="relacao"
                  >
                    <option value="Familiar">Familiar</option>
                    <option value="Amigo">Amigo</option>
                    <option value="Vítima">Vítima</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputTextl1" className="form-label">
                    Detalhes
                  </label>
                  <textarea
                    id="exampleInputText1"
                    className="form-control w-75 text-box"
                    placeholder="Detalhes do caso(Ex: onde ocorreu (instagram, discord, fóruns online...), medidas tomadas até o momento...)"
                    value={textArea}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3 d-flex justify-center align-items-center">
                  <label
                    htmlFor="exampleInputAttachment1"
                    className="position-absolute"
                  >
                    Anexo:
                  </label>
                  <input
                    type="file"
                    className="form-control attachment"
                    id="exampleInputAttachment1"
                  ></input>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={checkbox1}
                    onChange={(e) => setCheckbox1(e.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Autorizo o uso dessas informações
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    checked={checkbox2}
                    onChange={(e) => setCheckbox2(e.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Autorizo o contato com as autoridades para a busca de
                    soluções legais
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger position-absolute end-0 me-5"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </section>
          <div
            className={`modal fade ${showModal ? "show" : ""}`}
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog position-absolute top-50 start-50 translate-middle ">
              <div className="modal-content ">
                <div className="modal-header d-flex flex-column justify-center align-items-center">
                  <img
                    src={verified}
                    alt="verified"
                    width={60}
                    height={60}
                    className="mb-2"
                  />
                  <h1 className="modal-title fs-4" id="exampleModalLabel">
                    Obrigado!
                  </h1>
                </div>
                <div className="modal-body text-center">
                  Nossa equipe entrará em contato através do seu email o mais
                  breve possível!
                </div>
              </div>
            </div>
          </div>
          <section className="w-50">
            <img src={serviceForm} alt="service-ilustrational" />
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceFormPage;
