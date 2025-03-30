import Ball from "../Canvas/Ball";
import { technologies } from "../../data/data/constants";
import styled from "styled-components";

const ContainerTech = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
padding: 20px;
`
const WapperBallCanvas = styled.div`
width: 120px;
height: 120px;
position: relative;
`

const Tech = () => {
    return (
        <ContainerTech>
            {technologies.map((technology) => (
                <WapperBallCanvas key={technology.name}>
                    <Ball imgUrl={technology.img} />
                </WapperBallCanvas>
            ))}
        </ContainerTech>
    )
}

export default Tech;
