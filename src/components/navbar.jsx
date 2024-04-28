//The navbar is used to navigate between the pages

import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Component Contributors: Andrew Cabral, Alessandra Lanz

//Navbar wrapper which covers the top of the screen
const NavBarWrapper = styled.div`
    background-color: rgba(255, 0, 0, 0.87);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1% 0;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

//Title of the navbar
const Title = styled.h1`
    margin: 10px 20px 0 0; 
    color: black;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
`;
//container determining placement of the buttons
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

//The button for each of the pages
const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 10px 20px;
    border: 2px solid black;
    border-radius: 5px;
    margin: 0 10px;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.3s ease;
    &:hover {
        background-color: #cccccc;
        color: black;
        transform: scale(1.05);
`;

//A funtion which creates a red bar at the top of the screen with a title and 3 buttons for each of the 3 pages.
function NavBar() {
    return (
        <>
            <NavBarWrapper>
                <Title>Boston University Dining</Title>
                <ButtonContainer>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/fenway'>Fenway</NavLink>
                    <NavLink to='/CRC'>CRC</NavLink>
                </ButtonContainer>
            </NavBarWrapper>
        </>
    );
}
export default NavBar;

