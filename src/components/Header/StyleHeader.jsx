import styled from "styled-components";

export const HeaderSpace = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderContainer = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`;

export const HeaderLogo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;
`;

export const HeaderImg = styled.img`
  height: 25px;
  transform: translateY(10px);
`;

export const HeaderMobile = styled.div`
  display: none;
  margin-bottom: 25px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderDrawer = styled.div`
  width: 24px;
  opacity: 54%;
  display: none;
`;

export const MobileImg = styled.img``;

export const MenuTitle = styled.p`
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;

export const MobileLogo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;
  @media (max-width: 1200px) {
    flex-grow: 1;
  }
`;

export const LogoImg = styled.img`
  height: 25px;
  transform: translateY(10px);
`;

export const HeaderSearch = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  width: 30px;
  opacity: 26%;
  top: 9px;
  position: absolute;
  padding-left: 8px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;
`;
