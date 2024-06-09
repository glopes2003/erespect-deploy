import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import psi from "../assets/psi.svg";
import psi1 from "../assets/psi1.svg";
import psi2 from "../assets/psi2.svg";
import psi3 from "../assets/psi3.svg";

import adv from "../assets/adv.svg";
import adv1 from "../assets/adv1.svg";
import adv2 from "../assets/adv2.svg";
import adv3 from "../assets/adv3.svg";

import links from "../assets/links.svg";
import link1 from "../assets/link1.svg";
import link2 from "../assets/link2.svg";
import link3 from "../assets/link3.svg";

function Contatos() {
  const [showModal, setShowModal] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const handleShow = (member) => {
    setCurrentMember(member);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentMember(null); // Reset currentMember when modal is closed
  };

  const contacts = [
    {
      category: "Psicólogos",
      image: psi,
      members: [
        { name: "Adriana Lima", phone: "55+ (81) 98874-5555", image: psi1 },
        { name: "Matheus Cavalcanti", phone: "55+ (81) 99556-9887", image: psi2 },
        { name: "Márcia Pereira", phone: "55+ (81) 99764-3442", image: psi3 },
      ],
    },
    {
      category: "Advogados",
      image: adv,
      members: [
        { name: "Lucas Macedo", phone: "55+ (81) 99875-8862", image: adv1 },
        { name: "Sim Eun-seok", phone: "55+ (81) 98742-9982", image: adv2 },
        { name: "Ricardo Almeida", phone: "55+ (81) 99886-1010", image: adv3 },
      ],
    },
    {
      category: "Links Úteis",
      image: links,
      members: [
        { name: "Disque 100", phone: "100", image: link1 },
        { name: "Helpline da Safernet", image: link2 },
        { name: "App Proteja Brasil", image: link3 },
      ],
    },
  ];

  return (
    <section id="contatos">
      <div className="text-dark my-contacts d-flex flex-column justify-content-evenly align-items-center">
        <div className="text-start mt-5 w-75">
          <h2 className="mb-5">Encontre aqui a assistência que você procura:</h2>
          <div className="row align-items-start">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="card col border border-0 me-4 pb-4 px-0 my-card"
                style={{ width: "18rem" }}
              >
                <img
                  src={contact.image}
                  className="card-img-top object-fit-fill"
                  alt={contact.category}
                />
                <div className="card-body">
                  <span className="badge rounded-pill px-3 py-2 my-pill">{contact.category}</span>
                </div>
                <ul className="list-group list-group-flush p-2">
                  {contact.members.map((member, idx) => (
                    <li key={idx} className="list-group-item d-flex flex-row">
                      <div className="py-2">
                        <img className="list-img" src={member.image} alt={member.name} />
                        <p className="d-flex flex-column justify-content-evenly align-items-start my-card-p">
                          {member.name}
                          {member.phone && <p>{member.phone}</p>}
                        </p>
                        {member.name === "Disque 100" ? (
                          <a
                            className="btn btn-warning position-absolute border-0 rounded-pill my-card-btn text-light"
                            href={`tel:${member.phone}`}
                            role="button"
                          >
                            <i className="bi bi-telephone"></i>
                          </a>
                        ) : member.name === "Helpline da Safernet" ? (
                          <a
                            className="btn btn-warning position-absolute border-0 rounded-pill my-card-btn text-light"
                            href="https://new.safernet.org.br/helpline?gad_source=1&gclid=CjwKCAjwgpCzBhBhEiwAOSQWQa95hw6dTOkPwdk8zW8ryBxi79PUzPsr8AK8Q-IOBjHgCbO1K2rqyxoC5QsQAvD_BwE"
                            role="button"
                          >
                            <i className="bi bi-link"></i>
                          </a>
                        ) : member.name === "App Proteja Brasil" ? (
                          <a
                            className="btn btn-warning position-absolute border-0 rounded-pill my-card-btn text-light"
                            href="https://www.protejabrasil.com.br/br/"
                            role="button"
                          >
                            <i className="bi bi-link"></i>
                          </a>
                        ) : (
                          <a
                            className="btn btn-warning position-absolute border-0 rounded-pill my-card-btn text-light"
                            href="#"
                            role="button"
                            onClick={() => handleShow(member)}
                          >
                            <i className="bi bi-envelope"></i>
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-medium fs-4 w-75">Entre em contato com {currentMember && currentMember.name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentMember && (
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  type="textarea"
                  as="textarea"
                  rows={5}
                  placeholder="Mensagem"
                />
              </Form.Group>
              <Button className="btn btn-danger w-50 contacts-form-btn" type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Contatos;
