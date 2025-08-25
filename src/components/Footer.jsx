import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "خانه",
    href: "#home",
  },
  {
    label: "درباره من",
    href: "#about",
  },
  {
    label: "پروژه ها",
    href: "#work",
  },
  {
    label: "راه های ارتباط",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "Telegram",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              بیایید باهم همکاری کنیم
            </h2>
            <ButtonPrimary
              href="mailto:mo.yasin.mo83@gmail.com"
              label="شروع پروژه"
              icon="chevron_left"
              classes="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">نقشه سایت</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">شبکه های اجتماعی</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.png" width={120} height={120} alt="logo" />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            <span className="text-zinc-200 reveal-up">
            © 2025 Crafted with ❤️ by Doyi Yasin. All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
