import azure from '../../assets/icons8-azure.png';
import docker from '../../assets/icons8-docker.svg';
import git from '../../assets/icons8-git.svg';
import sql from "../../assets/icons8-logo-mysql-48.png";
import nodejs from "../../assets/icons8-node-js.svg";
import openshift from "../../assets/icons8-openshift.svg";
import python from "../../assets/icons8-python.svg";
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
                <div className="skill">
                    <img src={nodejs} alt="" />

                    <span>NodeJs</span>
                </div>
                <div className="skill">

                    <img src={typescript} alt="" />

                    <span>Typescript</span>
                </div>
                <div className="skill">

                    <img src={git} alt="" />

                    <span>Git</span>
                </div>
                <div className="skill">

                    <img src={azure} alt="" />

                    <span>Azure</span>
                </div>
                <div className="skill">

                    <img src={sql} alt="" />

                    <span>SQL</span>
                </div>
                <div className="skill">

                    <img src={python} alt="" />

                    <span>Python</span>
                </div>
                <div className="skill">

                    <img src={docker} alt="" />

                    <span>Docker</span>
                </div>
                <div className="skill">

                    <img src={openshift} alt="" />

                    <span>Openshift</span>
                </div>

            </div>

        </SkillDetails>
    )
}