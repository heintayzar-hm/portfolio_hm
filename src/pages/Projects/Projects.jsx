/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import HeaderText from "../../components/HeaderText/HeaderText";
import { myProjects } from "../../constant";
import axios from "axios";


const Projects = () => {
    const [kanbanProjects, setKanbanProjects] = useState([])
    useEffect(() => {
        const myGithubData = async () => {
            const header = {
                headers: {
                    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                }
            }
            const response = await axios('https://api.github.com/users/heintayzar-hm/projects', header)
            setKanbanProjects(response.data)
        }
        myGithubData();
    }, [])
    console.log(kanbanProjects)
    return (
        <section>
            <HeaderText className="text-center">My Most Proud Projects</HeaderText>

            <p className="text-center py-8">
            Throughout my web development journey, I have worked on numerous projects, and although not all of them were remarkable, they provided me with valuable experiences in various aspects. However, I would like to highlight some of my most exciting and proud projects:
            </p>

            <div>

            </div>
            <HeaderText>Kanban Boards</HeaderText>
            <p className="py-4">
            Why are you seeing this section? Because sometimes you might have trouble dividing tasks and managing them. Therefore, this section serves as an example where you can either use it or take inspiration from it.
            This section is fetched from github api.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    kanbanProjects.map((project) => {
                        return (
                            <li className="h-[300px] overflow-y-scroll text-black bg-slate-300 rounded-lg">
                                <a href={project.html_url} target="_blank" rel="noreferrer">
                                    <h3 className="font-secondary text-center py-5 hover:underline hover:text-secondary">{project.name}</h3>
                                </a>
                                    <p>{ project.body }</p>

                            </li>
                        );
                    })
                }
            </ul>
            <HeaderText>Projects</HeaderText>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    myProjects.map((project) => {
                        return (
                            <li className="min-h-[500px]">
                            <h3 className="font-secondary text-center py-5">{project.name}</h3>
                                <img src={project.image} alt={project.name} className="h-[450px] object-cover w-full" />
                                <div className=" flex justify-around items-center pt-5">
                                    <Button type="link" href={project.live_link}>Live Link</Button>
                                    <Button type="link" href={project.github_link}>Github Link</Button>
                                </div>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Projects;
