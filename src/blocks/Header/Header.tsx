import { Container } from "../../components/commerce/layout/container/Container";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { HeaderActions } from "./Actions/HeaderActions";
import { MobileMenuButton } from "./Mobile/MobileMenuButton";

import {
  HeaderWrapper,
  HeaderContent,
  Left,
  Center,
  Right,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Left>
            <Logo />
          </Left>

          <Center>
            <Navigation />
          </Center>

          <Right>
            <HeaderActions />
            <MobileMenuButton />
          </Right>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}
