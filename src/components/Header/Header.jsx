import {
    HeaderSpace,
    HeaderContainer,
    HeaderLogo,
    HeaderImg,
    HeaderMobile,
    HeaderDrawer,
    MobileImg,
    MenuTitle,
    MobileLogo,
    LogoImg,
    HeaderSearch,
    SearchIcon,
    SearchInput
  } from "./StyleHeader";
  import { useContext } from "react";
  import LogoRiachuelo from "../../assets/images/riachuelo.svg";
  import menu from "../../assets/images/menu.svg"
  import Logorchlo from "../../assets/images/rchlo.svg";
  import Search from "../../assets/images/search.svg";
  import FilterContext from "../../contexts/FilterContext";
  import Menu from "./Menu/Menu";
  
  function Header() {
    const filters = useContext(FilterContext);
    function search(event){
      const {value} = event.target;
      if(event.code === "Enter"){
        filters.setSearch(value.toLowerCase());
      }
      if(value === ""){
        filters.setSearch("");
      }
    }
  
    return (
      <HeaderSpace>
        <HeaderContainer>
          <HeaderMobile>
            <HeaderDrawer>
              <MobileImg src={menu} />
              <MenuTitle>menu</MenuTitle>
            </HeaderDrawer>
            <MobileLogo>
              <LogoImg src={Logorchlo} />
            </MobileLogo>
          </HeaderMobile>
          <HeaderLogo>
            <HeaderImg src={LogoRiachuelo} />
          </HeaderLogo>
          <HeaderSearch>
            <SearchIcon src={Search} />
            <SearchInput
              type="search"
              placeholder="O que você está procurando?"
              onKeyUp={(event)=> search(event)}
            />
          </HeaderSearch>
          <Menu/>
        </HeaderContainer>
      </HeaderSpace>
    );
  }
  
  export default Header;
  