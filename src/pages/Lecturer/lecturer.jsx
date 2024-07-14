import React, { useState, useEffect } from "react";
import "./course.css";
import PageTitle from "../../components/PageTitle/PageTitle";

// services
import LecturerService from "../../services/lecturerService";

export default function Lecturer() {
  const [data, setData] = useState([]);

  const LecturerTableRow = (course) => {
    const { item } = course;
    return (
      <tr>
        <td>{item.regId}</td>
        <td>{item.name}</td>
      </tr>
    );
  };
  return (
    <>
      <PageTitle page="Students" />

      <div className="card top-selling overflow-auto">
        <div className="card-body bp-0">
          <div className="d-flex d-row justify-content-between pb-10">
            <h5 className="card-title">All courses</h5>
          </div>

          <table className="table table-borderless">
            <thead className="table-light">
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                  <LecturerTableRow key={index} item={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
