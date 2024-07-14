/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./card.css";

function Card({ card }) {
  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card info-card sales-card">
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
              <h6>
                {card.name == "Revenue"
                  ? "$" + card.amount.toLocaleString("en-us")
                  : card.amount.toLocaleString("en-us")}
              </h6>

              <span
                className={`${
                  card.percentage > 0 ? "text-success" : "text-danger"
                } small pt-1 fw-bold`}
              >
                {card.percentage > 0
                  ? card.percentage * 100
                  : -card.percentage * 100}
              </span>

              <span className="text-muted small pt-2 ps-1">
                {card.percentage > 0 ? "increase" : "decrease"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
