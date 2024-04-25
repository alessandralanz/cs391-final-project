import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

const Title = styled.h1`
    margin: 10px 20px 0 0; 
    color: black;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;


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

