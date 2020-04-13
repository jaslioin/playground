import PropTypes from "prop-types";
import {
  CardAction,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  CardWrapper,
} from "./Styles";
import { Image } from "./Styles";
const Card = ({ title, description, github, linkedin, propic }) => {
  const cardBGStyles = {
    background: `linear-gradient(45deg,rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56))`,
  };

  return (
    <CardWrapper>
      <CardHeader style={cardBGStyles}>
        <Image src={propic} alt="Author Profile Pic" />
      </CardHeader>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <CardAction href={github}>
          <img src="/github.svg" width="50" border="0"></img>
        </CardAction>
        <CardAction href={linkedin}>
          <img src="/linkedin.svg" width="50"></img>
        </CardAction>
      </CardFooter>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  heroImage: PropTypes.string,
  publishedAt: PropTypes.string,
  slug: PropTypes.string,
};

export default Card;
