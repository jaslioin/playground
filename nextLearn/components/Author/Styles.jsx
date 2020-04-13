import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  width: 100%;
  max-height: 500px;
  margin-left: 1rem;
  &:hover {
    box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1.5;
  max-height: 200px;
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

export const Image = styled.img`
  border-radius: 50%;
  margin: 4px 0;
  transform: scale(0.5);
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1);
  }
`;
