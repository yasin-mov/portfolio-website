// import hero_sec_prof from "dist/images/profile.svg";
// import hero_sec from "dist/images/Doei.png";
import { ButtonOutline, ButtonPrimary } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="w-12 h-12 rounded-lg">
              <img
                src="images/profile.svg"
                width={12}
                height={12}
                alt="yasin movahedi"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-lg tracking-wide">
              <span className="relative w-4 h-4 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              در دسترس
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            ساخت وب‌سایت های مدرن برای آینده
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="دریافت رزومه" icon="download" />
            <ButtonOutline
              href="#about"
              label="برو پایین"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto">
            <img
              src="images/Doei.png"
              width={658}
              height={800}
              alt=""
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
