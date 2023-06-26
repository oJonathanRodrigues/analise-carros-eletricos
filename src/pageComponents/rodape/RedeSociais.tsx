import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/eng-jonathan-rodrigues" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/oJonathanRodrigues" />
        </div>
    )
}