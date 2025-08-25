import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "dist/images/project-1.png",
    title: "وبسایت شخصی",
    tags: ["portfolio", "react", "tailwind"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "dist/images/project-2.png",
    title: "مبدل دما",
    tags: ["js", "html","css"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "dist/images/project-3.png",
    title: "to-do لیست پیشرفته",
    tags: ["js", "html","css"],
    projectLink: "",
  },
  {
    imgSrc: "dist/images/project-4.png",
    title: "وبسایت هواشناسی",
    tags: ["API", "vanilla_JS"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "dist/images/project-5.png",
    title: "وبسایت فروشگاهی",
    tags: ["wordpress", "elementor"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">پروژه های من</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
