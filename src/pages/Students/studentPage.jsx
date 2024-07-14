import React, { useState, useEffect } from "react";
import "./studentPage.css";
import Modal from "react-modal";

// services
import StudentService from "../../services/studentService";
import PageTitle from "../../components/PageTitle/PageTitle";

const StudentPage = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await StudentService.getAllStudents();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  const StudentTableRow = (student) => {
    const { item } = student;
    return (
      <tr>
        <td>{item.regId}</td>
        <td>{item.name}</td>
        <td>{item.contact}</td>
        <td>{item.address}</td>
        <td>{item.email}</td>
        <td>{item.username}</td>
      </tr>
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <PageTitle page="Students" />

      <div className="card top-selling overflow-auto">
        <div className="card-body bp-0">
          <div className="d-flex d-row justify-content-between pb-10">
            <h5 className="card-title">All Students</h5>
            <button className="btn btn-primary" onClick={() => openModal()}>
              Add student
            </button>
          </div>

          <table className="table table-borderless">
            <thead className="table-light">
              <tr>
                <th scope="col">Reg Id</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">User name</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                  <StudentTableRow key={index} item={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} contentLabel="Add new student">
        <h2>Add new student</h2>
        <button className="btn btn-danger">Close modal</button>
      </Modal>
    </>
  );
};

export default StudentPage;
