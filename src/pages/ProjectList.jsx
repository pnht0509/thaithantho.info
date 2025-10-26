import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project One",
    role: "Creative Director",
    type: "Web Design",
    year: "2023",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    role: "3D Animator",
    type: "3D Animation",
    year: "2023",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project2-1/800/600",
      "https://picsum.photos/seed/project2-2/800/600",
      "https://picsum.photos/seed/project2-3/800/600",
    ],
  },
  {
    id: 3,
    title: "Project Three",
    role: "Motion Graphics Designer",
    type: "Motion Graphics",
    year: "2022",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project3-1/800/600",
      "https://picsum.photos/seed/project3-2/800/600",
      "https://picsum.photos/seed/project3-3/800/600",
    ],
  },
  {
    id: 4,
    title: "Project Four",
    role: "UI/UX Designer",
    type: "UI/UX Design",
    year: "2022",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project4-1/800/600",
      "https://picsum.photos/seed/project4-2/800/600",
      "https://picsum.photos/seed/project4-3/800/600",
    ],
  },
  {
    id: 5,
    title: "Project Five",
    role: "Brand Identity Designer",
    type: "Brand Identity",
    year: "2022",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project5-1/800/600",
      "https://picsum.photos/seed/project5-2/800/600",
      "https://picsum.photos/seed/project5-3/800/600",
    ],
  },
  {
    id: 6,
    title: "Project Six",
    role: "Photographer",
    type: "Photography",
    year: "2021",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project6-1/800/600",
      "https://picsum.photos/seed/project6-2/800/600",
      "https://picsum.photos/seed/project6-3/800/600",
    ],
  },
  {
    id: 7,
    title: "Project Seven",
    role: "Web Developer",
    type: "Web Development",
    year: "2021",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project7-1/800/600",
      "https://picsum.photos/seed/project7-2/800/600",
      "https://picsum.photos/seed/project7-3/800/600",
    ],
  },
  {
    id: 8,
    title: "Project Eight",
    role: "Installation Artist",
    type: "Installation",
    year: "2021",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project8-1/800/600",
      "https://picsum.photos/seed/project8-2/800/600",
      "https://picsum.photos/seed/project8-3/800/600",
    ],
  },
  {
    id: 9,
    title: "Project Nine",
    role: "Visual Designer",
    type: "Visual Design",
    year: "2020",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project9-1/800/600",
      "https://picsum.photos/seed/project9-2/800/600",
      "https://picsum.photos/seed/project9-3/800/600",
    ],
  },
  {
    id: 10,
    title: "Project Ten",
    role: "Interactive Designer",
    type: "Interactive",
    year: "2020",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project10-1/800/600",
      "https://picsum.photos/seed/project10-2/800/600",
      "https://picsum.photos/seed/project10-3/800/600",
    ],
  },
];

export function ProjectList() {
  const [activeId, setActiveId] = useState(null);

  const handleMouseEnter = (event, id) => {
    setActiveId(id);
    const video = event.currentTarget.parentNode.querySelector("video");
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (event) => {
    setActiveId(null);
    const video = event.currentTarget.parentNode.querySelector("video");
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-wrapper ${
              activeId === project.id ? "active" : ""
            }`}
          >
            <Link
              to={`/project/${project.id}`}
              className="project-row"
              onMouseEnter={(e) => handleMouseEnter(e, project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-role">{project.role}</span>
                <span className="project-type">{project.type}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </Link>

            <div className="project-hover">
              <div className="project-media-grid">
                <video muted loop playsInline preload="metadata">
                  <source src={project.video} type="video/mp4" />
                </video>
                {project.images && project.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
