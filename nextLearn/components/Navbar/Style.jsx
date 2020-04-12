import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.89);
  box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.89);
  border-radius: 15px;
  padding: 18px;
  a {
    -webkit-user-select: none;
    text-decoration: none;
    padding: 18px;
    color: black;
    transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  a:hover {
    color: white;
    background-color: black;
    text-align: center;
  }
`;
