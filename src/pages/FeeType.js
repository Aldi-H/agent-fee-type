import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Collapse,
  Container,
  Dropdown,
  Form,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";

import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";

import styled from "styled-components";
import DataTables from "../components/DataTablesComponent";
import HoverTooltip from "../components/HoverTooltipComponent";
import { useNavigate } from "react-router-dom";

const StyledBreadcrumb = styled(Breadcrumb.Item)`
  &:not(:first-child):before {
    font-size: 11px;
    content: ">" !important;
  }

  &.active {
    font-size: 11px;
    color: #e84d0e;
  }

  &:not(.active) a {
    float: left;
    color: #818181;
    font-size: 11px;
    text-decoration: none;
  }
`;

const FeeType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feeTypeData, setFeeTypeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/feetype");
      setFeeTypeData(result.data);
    };
    fetchData();
  }, []);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateBtn = () => {
    let path = `/create`;
    navigate(path);
  };

  return (
    <Container className=" mt-4">
      <div>
        <h3>Fee Type Details</h3>
      </div>

      <div className="mt-4">
        <Breadcrumb>
          <StyledBreadcrumb>Master Data Management</StyledBreadcrumb>
          <StyledBreadcrumb href="/">Fee Type</StyledBreadcrumb>
          <StyledBreadcrumb active>Fee Type Details</StyledBreadcrumb>
        </Breadcrumb>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-center gap-3">
          <InputGroup size="sm">
            <Form.Control placeholder="Search" />
            <InputGroup.Text variant="outline-secondary" id="basic-addon">
              <IoMdSearch />
            </InputGroup.Text>
          </InputGroup>
          <div style={{ minWidth: "fit-content" }}>
            {isOpen ? (
              <h6 onClick={handleCollapse}>
                Advance Options <MdKeyboardDoubleArrowUp />
              </h6>
            ) : (
              <h6 onClick={handleCollapse}>
                Advance Options <MdKeyboardDoubleArrowDown />
              </h6>
            )}
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <HoverTooltip text="Click to Download">
            <Button variant="secondary" className="rounded-circle">
              <HiOutlineDownload />
            </Button>
          </HoverTooltip>
          <HoverTooltip text="Click to Print">
            <Button variant="secondary" className="rounded-circle">
              <BsPrinter />
            </Button>
          </HoverTooltip>
          <HoverTooltip text="Click to Create">
            <Button variant="warning" onClick={handleCreateBtn}>
              <AiOutlineFileAdd /> Create New
            </Button>
          </HoverTooltip>
        </div>
      </div>

      <Collapse in={isOpen}>
        <div
          className="p-4 mx-2 my-3 rounded bg-light"
          id="example-collapse-text"
        >
          <h6>Status</h6>
          <Dropdown>
            <Dropdown.Toggle className="bg-white text-dark">
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Active</Dropdown.Item>
              <Dropdown.Item href="">Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Collapse>

      <div className="mt-4">
        <DataTables data={feeTypeData} />
      </div>
    </Container>
  );
};

export default FeeType;
