import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bgLight};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 24px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  width: 80%;
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;

const NavItem = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  top: 50px
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: all 0.6s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  z-index: ${({ $isOpen }) => ($isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span style={{ color: "white" }}>Dieude Compagnie</span>
        </NavLogo>
        
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        
        <NavItem>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItem>
        
        <MobileMenu $isOpen={isOpen}>
          <NavLink href="#About" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#Skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#Experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#Education" onClick={() => setIsOpen(false)}>Education</NavLink>
          <NavLink href="#Contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
