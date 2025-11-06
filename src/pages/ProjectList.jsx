import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ă̸̢̢ḿ̶̧͓ͅ I̶̛̐̈͠.  ̸͐̏͑̅D̴̘͈͂͝ȯ̸̟̽͛i̶͛͋̉̓n̴͂̎̒̿g̶̩̰̅͌ ̴̎͗̔͝T̴͐̒̚͠h̸͆̈̈́͝is Ri͈̯g̶͍͗̽͘h̴͌͗͆͝t̶͙̥͛́?̷̎͌",
    role: "Visual Artist",
    type: "Video Installation",
    year: "2025",
    video: "https://vimeo.com/1130098714?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/a64d4e7b-07fb-4eb7-c41d-5b6df557a700/public"
    ],
  },
  {
    id: 2,
    title: "Dominic Fike - Mama's Boy (Unofficial Video)",
    role: "Assistant Director, Director of Photography, Editor, Colorist, VFX Artist",
    type: "Music Video",
    year: "2025",
    video: "https://vimeo.com/1130100307?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/d881a9fe-6bbf-4774-f9a5-f4b2c8330500/public"
    ],
  },
  {
    id: 3,
    title: "Whimsical Reality",
    role: "Visual Artist",
    type: "Interactive Installation",
    year: "2025",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/0512e5d6-3674-4bf8-1007-b0f1d5f9a100/public"
    ],
  },
  {
    id: 4,
    title: "How to uncake",
    role: "Director, Producer, Director of Photography, Editor, Colorist, VFX Artist",
    type: "Short Film",
    year: "2024",
    video: "https://vimeo.com/1081134450?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/5be63215-9cc1-4e08-ca80-6b09654dfd00/public"
    ],
  },
  // {
  //   id: 5,
  //   title: "Shape of Memories",
  //   role: "Visual Artist",
  //   type: "Video",
  //   year: "2024",
  //   video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
  //   images: [
  //     "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/88002fa4-db50-4d71-7589-6c1d5fa7bd00/public"
  //   ],
  // },
  {
    id: 6,
    title: "\"Poor\" Thoughts",
    role: "Director, Producer, Director of Photography,Gaffer, DIT, BTS, Camera and Lighting Equipment, Editor, Colorist, VFX Artist",
    type: "Short Film",
    year: "2024",
    video: "https://vimeo.com/1016752750?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/37f62955-b4d4-49b3-d50b-1105e0e5ea00/public"
    ],
  },
  {
    id: 7,
    title: "Dissolving Dimensions",
    role: "Visual Artist",
    type: "Interactive Installation",
    year: "2024",
    video: "https://vimeo.com/987500507?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/e30264a6-5cc2-4cd4-68e2-88c3f1063800/public"
    ],
  },
  {
    id: 8,
    title: "Efferescent",
    role: "Project Manager",
    type: "Creative Project",
    year: "2023",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/05890729-9ead-483a-36d2-46c7fdcb4800/public"
    ],
  },
  {
    id: 9,
    title: "Anybody's Anything",
    role: "Videographer, Editor, Colorist",
    type: "Music Video",
    year: "2023",
    video: "https://vimeo.com/947821180",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/76999b20-521c-42a4-5a69-f295518b5a00/public"
    ],
  },
  {
    id: 10,
    title: "Streamer",
    role: "Director, Director of Photography, Editor, Colorist",
    type: "Short Film",
    year: "2022",
    video: "https://vimeo.com/863270629?fl=pl&fe=sh",
    images: [
      "https://imagedelivery.net/9e6F9WGVMKEgqvozZdl8wA/7ccbb836-e3db-4eb6-4588-735f2735a600/public"
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
