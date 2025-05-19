import { researchProjects } from "../projects";
import { ProjectCard } from "../embla/project-card";
export const ResearchSection = ({ isMobileDevice=true } : {isMobileDevice?: boolean}) => {
    return (
        <section className="relative flex flex-col max-w-[1340px] w-full gap-4" id="research">
            <h2 className="text-4xl self-center">Research ({researchProjects.length})</h2>
            <div className="relative flex flex-row gap-4 h-full w-full flex-wrap">
                {researchProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} isMobileDevice={isMobileDevice} />
                ))}
            </div>
        </section>
    )
}