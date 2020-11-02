import Link from "next/link";
import { NavbarWrapper, NavbarContent } from "./Style";

function NavItem(props) {
  return (
    <div>
      <Link href={props.link}>
        <a>{props.title}</a>
      </Link>
    </div>
  );
}
export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <NavItem title="Home" link="/" />
        <NavItem title="About" link="/about" />
        <NavItem title="Blog" link="/blog" />
        <NavItem title="Project" link="/project" />
      </NavbarContent>
    </NavbarWrapper>
  );
}
