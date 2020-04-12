import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 16px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const CardHeader = styled.div`
  flex-grow: 1.5;
  background-size: cover !important;
  background-position: center;
`;

export const CardBody = styled.div`
  flex-basis: 40%;
  flex-shrink: 0.8;
  padding: 0.25rem 1rem;
`;

export const CardFooter = styled.div`
  flex-basis: 8%;
  padding: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  color: #12284c;
`;

export const CardText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #12284c;
  opacity: 0.8;
`;

export const CardAction = styled.a`
  text-decoration: none;
  color: #27add5;
  &:hover {
    cursor: pointer;
  }
`;
