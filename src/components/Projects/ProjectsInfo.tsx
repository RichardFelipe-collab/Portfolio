import imgdtmoney from "../../assets/dt 6.png";
import { ProjectsContainer } from "./style";

export function ProjectsInfo(){
  return(

    <ProjectsContainer>
      
      <div className="card">
        <img src={imgdtmoney} alt="" />
        <h3>Dt-money</h3>
        <span>Desenvolvido no Ignite na trilha de Reactjs, utlizando Styled-components, Typescript, Hookiess e muito mais !</span> <br /><br />
        <span>Link Github: <a href="https://github.com/RichardFelipe-collab/dtmoney" target="_blank">Dt-Money</a></span>
      </div>
      
      <div className="card">
        <img src={imgdtmoney} alt="" />
      </div>
    </ProjectsContainer>
  )
}