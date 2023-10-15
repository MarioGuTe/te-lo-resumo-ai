import s from "./particle/style.module.css";

const Hero = () => {
  return (
    <section className={s.hero_section}>
      <h1>
        Resume artículos con <br />
        <span>OpenAI GPT-4</span>
      </h1>
      <h2>
        Agiliza tu lectura con SINTESIS <br />
        un resumidor de artículos potenciado por inteligencia artificial
      </h2>
    </section>
  );
};

export default Hero;
