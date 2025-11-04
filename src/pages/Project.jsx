import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const projects = [
  {
    id: 1,
    title: "Ă̸̢̢ḿ̶̧͓ͅ I̶̛̐̈͠.  ̸͐̏͑̅D̴̘͈͂͝ȯ̸̟̽͛i̶͛͋̉̓n̴͂̎̒̿g̶̩̰̅͌ ̴̎͗̔͝T̴͐̒̚͠h̸͆̈̈́͝is Ri͈̯g̶͍͗̽͘h̴͌͗͆͝t̶͙̥͛́?̷̎͌",
    role: "Visual Artist",
    type: "Video Installation",
    year: "2025",
    video: "https://vimeo.com/1130098714?fl=pl&fe=sh",
    images: [
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      "https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    ],
    coverImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
    paragraphs: [
      "Am I Doing It Right? is a generative audiovisual system that embodies the creative anxiety many artists experience, the self-doubt and questioning that often accompany the artistic process. The system continually questions itself, loops endlessly, and exists in a state of digital uncertainty. The project is presented through a CRT television to evoke nostalgia and imperfection, emphasizing its analog and human qualities.",
      "An infinite loop of generative anxiety run autonomously for 2 to 2.5 minutes each cycle. There's no human input during the process, each run produces a new work of art born from frest doubts and shifting states of creativity."
    ],
    credit: "Creative Director: thaithantho | Developer: John Doe | Sound Design: Jane Smith"
  },
  {
    id: 2,
    title: "Dominic Fike - Mama's Boy (Unofficial Video)",
    role: "Assistant Director, Director of Photography, Editor, Colorist, VFX Artist",
    type: "Music Video",
    year: "2025",
    video: "https://vimeo.com/1130100307?fl=pl&fe=sh",
    images: [
      "https://picsum.photos/seed/project2-1/800/600",
      "https://picsum.photos/seed/project2-2/800/600",
      "https://picsum.photos/seed/project2-3/800/600",
      "https://picsum.photos/seed/project3-1/800/600",
      "https://picsum.photos/seed/project3-2/800/600",
      "https://picsum.photos/seed/project3-3/800/600",
    ],
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
    paragraphs: [
      "The mama’s boy music video explores themes of grief and remembrance as we change the audience’s perception of the lyrics in this complementary narrative. Our interpretation of ‘Mama’s Boy’ and its lyrics are illustrated through the perspective of a son whose parents have passed away and he is dealing with the grief of it all. The video particularly focuses on the memories of the dead mother and how her life and personality is reflected in her son. The goal was to depict the life of the parents when they were the same age as the son is now to highlight similarities. Although she is gone, he is spiritually closer to her than he thinks.",
      "This music video has been produced as part of the course The Spectacle of Music Video: From MTV to YouTube and is intended solely for educational and non-commercial purposes. All rights to the original music, lyrics, and recordings remain the property of their respective copyright owners. The inclusion of this material is for the purposes of study, analysis, and scholarly practice under the principles of fair use. No copyright infringement is intended."
    ],
    credit: `MUSIC:
Mama's Boy - Dominic Fike

Starring: ALISHA, EDOMATIC, ERIC NGUYEN, CHRYSTAL TRAN

PRODUCTION HOUSE - TITANIC PRODUCTION
Director: EDOMATIC, ALISHA, THAITHANTHO
Producer: ALISHA
Director of Photography: EDOMATIC
1st Assistant Director: THAITHANTHO
2nd Assistant Director: ALISHA
Production Assistant: KHIEM TANG
Art Director: ALISHA
Art Assistant: EDOMATIC, THAITHANTHO
Camera Operator: EDOMATIC
A.C: THAITHANTHO
Camera Equipment: THAITHANTHO, RMIT UNIVERSITY
D.I.T: THAITHANTHO

POST PRODUCTION - TITANIC PRODUCTION
Post Producer: ALISHA
Editor: EDOMATIC, THAITHANTHO
Colorist: THAITHANTHO
VFX Artist: THAITHANTHO, ALISHA
Special thanks to Heiniken, Vaseline, Corona, Hungry Jack's, Woollies, Kellogg's Corn Flakes, Scarlett Saturdays, RMIT University, UBER, KIA`
  },
  {
    id: 3,
    title: "Whimsical Reality",
    role: "Visual Artist",
    type: "Interactive Installation",
    year: "2025",
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
    role: "Director, Producer, Director of Photography, Editor, Colorist, VFX Artist",
    type: "Short Film",
    year: "2024",
    video: "https://vimeo.com/1081134450?fl=pl&fe=sh",
    images: [
      "https://picsum.photos/seed/project4-1/800/600",
      "https://picsum.photos/seed/project4-2/800/600",
      "https://picsum.photos/seed/project4-3/800/600",
    ],
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
    paragraphs: [
      "An innovative UI/UX design project that reimagines digital interfaces through thoughtful user experience and intuitive interactions.",
      "The design philosophy centers on simplicity and functionality, creating seamless experiences that feel natural and effortless for users."
    ],
    credit: `Cast: Buu Nguyen

Directors: Phuc Nguyen, Tuan Nguyen, thaithantho

Producer: Phuc Nguyen, Tuan Nguyen, thaithantho

DOP: Phuc Nguyen, Tuan Nguyen, thaithantho

Cam Op: thaithantho, Tuan Nguyen

Gaffer: Phuc Nguyen, Tuan Nguyen, thaithantho

DIT: thaithantho

BTS: Khiem Tăng

Camera and Lighting Equipment: thaithantho, RMIT University

Editor: thaithantho

Colorist: thaithantho

Sound Designer: Phuc Nguyen

Sound Op: Phuc Nguyen

Special thanks to Buu Nguyen, Khiem Tang, RMIT University`
  },
  {
    id: 5,
    title: "Shape of Memories",
    role: "Visual Artist",
    type: "Video",
    year: "2024",
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
    role: "Director, Producer, Director of Photography,Gaffer, DIT, BTS, Camera and Lighting Equipment, Editor, Colorist, VFX Artist",
    type: "Short Film",
    year: "2024",
    video: "https://vimeo.com/1016752750?fl=pl&fe=sh",
    images: [
      "https://picsum.photos/seed/project6-1/800/600",
      "https://picsum.photos/seed/project6-2/800/600",
      "https://picsum.photos/seed/project6-3/800/600",
    ],
    coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200",
    paragraphs: [
      "A photographic series that explores vulnerability and human emotion through intimate portraits and thought-provoking compositions.",
      "Each image tells a story of resilience and introspection, capturing moments of quiet contemplation and honest expression."
    ],
    credit: `Cast: Buu Nguyen, Quynh Nguyen

Directors: Phuc Nguyen, Tuan Nguyen, thaithantho

Producer: Phuc Nguyen, Tuan Nguyen, thaithantho

Production Assistant: Duy Vo

DOP: Phuc Nguyen, Tuan Nguyen, thaithantho

Cam Op: thaithantho

Gaffer: Phuc Nguyen, Tuan Nguyen, thaithantho

DIT: thaithantho

BTS: Duy Vo, My Le

Camera and Lighting Equipment: thaithantho, RMIT University

Editor: thaithantho

VFX Artist: Phuc Nguyen, Tuan Nguyen

Colorist: thaithantho

Sound Designer: thaithantho

Sound Op: Tuan Nguyen, Duy Vo

Composer: DRYBONE

Special thanks to Buu Nguyen, Quynh Nguyen, Ngan Nguyen, Duy Vo, My Le, Jessie Scott, Shaun Wilson, RMIT University`
  },
  {
    id: 7,
    title: "Dissolving Dimensions",
    role: "Visual Artist",
    type: "Interactive Installation",
    year: "2024",
    video: "https://vimeo.com/987500507?fl=pl&fe=sh",
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
    role: "Project Manager",
    type: "Creative Project",
    year: "2023",
    video: "",
    embedIframeSrc: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRMITMASSMEDIA%2Fvideos%2F659986486116648%2F&show_text=false&width=560&t=0",
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
    role: "Videographer, Editor, Colorist",
    type: "Music Video",
    year: "2023",
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
    role: "Director, Director of Photography, Editor, Colorist",
    type: "Short Film",
    year: "2022",
    video: "https://vimeo.com/863270629?fl=pl&fe=sh",
    images: [
      "https://picsum.photos/seed/project10-1/800/600",
      "https://picsum.photos/seed/project10-2/800/600",
      "https://picsum.photos/seed/project10-3/800/600",
    ],
    coverImage: "https://images.unsplash.com/photo-1562577309-4932afbd2dc2?w=1200",
    paragraphs: [
      "An interactive design project that explores the flow and movement of digital content through dynamic user engagement.",
      "This project creates immersive experiences where users become active participants, shaping the narrative through their interactions and choices."
    ],
    credit: `Cast: Huy Pham, Huy Nguyen

Director: thaithantho

Director of Photography: thaithantho

Editor: thaithantho

Colorist: thaithantho`
  }
];

export function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const carouselRef = useRef(null);
  const flickityInstanceRef = useRef(null);

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

  useEffect(() => {
    if (!project || !project.images || !carouselRef.current) return;

    // Initialize Flickity
    const flkty = new Flickity(carouselRef.current, {
      freeScroll: false,
      wrapAround: true,
      autoPlay: false,
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',
      contain: true,
      imagesLoaded: true,
      groupCells: false,
      draggable: false
    });

    flickityInstanceRef.current = flkty;

    // Cleanup
    return () => {
      if (flkty) {
        flkty.destroy();
      }
    };
  }, [project]);

  const handleNext = () => {
    const flkty = flickityInstanceRef.current;
    if (!flkty) return;
    const nextIndex = (flkty.selectedIndex + 1) % flkty.cells.length;
    flkty.select(nextIndex, true, true); // instant
  };

  const handlePrev = () => {
    const flkty = flickityInstanceRef.current;
    if (!flkty) return;
    const prevIndex = (flkty.selectedIndex - 1 + flkty.cells.length) % flkty.cells.length;
    flkty.select(prevIndex, true, true); // instant
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="home-root">
      <div className="home-layout">
        <section className="home-main">
          <h2 className="project-section-heading">{project.type}</h2>
          <h1 className="project-cover-title" style={{ position: 'static', transform: 'none', textAlign: 'left', fontSize: '26px', margin: '0 0 16px 0' }}>{project.title.toUpperCase()}</h1>

          <div className="project-text" style={{ marginBottom: '24px' }}>
            <h2 className="project-section-heading">About</h2>
            <p>{project.paragraphs[0]}</p>
            <p>{project.paragraphs[1]}</p>
          </div>

          {project.credit && (
            <div className="project-credit">
              <h2 className="project-section-heading">Credits</h2>
              <p>{project.credit}</p>
            </div>
          )}

          <div className="project-gallery" style={{ marginTop: '24px' }}>
            <h2 className="project-section-heading">Gallery</h2>
            <div className="project-gallery-container">
              <button 
                className="gallery-nav-btn gallery-nav-left"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <div className="carousel" ref={carouselRef}>
                {project.images.map((img, idx) => (
                  <div key={idx} className="carousel-cell">
                    <img src={img} alt={`${project.title} image ${idx + 1}`} />
                  </div>
                ))}
              </div>
              <button 
                className="gallery-nav-btn gallery-nav-right"
                onClick={handleNext}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <aside className="home-side">
          <div className="project-hover-panel">
            <div className="project-hover-name">{project.title}</div>
            <div className="project-hover-meta">
              <div className="project-hover-row">
                <span className="label">Type</span>
                <span className="value">{project.type}</span>
              </div>
              <div className="project-hover-row">
                <span className="label">Role</span>
                <span className="value">{project.role}</span>
              </div>
              <div className="project-hover-row">
                <span className="label">Year</span>
                <span className="value">{project.year}</span>
              </div>
            </div>
            <div className="home-side-video">
              {(() => {
                if (project.embedIframeSrc) {
                  return (
                    <iframe
                      src={project.embedIframeSrc}
                      style={{ width: '100%', height: '100%', display: 'block', border: '0' }}
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      title={`${project.title} video`}
                    />
                  );
                }
                const isVimeo = typeof project.video === 'string' && project.video.includes('vimeo.com');
                if (isVimeo) {
                  const match = project.video.match(/vimeo\.com\/(\d+)/);
                  const vimeoId = match?.[1];
                  const embedUrl = vimeoId
                    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&byline=0&title=0&portrait=0&controls=1&background=0`
                    : undefined;
                  return embedUrl ? (
                    <iframe
                      src={embedUrl}
                      style={{ width: '100%', height: '100%', display: 'block', border: '0' }}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      allowFullScreen
                      title={`${project.title} video`}
                    />
                  ) : null;
                }
                return (
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={project.video}
                  />
                );
              })()}
            </div>
          </div>
        </aside>
      </div>
      <div className="home-footer">© thaithantho's portfolio. All Right Reserved</div>
    </div>
  );
}
