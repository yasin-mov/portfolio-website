import logo from "../images/vite.svg";

const aboutItems = [
  {
    label: "پروژه های انجام شده",
    number: 7,
  },
  {
    label: "سال تجربه در زمینه فرانت-اند",
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            سلام 👋 من دویی یاسین هستم. مسیر یادگیری فرانت‌اند رو شروع کردم و
            تمرکزم روی ساخت رابط‌های کاربری مدرن و جذابه. به Clean Code، طراحی
            ریسپانسیو و تجربه کاربری اهمیت زیادی می‌دم. همیشه دنبال اینم که
            مهارت‌هام رو با انجام پروژه‌های واقعی ارتقا بدم.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src={logo}
              alt=""
              className="ml-auto md:w-[40px md:h-40px"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
