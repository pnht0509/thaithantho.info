import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ă̸̢̢ḿ̶̧͓ͅ I̶̛̐̈͠.  ̸͐̏͑̅D̴̘͈͂͝ȯ̸̟̽͛i̶͛͋̉̓n̴͂̎̒̿g̶̩̰̅͌ ̴̎͗̔͝T̴͐̒̚͠h̸͆̈̈́͝is Ri͈̯g̶͍͗̽͘h̴͌͗͆͝t̶͙̥͛́?̷̎͌",
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
    title: "Dominic Fike - Mama's Boy (Unofficial Video)",
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
    title: "Whimsical Reality",
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
    title: "How to uncake",
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
    title: "Shape of Memories",
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
    title: "\"Poor\" Thoughts",
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
    title: "Dissolving Dimensions",
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
    title: "Efferescent",
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
    title: "Anybody's Anything",
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
    title: "Streamer",
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

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const activeProject = projects.find((p) => p.id === activeId) || null;

  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <div className="projects-gallery-grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${slugify(project.title)}`}
                className="projects-gallery-item nav-item"
                data-nav-item
                tabIndex={0}
                onMouseEnter={() => setActiveId(project.id)}
                onMouseLeave={() => setActiveId((prev) => (prev === project.id ? null : prev))}
             >
                <div className="projects-gallery-image">
                  <img
                    src={project.images?.[0]}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="projects-gallery-title">{project.title}</div>
              </Link>
            ))}
          </div>
        </section>
        <aside className="home-side">
          <div className="project-hover-panel">
            {activeProject ? (
              <>
                <div className="project-hover-name">{activeProject.title}</div>
                <div className="project-hover-meta">
                  <div className="project-hover-row">
                    <span className="label">Type</span>
                    <span className="value">{activeProject.type}</span>
                  </div>
                  <div className="project-hover-row">
                    <span className="label">Role</span>
                    <span className="value">{activeProject.role}</span>
                  </div>
                  <div className="project-hover-row">
                    <span className="label">Year</span>
                    <span className="value">{activeProject.year}</span>
                  </div>
                </div>
                <div className="home-side-video">
                  {activeProject.images?.[0] ? (
                    <img src={activeProject.images[0]} alt={activeProject.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : null}
                </div>
              </>
            ) : (
              <div className="project-hover-empty">Hover a project to see details</div>
            )}
          </div>
        </aside>
      </div>
      <div className="home-footer">© thaithantho's portfolio. All Right Reserved</div>
    </div>
  );
}
