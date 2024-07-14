/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./dashboard.css";

// constants
import Constants from "../../constants/constants";
import Card from "../../components/Card/card";
import Reports from "../../components/Reports/report";

function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${Constants.baseURL}/${Constants.endpoints.cards}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards &&
              cards.length > 0 &&
              cards.map((item) => <Card key={item._id} card={item} />)}
          </div>
        </div>

        <div className="col-lg-12">
          <Reports />
        </div>

        <div className="col-lg-4"></div>
      </div>
    </section>
  );
}

export default Dashboard;
