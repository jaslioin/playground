import Link from "next/link";
import PropTypes from "prop-types";
import { getHref, getNavigationLink } from "../../utils/helper";
import {
  CardAction,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  CardWrapper,
} from "./Styles";

const Card = (info) => {
  const cardBGStyles = {
    backgroundImage: `url(${info.heroImage})`,
    // backgroundSize:
    // background: `linear-gradient(45deg,rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`,
    height: "200px",
    ":hover": {
      height: "500px",
    },
  };

  return (
    <CardWrapper>
      <CardHeader style={cardBGStyles} />
      <CardBody>
        <CardTitle>{info.title}</CardTitle>
        <CardText>{info.description}</CardText>
      </CardBody>
      <CardFooter>
        <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
          <CardAction>Explore</CardAction>
        </Link>
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
