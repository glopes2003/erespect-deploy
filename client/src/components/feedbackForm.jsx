/* global bootstrap */

import React, { useRef, useState } from "react";
import axios from "axios";
import feedback from "../assets/feedback.svg";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const ref = useRef();
  const [textArea, setTextArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.email.value) {
      return toast.warn("Preencha todos os campos!");
    } else {
      await axios
        .post("https://erespect-back.vercel.app/feedback", {
          nome: user.nome.value,
          email: user.email.value,
          feedback: user.feedback.value,
        })
        .then(({ data }) => {
          toast.success("Feedback enviado com sucesso!");
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
    setTextArea("");
  };

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <>
      <div className="p-4 ms-5">
        <header>
          <h1 className="text-center mb-5">eRespect</h1>
        </header>
        <div className="d-flex flex-row justify-center align-items-center p-5">
          <section className="w-75">
            <h1 className="w-75">
              Seu feedback é muito importante para nós :&#41;
            </h1>
            <div>
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="mb-3 w-75 mt-4">
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Nome"
                  />
                </div>
                <div className="mb-3 w-75">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="exampleInputText1"
                    name="feedback"
                    className="form-control w-75 text-box"
                    placeholder="Feedback"
                    value={textArea}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger w-75 feedback-form-btn"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </section>
          <section className="w-75 mt-4">
            <img src={feedback} alt="service-ilustrational" width={520}/>
          </section>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog position-absolute top-50 start-50 translate-middle">
            <div className="modal-content">
              <div className="modal-header d-flex flex-column justify-center align-items-center">
                <h1 className="modal-title fs-4" id="exampleModalLabel">
                  Obrigado(a)!
                </h1>
              </div>
              <div className="modal-body text-center">
                Agradecemos seu feedback!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
