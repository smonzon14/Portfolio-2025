import { engineeringProjects } from "../projects";
import { ProjectCard } from "../embla/project-card";
export const EngineeringSection = ({ isMobileDevice=true } : {isMobileDevice?: boolean}) => {
    return (
        <section className="relative flex flex-col max-w-[1340px] w-full gap-4" id="engineering">
            <h2 className="text-4xl self-center">Engineering Projects ({engineeringProjects.length})</h2>
            
            <div className="relative flex flex-row gap-4 h-full w-full flex-wrap">
                {engineeringProjects.map((project) => (
                    <ProjectCard project={project} key={project.name} isMobileDevice={isMobileDevice}/>
                ))}
            </div>
        </section>
    )
}