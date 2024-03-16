import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaAndroid,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    label: "Javascript",
    Icon: RiJavascriptFill,
  },
  {
    label: "HTML",
    Icon: FaHtml5,
  },
  {
    label: "CSS",
    Icon: FaCss3,
  },
  {
    label: "React",
    Icon: FaReact,
  },
  {
    label: "NextJS",
    Icon: TbBrandNextjs,
  },
  {
    label: "Typescript",
    Icon: BiLogoTypescript,
  },
  {
    label: "Redux",
    Icon: SiRedux,
  },
  {
    label: "Git",
    Icon: FaGitAlt,
  },
  {
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    label: "Java",
    Icon: FaJava,
  },
  {
    label: "Android",
    Icon: FaAndroid,
  },
  {
    label: "Sass",
    Icon: FaSass,
  },
  {
    label: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    label: "Bootstrap",
    Icon: FaBootstrap,
  },
  {
    label: "RWD",
    Icon: FaCode,
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      {/* <div className="skills__container container">
        <Frontend />
        <Backend />
      </div>
      <br /> */}
      <div className="container">
        <div className="skills__content flex">
          {skills.map((item, index) => {
            const { Icon, label } = item;
            return (
              <div key={index} className="skills__box">
                <Icon /> <span className="skills__name">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
