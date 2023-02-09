import HeaderImage from "../../images/aboutheader.jpg";
import storyimage from "../../images/stoyimage.jpg";
import visionimage from "../../images/visionimage.jpg";
import misionimage from "../../images/misionimage.jpg";
import Header from "../../components/Header";
import "./about.css";
import AboutComp from "../../components/AboutComp";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
        soluta sapiente maxime ut neque quod accusamus!
      </Header>

      <AboutComp
        className="about__story"
        title="Our Story"
        image={storyimage}
        text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati laudantium quibusdam iure harum aperiam a laboriosam eos expedita velit dolore sit vel fugit, dignissimos iusto sequi minus optio tenetur."
        text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus dolore sint voluptates eveniet est dignissimos labore numquam ipsam eos"
        text3="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium."
      />

      <AboutComp
        className="vision__story"
        title="Our Vision"
        image={visionimage}
        text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati laudantium quibusdam iure harum aperiam a laboriosam eos expedita velit dolore sit vel fugit, dignissimos iusto sequi minus optio tenetur."
        text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus dolore sint voluptates eveniet est dignissimos labore numquam ipsam eos"
      />

      <AboutComp
        className="about__story"
        title="Our Mission"
        image={misionimage}
        text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati laudantium quibusdam iure harum aperiam a laboriosam eos expedita velit dolore sit vel fugit, dignissimos iusto sequi minus optio tenetur."
        text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus dolore sint voluptates eveniet est dignissimos labore numquam ipsam eos"
      />
    </>
  );
};

export default About;
