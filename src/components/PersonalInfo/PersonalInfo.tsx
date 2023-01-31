import { ContainerLeft } from "./style"

import image from '../../assets/profile.png'

import icon_github from '../../assets/icons8-github.svg'
import icon_linkedin from '../../assets/icons8-linkedin.svg'

export function PersonalInfo() {
    return (
        <ContainerLeft>
            <div>
                <img className="profile" src={image} alt="profile" />
            </div>
            <div className="info">
                <h1>Richard Felipe da S. Oliveira</h1>
                Desenvolvedor FullStack
            </div>
            <a href="https://github.com/RichardFelipe-collab" target="_blank"><img width="38px" height="38px" src={icon_github} alt="github" /><p>RichardFelipe-collab</p></a>
            <br />
            <a href="https://www.linkedin.com/in/richard-felipe-da-silva-oliveira-1ab55a135/" target="_blank">
                <img width="38px" height="38px" src={icon_linkedin} alt="" />
                <p>Richard Felipe da Silva</p></a>
        </ContainerLeft>
    )
}