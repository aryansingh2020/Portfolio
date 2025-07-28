import { useEffect, useState } from "react"
import axios from "axios"
import PageTitle from "../components/PageTitle.js"
import ProjectCard from "../components/ProjectCard.js"
import LoadingSpinner from "../components/LoadingSpinner.js"

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/aryansingh2020/repos?sort=updated&direction=desc"
        )
        console.log(response.data)
        setRepos(response.data.slice(0, 6))
        setLoading(false)

      } catch (error) {
        console.error("Error fetching repositories:", error)
        setLoading(false)
      }
    };

    fetchRepos();
  }, [])

  return (
    <div className="projects flex flex-col items-center gap-[3dvh] sm:flex-row sm:gap-0">
      <PageTitle text="PROJECTS" />
      {
        loading ? (
          <div className="flex justify-center items-center ml-auto mr-auto h-[40vh]">
            <LoadingSpinner/>
          </div>
        ) : (
          <div className="flex flex-wrap max-w-[190dvh] gap-[2dvh] ml-auto mr-auto justify-center">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} data={repo} />
            ))}
          </div>

        )}
         <a
            href="https://github.com/aryansingh2020?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-[1.5dvh] bg-yellow-400 font-semibold rounded-md text-[2.5dvh] sm:mr-auto hover:bg-yellow-500"
          >
            View More
          </a>
    </div>
  );
};

export default Projects;
