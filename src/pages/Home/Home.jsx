import { useState } from "react"
import Skills from "../../components/Skills/Skills"
import { mySkills, myDescription } from "../../constant"
import HeaderText from "../../components/HeaderText/HeaderText"
const Home = () => {
    const [showFrontend, setShowFrontend] = useState(true)
    const showHandler = () => {
        setShowFrontend(!showFrontend);
    }
    return (
        <section className="sm:px-10 px-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
                <div>
                <HeaderText>
                    I am Hein Tay Zar from Myanmar.
                </HeaderText>
                <span className="font-thin text-base px-8"> - Full Stack Developer in React Rails</span>

                </div>
                <p>{
                   myDescription.map((str) => {
                    return (
                        <><p>&nbsp; &nbsp; &nbsp; {str}</p><br /></>
                    );
                })
                }</p>
           </div>
            <div>
                <HeaderText>My Skills</HeaderText>
                        <h3 className="grid sm:grid-cols-2 grid-cols-1 px-2 py-3 text-center">
                            <button type="button" disabled={(showFrontend)} className={(!showFrontend) ? ``: `bg-primary text-white p-2 border-r border-primary`} onClick={showHandler}>Frontend</button>
                            <button type="button" disabled={(!showFrontend)} className={(showFrontend) ? ``: `bg-primary text-white p-2 border-l border-primary`} onClick={showHandler}>Backend </button>
                        </h3>
                        {showFrontend && (<section className="border border-primary min-h-[400px] px-2 py-3 space-y-5">
                            <Skills skills={mySkills[0].skills}></Skills>
                        </section>)}
                        {!showFrontend && (<section className="border border-primary min-h-[400px] px-2 py-3 space-y-5">
                            <Skills skills={mySkills[1].skills}></Skills>
                </section>)}
                </div>
        </section>
    )
}
export default Home
