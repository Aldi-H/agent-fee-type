import { Table, Form } from "react-bootstrap";

import { useEffect } from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import axios from "axios";

import $ from "jquery";
import "datatables.net";
import { useNavigate } from "react-router-dom";

const DataTables = ({ data }) => {
  const navigate = useNavigate();

  const detailData = async (id) => {
    await axios.get(`http://localhost:8000/feetype/${id}`);
    navigate(`/detail/${id}`);
  };

  const editData = async (id) => {
    await axios.get(`http://localhost:8000/feetype/${id}`);
    navigate(`/edit/${id}`);
  };

  // delete data from database and automatically refresh the page
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8000/feetype/${id}`);
    window.location.reload();
  };

  useEffect(() => {
    $("#myTable").DataTable();
  }, []);

  return (
    <>
      <Table id="myTable" className="table-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Fee Type Code</th>
            <th>Fee Type Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{item.feeTypeCode}</td>
              <td>{item.feeTypeName}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>
                <FiEdit
                  className="ml-3"
                  onClick={() => editData(item.id)}
                  style={{ cursor: "pointer" }}
                />
                <FiEye
                  className="m-3"
                  onClick={() => detailData(item.id)}
                  style={{ cursor: "pointer" }}
                />
                <FiTrash2
                  onClick={() => deleteData(item.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataTables;
