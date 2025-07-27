
const ProjectDisplay = ({link}) => {
    return (
        <div className="project-display bg-yellow-400">
            <iframe
                src={link}
                width={600}
                height={400}
            >
            </iframe>

        </div>
    )
}

export default ProjectDisplay