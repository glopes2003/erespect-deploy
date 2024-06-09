import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="">
        <div className="d-flex flex-row justify-content-evenly align-items-center text-white fs-4 my-footer">
          <div className="my-footer-container">
            <h2 className="mb-5">eRespect</h2>
            <p className="w-25 my-5">
              Para melhorar o nosso site e atender as suas expectativas,
              ficaríamos gratos em receber a sua opinião. Não demora nada e
              ainda nos ajuda bastante :&#41;
            </p>
            <div>
              <Link to={"/feedback"}>
              <button type="button" class="btn btn-dark my-footer-btn">
                DEIXE A SUA : &#41;
              </button>
              </Link>
            </div>
            <div className="mt-5 fs-5">
              <p>Copyright &#169; 2024 eRespect | All rights reserved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
