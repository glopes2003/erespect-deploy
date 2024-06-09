import React from "react";
import feedback from "../assets/feedback.svg";

const FeedbackForm = () => {
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
              <form>
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
                    className="form-control w-75 text-box"
                    placeholder="Feedback"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger w-75"
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
      </div>
    </>
  );
};

export default FeedbackForm;
