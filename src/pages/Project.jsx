import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Am I Doing This Right?",
    role: "Creative Director",
    type: "Web Design",
    year: "2023",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    ],
    coverImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
    paragraphs: [
      "This is a compelling project that explores the boundaries of creative expression. Through innovative design and thoughtful implementation, we've created something truly unique that challenges conventional thinking.",
      "The project represents a collaborative effort between diverse creative minds, bringing together expertise from multiple disciplines to craft an experience that resonates deeply with its audience."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
    paragraphs: [
      "A visually stunning animation project that brings music to life through dynamic 3D graphics and fluid motion.",
      "This project showcases advanced animation techniques combined with a deep understanding of narrative storytelling in visual media."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1563089145-599997674d11?w=1200",
    paragraphs: [
      "A creative exploration of motion graphics that blends reality with imagination through fluid animations and dynamic visual storytelling.",
      "This project demonstrates the power of motion design to create engaging narratives that captivate and inspire audiences."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
    paragraphs: [
      "An innovative UI/UX design project that reimagines digital interfaces through thoughtful user experience and intuitive interactions.",
      "The design philosophy centers on simplicity and functionality, creating seamless experiences that feel natural and effortless for users."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200",
    paragraphs: [
      "A brand identity project that captures the essence of memory through evocative visual design and compelling brand narratives.",
      "The identity system is built on the foundation of emotional connection, using design as a bridge between brands and their communities."
    ]
  },
  {
    id: 6,
    title: "Poor Thoughts",
    role: "Photographer",
    type: "Photography",
    year: "2021",
    video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
    images: [
      "https://picsum.photos/seed/project6-1/800/600",
      "https://picsum.photos/seed/project6-2/800/600",
      "https://picsum.photos/seed/project6-3/800/600",
    ],
    coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200",
    paragraphs: [
      "A photographic series that explores vulnerability and human emotion through intimate portraits and thought-provoking compositions.",
      "Each image tells a story of resilience and introspection, capturing moments of quiet contemplation and honest expression."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
    paragraphs: [
      "A cutting-edge web development project that breaks down traditional boundaries through innovative technical solutions and creative coding.",
      "This project pushes the limits of what's possible on the web, creating immersive digital experiences that blur the line between reality and the digital realm."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200",
    paragraphs: [
      "An immersive installation project that transforms spaces through light, sound, and interactive elements.",
      "The installation creates an otherworldly experience that invites viewers to explore the boundaries between art, technology, and human perception."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1561825514-f0fd38ad4bc6?w=1200",
    paragraphs: [
      "A versatile visual design project that celebrates the freedom of creative expression without boundaries or limitations.",
      "The design system is built on flexibility and adaptability, allowing for endless interpretations and applications across various media."
    ]
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
    coverImage: "https://images.unsplash.com/photo-1562577309-4932afbd2dc2?w=1200",
    paragraphs: [
      "An interactive design project that explores the flow and movement of digital content through dynamic user engagement.",
      "This project creates immersive experiences where users become active participants, shaping the narrative through their interactions and choices."
    ]
  }
];

export function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

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

  useEffect(() => {
    const foundProject = projects.find(p => slugify(p.title) === slug);
    setProject(foundProject || projects[0]);
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-page">
      {/* Cover Image with Title */}
      <div className="project-cover">
        <img src={project.coverImage} alt={project.title} />
        <div className="project-cover-overlay">
          <h1 className="project-cover-title">{project.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="project-content">
        <div className="project-content-main">
          {/* Text on Left */}
          <div className="project-text">
            <p>{project.paragraphs[0]}</p>
            <p>{project.paragraphs[1]}</p>
          </div>

          {/* Video on Right */}
          <div className="project-video">
            <video controls autoPlay muted loop>
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Gallery */}
        <div className="project-gallery">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${project.title} image ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
