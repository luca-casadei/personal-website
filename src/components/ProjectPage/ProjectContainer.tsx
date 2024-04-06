import { ProjectProps, projects } from "../../utilities/Projects"
import Project from "./Project"

export default function ProjectContainer() {
    return (
        <section className="text-oxford-blue rounded-lg m-6 p-6 shadow-lg">
            {
                projects.map((project: ProjectProps, index: number) => (
                    <Project key={index} {...project} />
                ))
            }
        </section>
    )
}