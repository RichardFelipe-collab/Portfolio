import imgdtmoney from "../../assets/dt 6.png";
import github from "../../assets/github.png";
import { ProjectsContainer } from "./style";

export function ProjectsInfo(){
  return(

    <ProjectsContainer>
      
      <div className="card">
        <img src={imgdtmoney} alt="" />
        <p>Dt-money</p>
        <span>Desenvolvido no Ignite na trilha de Reactjs, utlizando Styled-components, Typescript, Hookiess e muito mais !</span>
        <a href=""><img src={github} alt=""  /></a>
      </div>
      
      <div className="card">
        <img src={imgdtmoney} alt="" />
      </div>
    </ProjectsContainer>
  )
}