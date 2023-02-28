import imgdtmoney from "../../assets/dt 6.png";
import imgdashgo from "../../assets/dashgo.png"
import imgignews from "../../assets/ignews.png"
import imgportfolio from "../../assets/portfolio.png"
import { ProjectsContainer } from "./style";

export function ProjectsInfo() {
  return (

    <ProjectsContainer>
      <header className="header"><h1>Projetos</h1></header>
      <div className="row">
        <div className="card">
          <img src={imgdtmoney} alt="" />
          <h3>Dt-money</h3>
          <span>Projeto desenvolvido durante o Ignite na trilha de Reactjs, utlizando <b>Styled-components, Typescript, conceitos de Hookies </b> e muito mais !</span> <br /><br />
          <span>Link Github: <a href="https://github.com/RichardFelipe-collab/dtmoney" target="_blank">Dt-Money</a></span>
        </div>

        <div className="card">
          <img src={imgdashgo} alt="" />
          <h3>Dash-Go</h3>
          <span>Projeto em desenvolvimento no Ignite na trilha de Reactjs, utlizando <b>Chakra-Ui, Typescript, NextJS e ApexCharts </b> !</span> <br /><br />
          <span>Link Github: <a href="https://github.com/RichardFelipe-collab/dash-go" target="_blank">Dash-GO</a></span>
        </div>
      </div>

      <div className="row">

        <div className="card">
          <img src={imgignews} alt="" />
          <h3>Ig.news</h3>
          <span>Projeto em desenvolvimento no Ignite na trilha de Reactjs, utilizando <b>Nextjs e conceitos de SSG e SSR integrando com Stripe, e estilizado com SASS </b></span> <br /><br />
          <span>Link Github: <a href="https://github.com/RichardFelipe-collab/ignews" target="_blank">Ig.news</a></span>
        </div>
        <div className="card">
          <img src={imgportfolio} alt="" />
          <h3>Portfolio</h3>
          <span>Pagina para apresentação dos projetos !</span> <br /><br />
          <span>Link Github: <a href="https://github.com/RichardFelipe-collab/Portfolio" target="_blank">Portfolio</a></span>
        </div>
      </div>

    </ProjectsContainer>
  )
}