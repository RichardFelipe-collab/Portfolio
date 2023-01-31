import azure from '../../assets/icons8-azure.png';
import git from '../../assets/icons8-git.svg';
import nodejs from "../../assets/icons8-node-js.svg";
import typescript from "../../assets/icons8-typescript.svg";
import react from '../../assets/react.svg';

import { SkillDetails } from "./style";

export function Skills() {
    return (
        <SkillDetails>
            

                <h3>Habilidades</h3>
            <div className='details'>
                <div className="skill"><img src={react} alt="" />

                    <span>ReactJs</span>
                </div>
                <div className="skill"><img width="35px" src={nodejs} alt="" />

                    <span>NodeJs</span>
                </div>
                <div className="skill">
                
                    <img width="35px" src={typescript} alt="" />

                   <span>Typescript</span> 
                </div>
                <div className="skill">
                
                    <img width="35px" src={git} alt="" />

                   <span>Git</span> 
                </div>
                <div className="skill">
                
                    <img width="35px" src={azure} alt="" />

                   <span>Azure</span> 
                </div>
         
            </div>
                
        </SkillDetails>
    )
}