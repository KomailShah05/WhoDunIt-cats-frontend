//libraries
import React from "react";

//styles
import "./index.css";

//image imports
import HowToExport from "../../../assets/images/how-to-export.svg";
import Underline from "../../../assets/images/under-line.svg";

const HowItWorks = () => {
  return (
    <section id="HowItWorks">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-4  d-flex justify-content-center">
            <img src={HowToExport} alt="HowToExport" />
          </div>
          <div className="col-8 align-self-center ">
            <h2 className="text-white">How it works?</h2>
            <img className="underline" src={Underline} alt="Underline" />
            <p className="working-text">
              Neque orci dui, sit libero diam magnis nunc et. Molestie diam
              gravida suspendisse hac aliquam elit. Et turpis placerat non
              turpis dui. Egestas elit nibh in eros dictum. Odio feugiat amet,
              diam eget cursus. Nec, vivamus arcu, amet leo aliquam aenean
              egestas. <br /> Risus elit, et id rhoncus leo lectus nisl molestie
              consectetur. Mi, suspendisse lectus consectetur at. Aenean dolor,
              risus, fermentum sem. Nec quam egestas orci, eleifend ac commodo.
              Leo ornare posuere mauris vestibulum bibendum ante. Nulla at
              maecenas euismod et consequat nibh. Sit faucibus amet, vitae
              gravida id lectus quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
