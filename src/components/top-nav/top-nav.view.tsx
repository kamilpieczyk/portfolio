import React from "react";
import { Link } from "gatsby";

import { Container, Logo, Menu } from "./top-nav.styles";
import { MenuEl } from "./menu";
import BurgerMenu from "./burger-menu";

interface NavType {
  state: {
    device: "mobile" | "desktop";
    isPageScrolled: boolean;
    subpage?: boolean;
  };
  menu: MenuEl[];
  handleLink: (navigate: string) => void;
}

const Nav: React.FC<NavType> = (p) => {
  return (
    <Container
      isDesktop={p.state.device === "desktop"}
      isPageScrolled={p.state.isPageScrolled}
      isSubpage={p.state.subpage}
      id="top-navigation"
    >
      <Logo
        src="https://kamilpieczyk.github.io/images/logo.png"
        alt="kamilpieczyk logo"
      />
      <Menu>
        {p.state.device === "desktop" ? (
          p.menu.map((El) => (
            <a
              key={El.title}
              title={El.title}
              onClick={() => p.handleLink(El.link)}
            >
              <El.icon />
              {El.title}
            </a>
          ))
        ) : (
          <BurgerMenu />
        )}
      </Menu>
    </Container>
  );
};

export default Nav;
