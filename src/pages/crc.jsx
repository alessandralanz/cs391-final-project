import Navbar from "../components/navbar.jsx";
import Threecard from "../components/threecard.jsx";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
function Crc(){
    return(
        <>
        <Navbar/>
            <Container>
                <Threecard title="Marciano Commons"/>
                <Threecard title="Warren"/>
                <Threecard title="West"/>
            </Container>
        </>
    )
}
export default Crc;