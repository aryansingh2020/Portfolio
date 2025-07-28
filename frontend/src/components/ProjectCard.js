const ProjectCard = ({ data }) => {
  return (
    <div className="project-details w-[50dvh] h-[35dvh] flex flex-col justify-center bg-white/30 backdrop-blur-sm border border-white/20 rounded-md p-4">
      <label className="text-[4dvh] font-bold text-yellow-400">{data.name}</label>
      <label className="text-[3dvh] text-white">
        {data.description || "No description available"}
      </label>
      <label className="text-[2.5dvh] text-white">
        <span className="text-yellow-400">Live at:{" "}</span>
        {data.homepage ? (
          <a
            href={data.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {data.homepage}
          </a>
        ) : (
          "Not available"
        )}
      </label>
      <label className="text-[2.5dvh]">
        <span className="text-yellow-400">Code:{" "}</span>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Repository
        </a>
      </label>
    </div>
  );
};

export default ProjectCard;
