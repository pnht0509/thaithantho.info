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
      "https://files.thaithantho.info/am_i_doing_this_right_1.png",
      "https://files.thaithantho.info/am_i_doing_this_right_2.png",
      "https://files.thaithantho.info/am_i_doing_this_right_3.png",
    ],
    coverImage: "",
    paragraphs: [
      "Am I Doing It Right? is a generative audiovisual system that embodies the creative anxiety many artists experience, the self-doubt and questioning that often accompany the artistic process. The system continually questions itself, loops endlessly, and exists in a state of digital uncertainty. The project is presented through a CRT television to evoke nostalgia and imperfection, emphasizing its analog and human qualities.",
      "An infinite loop of generative anxiety run autonomously for 2 to 2.5 minutes each cycle. There's no human input during the process, each run produces a new work of art born from frest doubts and shifting states of creativity."
    ],
    // credit: "Creative Director: thaithantho | Developer: John Doe | Sound Design: Jane Smith"
  },
  {
    id: 2,
    title: "Dominic Fike - Mama's Boy (Unofficial Video)",
    role: "Assistant Director, Director of Photography, Editor, Colorist, VFX Artist",
    type: "Music Video",
    year: "2025",
    video: "https://vimeo.com/1130100307?fl=pl&fe=sh",
    images: [
      "https://files.thaithantho.info/mama_boy_1.png",
      "https://files.thaithantho.info/mama_boy_2.png",
      "https://files.thaithantho.info/mama_boy_3.png",
      "https://files.thaithantho.info/mama_boy_4.png",
      "https://files.thaithantho.info/mama_boy_5.png",
      "https://files.thaithantho.info/mama_boy_6.png",
      "https://files.thaithantho.info/mama_boy_7.png",
      "https://files.thaithantho.info/mama_boy_8.png",  
      "https://files.thaithantho.info/mama_boy_9.png",
      "https://files.thaithantho.info/mama_boy_10.png",
      "https://files.thaithantho.info/mama_boy_11.png",
      "https://files.thaithantho.info/mama_boy_12.png",
      "https://files.thaithantho.info/mama_boy_13.png",
      "https://files.thaithantho.info/mama_boy_14.png",
      "https://files.thaithantho.info/mama_boy_15.png",
      "https://files.thaithantho.info/mama_boy_16.png"
    ],
    coverImage: "",
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
    video: "https://youtu.be/arwkk71HpEw",
    images: [
      "https://files.thaithantho.info/whimsical_reality_1.png",
      "https://files.thaithantho.info/whimsical_reality_2.png",
      "https://files.thaithantho.info/whimsical_reality_3.png",
      "https://files.thaithantho.info/whimsical_reality_4.png",
      "https://files.thaithantho.info/whimsical_reality_5.png"
    ],
    coverImage: "",
    paragraphs: [
      "This project is a realtime interactive work that will generates AI images mirroring people interactions. This will create an immersive experience. The audience will step into a playful and surreal immersive world that responds to their presence and imaginations.",

      "The concepts of whimsical and weird reality explore the intricate interplay between the fantastical and the mundane, creating a unique fusion that challenges conventional boundaries of perception and imagination. Whimsy introduces elements of lightheartedness, unpredictability, and charm, often evoking a sense of wonder and delight. In contrast, the weird delves into the uncanny, unsettling, or surreal, pushing the limits of what is considered normal or logical. Together, these ideas transform everyday experiences by infusing them with extraordinary qualities, encouraging viewers or participants to question their understanding of reality.",
      
      "This blending often manifests in art, literature, and media, where ordinary settings are imbued with magical or bizarre elements. By merging the familiar with the fantastical, whimsical and weird realities invite audiences to step outside their comfort zones and embrace imaginative possibilities. This interplay continues to inspire creators and thinkers across disciplines, offering endless opportunities to reimagine the world around us."
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
      "https://files.thaithantho.info/how_to_uncake_1.png",
      "https://files.thaithantho.info/how_to_uncake_2.png",
      "https://files.thaithantho.info/how_to_uncake_3.png",
      "https://files.thaithantho.info/how_to_uncake_4.jpg",
      "https://files.thaithantho.info/how_to_uncake_5.jpg",
      "https://files.thaithantho.info/how_to_uncake_6.jpg",
      "https://files.thaithantho.info/how_to_uncake_7.jpg",
      "https://files.thaithantho.info/how_to_uncake_8.jpg",
      "https://files.thaithantho.info/how_to_uncake_9.jpg",
      "https://files.thaithantho.info/how_to_uncake_10.jpg",
      "https://files.thaithantho.info/how_to_uncake_11.jpg",
      "https://files.thaithantho.info/how_to_uncake_12.jpg",
      "https://files.thaithantho.info/how_to_uncake_13.jpg",
      "https://files.thaithantho.info/how_to_uncake_14.jpg",
    ],
    coverImage: "",
    paragraphs: [
      "Our project centers on the theme “Uncanny”, reimagining a simple cooking video into something disturbingly surreal through sound, lighting, and color manipulation."
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
  // {
  //   id: 5,
  //   title: "Shape of Memories",
  //   role: "Visual Artist",
  //   type: "Video",
  //   year: "2024",
  //   video: "https://assets.mixkit.co/videos/4111/4111-720.mp4",
  //   images: [
  //     // "https://picsum.photos/seed/project5-1/800/600",
  //     // "https://picsum.photos/seed/project5-2/800/600",
  //     // "https://picsum.photos/seed/project5-3/800/600",
  //   ],
  //   coverImage: "",
  //   paragraphs: [
  //     "Shapes of Memories is an audiovisual project that explores the formation of memories through distinct shapes. Using various audiovisual elements, this work aims to activate memories, highlighting the dynamic relationship between sound and visual stimuli to evoke both personal and collective recollections. Shapes of Memories features a blend of ambient and electronic sounds alongside deconstructed visuals, creating a surreal and immersive experience for the audience. This combination enhances sensory engagement and deepens the exploration of how memories are intricately woven into our experiences.",
  //     "The project delves into how memories are constructed, deconstructed, and reconstructed through audiovisual media. It challenges traditional narratives by presenting memory as a fluid and fragmented experience rather than a linear recollection of past events."
  //   ]
  // },
  {
    id: 6,
    title: "Poor Thoughts",
    role: "Director, Producer, Director of Photography,Gaffer, DIT, BTS, Camera and Lighting Equipment, Editor, Colorist, VFX Artist",
    type: "Short Film",
    year: "2024",
    video: "https://vimeo.com/1016752750?fl=pl&fe=sh",
    images: [
      "https://files.thaithantho.info/poor_thought_1.jpg",
      "https://files.thaithantho.info/poor_thought_2.jpg",
      "https://files.thaithantho.info/poor_thought_3.jpg",
      "https://files.thaithantho.info/poor_thought_4.jpg",
      "https://files.thaithantho.info/poor_thought_5.jpg",
      "https://files.thaithantho.info/poor_thought_6.jpg",
      "https://files.thaithantho.info/poor_thought_7.jpg",
      "https://files.thaithantho.info/poor_thought_8.jpg",
      "https://files.thaithantho.info/poor_thought_9.jpg",
      "https://files.thaithantho.info/poor_thought_10.jpg",
      "https://files.thaithantho.info/poor_thought_11.jpg",
      "https://files.thaithantho.info/poor_thought_12.jpg"
    ],
    coverImage: "",
    paragraphs: [
      "Our endeavor will be a narrative experiment that mostly utilizes visual effects. The so-called short film tells the tale of a teenager's irrational thinking around three in the morning, which could eventually lead to the trippiest experiment that is seen on screen.",
      "The work will be titled \"Poor Thoughts\" and will focus on the themes of \"Growth, Chaos, and Evolution\". The story's theme is that the main character is around our age and is about to take the crucial shift from adolescence to maturity. The visual will be a companion piece that aims to express the fundamental subject of the narrative diversely and more ambitiously, allowing viewers to build their perspective of the story."
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
      "https://files.thaithantho.info/dissolving_dimesion_1.png",
      "https://files.thaithantho.info/dissolving_dimesion_2.png"
    ],
    coverImage: "",
    paragraphs: [
      "Dissolving Dimensions is an interactive installation that brings you to a digital world of vibrant cities via interactive and immersive experiences. Viewers can explore common spaces and feel the pulse of daily existence in every distinct area.",

      "Melbourne’s CBD stands as a vibrant melting pot of cultures, a dynamic tapestry woven from countless threads of heritage, tradition, and modernity. Through the use of 3D scanning technology, this familiar urban reality is reimagined and dissolved, transforming into a mesmerizing constellation of points that invites audiences to explore and interact within a digital reflection of the city’s diversity."
    ]
  },
  {
    id: 8,
    title: "Efferescent",
    role: "Project Manager, Director of Photography, Videographer, Editor, Colorist",
    type: "Creative Project",
    year: "2023",
    video: "",
    embedIframeSrc: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRMITMASSMEDIA%2Fvideos%2F659986486116648%2F&show_text=false&width=560&t=0",
    images: [
      "https://files.thaithantho.info/efferescent_2.jpg",
      "https://files.thaithantho.info/efferescent_1.jpg",
      "https://files.thaithantho.info/efferescent_3.jpg",
      "https://files.thaithantho.info/efferescent_4.jpg",
      "https://files.thaithantho.info/efferescent_6.jpg",
      "https://files.thaithantho.info/efferescent_7.jpg",
      "https://files.thaithantho.info/efferescent_8.jpg",

    ],
    coverImage: "",
    paragraphs: [
      "EFFERVESCENT tells the story of a mermaid who is curious about the outside world, but can her journey be as fairytale-like as she imagines? Or will the dark side of society lead her down a different path in this unfamiliar land? "
    ],
    credit: `Project Manager: thaithantho, Pat Phuong, Vo Duy

Videographer: thaithantho

Editor: thaithantho

Colorist: thaithantho

Project Leader: Nguyen Trong Lam

Project Assistant: Pham Viet, Quoc Buu

Director: Hoang Lan

Producer: Pham Viet

Producer Assistant:  Quynh Huong

D.O.P: thaithantho

Creative Director & Screenwriter: Hoang Lan, Quoc Buu

Art Director: Pat Phuong

Assistant Producer: Quoc Buu

Photographer: Nguyen Trong Lam, Ta Khanh Linh, Quoc Buu, Hoang Lan, Linh Le, Huynh Nhu, Binh Quoc
Camera Operator: Vo Duy, Quoc Buu, Trang Pham, Viet Tai Chinh

Set Dresser: Bong Meo, Quynh Huong, Bao Lan

Storyboard: Hoang Lan

Editor: Pat Phuong, Nguyen Trong Lam, Ta Khanh Linh, Manh Le, Trang Pham, Viet Tai Chinh, Quoc Buu

Assistant Editor: Vo Duy

Graphic Designer: Pham Viet, Manh Le, Trang Pham, Hoang Lan, Quynh Huong, Viet Pham, Bong Meo, Bao Lan

Sound Design: Viet Tai Chinh

Colourist: thaithantho, Hoang Lan

Music: Like Someone In Love (Björk)

Advisor: thaithantho, Pat Phuong, Vo Duy, Khanh Duy, Luu Duc Lam`
  },
  {
    id: 9,
    title: "Anybody's Anything",
    role: "Videographer, Editor, Colorist",
    type: "Music Video",
    year: "2023",
    video: "https://vimeo.com/947821180",
    teaserVideo: "https://vimeo.com/1014373463?fl=pl&fe=sh",
    images: [
      "https://files.thaithantho.info/anybody_anything_1.jpg",
      "https://files.thaithantho.info/anybody_anything_2.jpg",
      "https://files.thaithantho.info/anybody_anything_3.jpg",
      "https://files.thaithantho.info/anybody_anything_4.jpg",
      "https://files.thaithantho.info/anybody_anything_5.jpg"
    ],
    coverImage: "",
    paragraphs: [
      "A teaser and music video created for a major music event featuring artists such as Hoang Thuy Linh, Double 2T, Wean, Changg, and MC Khiemslay, attracting an audience of over 300 guests."
    ],
    credit: `Music: Turnover - Dizzy On The Comedown

Written: Lam Luu

Directed: Lam Luu and Nghia Nguyen

Assistant Director: Hoang Duy

Producer: Khanh Duy

DOP: Lam Luu, Thai Phan

Cam OP: Thai Phan

Art Director: Pat Phuong

Photographer: Lam Nguyen

BTS by Jason Vo

Editor: Lam Luu, Thai Phan

Colorist: Thai Phan`
  },
  {
    id: 10,
    title: "Streamer",
    role: "Director, Director of Photography, Editor, Colorist",
    type: "Short Film",
    year: "2022",
    video: "https://vimeo.com/863270629?fl=pl&fe=sh",
    images: [
      "https://files.thaithantho.info/streamer_1.jpg",
      "https://files.thaithantho.info/streamer_2.jpg",
      "https://files.thaithantho.info/streamer_3.jpg"
    ],
    coverImage: "", 
    paragraphs: [
      "This short film follows a young man determined to pursue his dream of becoming a streamer despite his family’s strong disapproval. As his passion for online content creation grows, he must confront the tension between personal ambition and familial expectations."
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
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 767 : false));

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
    if (typeof window === "undefined") return;
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

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
          {/* <h2 className="project-section-heading">{project.type}</h2> */}
          {/* <h1 className="project-cover-title" style={{ position: 'static', transform: 'none', textAlign: 'left', fontSize: '26px', margin: '0 0 16px 0' }}>{project.title.toUpperCase()}</h1> */}

          <div className="project-text" style={{ marginBottom: '24px' }}>
            <h2 className="project-section-heading" style={{ paddingTop: '10px' }}>About</h2>
            <p>{project.paragraphs[0]}</p>
            <p>{project.paragraphs[1]}</p>
          </div>

          {project.credit && (
            <div className="project-credit">
              <h2 className="project-section-heading">Credits</h2>
              <p>{project.credit}</p>
            </div>
          )}

          {project.teaserVideo && (
            <div className="project-teaser" style={{ marginTop: '24px', marginBottom: '24px' }}>
              <h2 className="project-section-heading">Teaser</h2>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                {(() => {
                  const match = project.teaserVideo.match(/vimeo\.com\/(\d+)/);
                  const vimeoId = match?.[1];
                  const embedUrl = vimeoId
                    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=0&muted=0&loop=0&byline=0&title=0&portrait=0&controls=1`
                    : project.teaserVideo;
                  return (
                    <iframe
                      src={embedUrl}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      allowFullScreen
                      title={`${project.title} teaser`}
                    />
                  );
                })()}
              </div>
            </div>
          )}

          {isMobile && (project.video || project.embedIframeSrc) && (
            <div className="project-video" style={{ marginTop: '24px', marginBottom: '24px' }}>
              <h2 className="project-section-heading">Video</h2>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                {(() => {
                  if (project.embedIframeSrc) {
                    return (
                      <iframe
                        src={project.embedIframeSrc}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
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
                      ? `https://player.vimeo.com/video/${vimeoId}?autoplay=0&muted=0&loop=0&byline=0&title=0&portrait=0&controls=1&background=0`
                      : undefined;
                    return embedUrl ? (
                      <iframe
                        src={embedUrl}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        allowFullScreen
                        title={`${project.title} video`}
                      />
                    ) : null;
                  }
                  const isYouTube = typeof project.video === 'string' && (project.video.includes('youtube.com') || project.video.includes('youtu.be'));
                  if (isYouTube) {
                    const idFromShort = project.video.match(/youtu\.be\/([\w-]+)/)?.[1];
                    const idFromWatch = project.video.match(/[?&]v=([\w-]+)/)?.[1];
                    const ytId = idFromShort || idFromWatch;
                    const embedUrl = ytId
                      ? `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=0&loop=0&controls=1&modestbranding=1&rel=0`
                      : undefined;
                    return embedUrl ? (
                      <iframe
                        src={embedUrl}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={`${project.title} video`}
                      />
                    ) : null;
                  }
                  if (project.video) {
                    return (
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        src={project.video}
                      />
                    );
                  }
                  return null;
                })()}
              </div>
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
                const isYouTube = typeof project.video === 'string' && (project.video.includes('youtube.com') || project.video.includes('youtu.be'));
                if (isYouTube) {
                  const idFromShort = project.video.match(/youtu\.be\/([\w-]+)/)?.[1];
                  const idFromWatch = project.video.match(/[?&]v=([\w-]+)/)?.[1];
                  const ytId = idFromShort || idFromWatch;
                  const embedUrl = ytId
                    ? `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=1&modestbranding=1&rel=0`
                    : undefined;
                  return embedUrl ? (
                    <iframe
                      src={embedUrl}
                      style={{ width: '100%', height: '100%', display: 'block', border: '0' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
