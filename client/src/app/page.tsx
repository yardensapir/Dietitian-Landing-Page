import Benefits from "./components/home/Benefits";
import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import Testimonials from "./components/home/Testimonials";
import FeaturedBlogPosts from "./components/home/FeaturedBlogPosts";
import FAQPreview from "./components/home/FAQPreview";
import CallToAction from "./components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <AboutPreview />
      {/* <Testimonials /> */}
      <FeaturedBlogPosts />
      <FAQPreview />
      <CallToAction />
    </>
  );
}
