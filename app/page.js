"use client";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import ContactForm from "./contactForm";
import PortfolioCard from "./portfoliCards";
import SkillCard from "./skillCards";
import { IconContext } from "react-icons";
import FadeInImage from "./FadeInImage";
import FadeInText from "./FadeInText";
import { Link, Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end h-[50px] md:h-[63px] bg-[#6b7f9c]">
          <ul className="flex flex-row">
            <li className="p-5">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#58a4b0] transition-colors text-white"
              >
                About me
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#58a4b0] transition-colors text-white"
              >
                Portfolio
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#58a4b0] transition-colors text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-10 md:px-20 bg-yellow-300">
          <div className="flex flex-col md:flex-row justify-center items-center h-[calc(100vh-50px)] md:h-[calc(100vh-63px)] gap-24">
            <div className="flex flex-col justify-center items-center h-[300px]">
              <FadeInImage
                src="/Hello.svg"
                alt="Hello"
                delay={0}
                width={300}
                height={200}
                className="w-full max-w-[180px] md:max-w-[300px] h-auto"
              />
              <div className="py-10">
                <FadeInImage
                  className="w-full max-w-[100px] md:max-w-[200px] h-auto"
                  src="/hejLogo.svg"
                  alt="hej"
                  width={300}
                  height={200}
                  delay={0.3}
                />
              </div>
              <FadeInImage
                className="w-full max-w-[180px] md:max-w-[300px] h-auto"
                src="/konnitiwa.svg"
                alt="konnitiwa"
                width={300}
                height={200}
                delay={0.6}
              />
            </div>

            <div className="pt-4 md:pt-0">
              <FadeInText delay={1.3} />
            </div>
          </div>

          <Element name="about">
            <div className="py-16 px-4 md:px-0">
              <div className="flex justify-center">
                <div className="py-20 ">
                  <h1 className="font-bold text-3xl">About me</h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="w-full md:w-1/3 flex justify-center">
                  <Image
                    className="max-w-full h-auto"
                    src="/path36.svg"
                    alt="my icon"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start  text-center md:text-left">
                  <div className="mb-6 space-y-4">
                    <div className="pb-7">
                      <p>
                        I'm a passionate and curious aspiring frontend developer
                        based in Sweden, transitioning from a background in
                        sales and marketing in Japan.
                      </p>
                      <br />
                      <p>
                        I started learning frontend development on my own,
                        driven by a love for design and problem-solving. While I
                        don’t have professional experience as an engineer yet,
                        I’ve built several apps independently and with the
                        support of my partner (a professional developer), using
                        a monorepo setup, pull requests, and code reviews.
                      </p>
                      <br />
                      <p>
                        I value communication, continuous learning, and turning
                        ideas into user-friendly, responsive interfaces.
                      </p>
                    </div>
                    <SkillCard />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </Element>
          <Element name="portfolio">
            <div className="py-16">
              <div className="flex justify-center py-20">
                <h1 className="font-bold text-3xl">Portfolio</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-7 pb-20">
                <PortfolioCard />
              </div>
            </div>
          </Element>
          <Element name="contact">
            <div className="pb-20">
              <div className="flex justify-center py-10">
                <h1 className="font-bold text-3xl">Contact me</h1>
              </div>
              <div className="flex flex-col md:flex-row  md:justify-center md:items-start gap-10">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="border rounded-sm w-full max-w-[300px] h-auto bg-yellow-50">
                    <IconContext.Provider
                      value={{
                        color: "blue",
                        size: "1.8rem",
                        className: "global-class-name",
                      }}
                    >
                      <div className="flex justify-center m-5">
                        <CiMail />
                      </div>
                    </IconContext.Provider>
                    <div className="text-center pb-5">
                      <p className="font-bold">Email</p>
                      <p>maho.kurauchi_biz@gmail.com</p>
                    </div>
                    <div className="text-center pb-5">
                      <a
                        href="mailto:maho.kurauchi_biz@gmail.com?"
                        className="cursor-pointer hover:text-[#58a4b0] transition-colors"
                      >
                        Send a message
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 flex justify-center md:justify-start">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Element>
        </div>
        <div className="pt-20 bg-[#6b7f9c]"></div>
      </div>
    </>
  );
}
