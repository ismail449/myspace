import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About us",
  description: "About NextSpace",
};

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
};

export default About;
