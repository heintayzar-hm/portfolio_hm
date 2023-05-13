/* eslint-disable react/jsx-key */
import { mySocialMedia } from "../../constant"
import Social from "../Socials/Social"

const Footer = () => {
    return (
        <footer className="py-5 px-2 sm:px-[8%] flex justify-between items-center mt-8">
            <ul className="flex gap-5">
                {
                    mySocialMedia.map((social) => {
                        return (
                          <Social name={social.name} icon={social.icon} value={social.value} />
                        )
                    })
                }
            </ul>
            <span className="sm:block hidden">
                @2023 Hein Tay Zar all rights reserved
            </span>
        </footer>
    )
}

export default Footer
