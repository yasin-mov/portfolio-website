import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "dist/images/html.svg",
    label: "Html",
    desc: "ساختاردهی استاندارد",
  },
  {
    imgSrc: "dist/images/css3.svg",
    label: "Css",
    desc: "طراحی رابط‌های کاربری",
  },
  {
    imgSrc: "dist/images/javascript.svg",
    label: "JavaScript",
    desc: "اضافه‌کردن تعاملات پویا به وب‌سایت‌ها.",
  },
  {
    imgSrc: "dist/images/tailwindcss.svg",
    label: "TailwindCss",
    desc: "طراحی سریع و مدرن.",
  },
  {
    imgSrc: "dist/images/react.svg",
    label: "React",
    desc: "ساخت کامپوننت‌های قابل‌استفاده.",
  },
  {
    imgSrc: "dist/images/nodejs.svg",
    label: "NodeJs",
    desc: "اجرای جاوااسکریپت در سمت سرور",
  },
  {
    imgSrc: "images/git.svg",
    label: "Git",
    desc: "مدیریت تغییرات کد",
  },
  {
    imgSrc: "images/github.svg",
    label: "GitHub",
    desc: "اشتراک‌گذاری کد آنلاین",
  },
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">مهارت های من</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          من روی طراحی و توسعه رابط‌های کاربری مدرن با استفاده از HTML، CSS و
          JavaScript تمرکز دارم. با اصول طراحی واکنش‌گرا و بهینه‌سازی تجربه
          کاربری آشنایی دارم و از فریم‌ورک‌ها و ابزارهایی مثل React.js و
          Tailwind CSS برای ساخت وب‌سایت‌های سریع و قابل‌اعتماد استفاده می‌کنم.
          همچنین به ابزارهایی مثل VS Code، Git و Figma مسلط هستم و همواره در حال
          یادگیری تکنولوژی‌های جدید برای ارتقای مهارت‌هایم هستم
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
