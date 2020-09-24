import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src='/images/logoIcon.svg'></LogoIcon>
          <Logo src='/images/logo.svg'></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src='/images/uploadIcon.svg'></Icon>
          <Avatar>
            <img src='https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg' />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
