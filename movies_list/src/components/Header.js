import * as S from "./styled";
import logo from "../assets/logo.png"

const Header = () => {
return (
    <S.Header>
     <S.ImgLogo src={logo} alt="logo tmdb" />
    </S.Header>
)

}

export default Header;