import { ContainerLeft } from "./style"

import image from '../assets/richard.png'

export function PersonalInfo() {
    return (
        <ContainerLeft>
            <div>
                <img src={image} alt="profile" />
            </div>
        </ContainerLeft>
    )
}