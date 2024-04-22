import styled from 'styled-components';

const NavBarWrapper = styled.div`
    background-color: #f8f8f8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1% 0;
    //position: fixed;
    //top:0;
    //left:0;
    //z-index: 1000;
   
    
`;

const Title = styled.h1`
    margin: 0; 
    color: black;
`;

const NavLinks = styled.nav`
    display: flex;
    margin-top: 10px; 
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0 10px; 
  transition: all 0.3s ease;
`;

function NavBar() {
    return (
        <>
            <NavBarWrapper>
                <Title>BU Dining</Title>
                <NavLinks>
                    <NavLink href="./App.jsx">Home</NavLink>
                    <NavLink href='./pages/crc.jsx'>Fenway</NavLink>
                </NavLinks>
            </NavBarWrapper>
        </>
    );
}
export default NavBar;

