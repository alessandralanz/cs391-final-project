import React from "react";
import styled from "styled-components";
import Threecard from "../components/threecard.jsx";


const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
function Crc(){
    return(
        <>
            <Container>
                <Threecard title="Marciano Commons"/>
                <Threecard title="Warren"/>
                <Threecard title="West"/>
            </Container>
        </>
    )
}
export default Crc;