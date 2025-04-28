"use client";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import ContactForm from "./contactForm";
import PortfolioCard from "./portfoliCards";
import SkillCard from "./skillCards";
import { IconContext } from "react-icons";
import FadeInImage from "./FadeInImage";
import FadeInText from "./FadeInText";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end h-[63ppx] bg-[#6b7f9c]">
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
        <div className="px-50 py-10 bg-yellow-300">
          <div className="flex justify-center items-center h-[calc(100vh-63px)] gap-10">
            <div className="flex flex-col justify-between h-[300px]">
              <FadeInImage
                src="/Hello.svg"
                alt="Hello"
                delay={0}
                width={300}
                height={200}
                className="w-100 h-auto"
              />
              <div className="py-10">
                <FadeInImage
                  className="w-35 h-auto"
                  src="/hejLogo.svg"
                  alt="hej"
                  width={300}
                  height={200}
                  delay={0.3}
                />
              </div>
              <FadeInImage
                className="w-200 h-auto"
                src="/konnitiwa.svg"
                alt="konnitiwa"
                width={300}
                height={200}
                delay={0.6}
              />
            </div>

            <div>
              <FadeInText delay={1.3} />
            </div>
          </div>

          <Element name="about">
            <div className="py-15">
              <div className="flex justify-center">
                <div className="py-20 ">
                  <h1 className="font-bold text-3xl">About me</h1>
                </div>
              </div>
              <div className="flex justify-center pb-50">
                <div className="w-6/13 flex justify-center">
                  <Image
                    className=""
                    src="/path36.svg"
                    alt="my icon"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="w-7/13">
                  <div className="w-2/3">
                    <div className="pb-7">
                      <p>
                        A passionate and curious aspiring frontend developer
                        based in Sweden.
                      </p>
                      <p>
                        With a background in sales & marketing in Japan and a
                        love for design, I bring people-first energy into code.
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
            <div className="py-15">
              <div className="flex justify-center py-20">
                <h1 className="font-bold text-3xl">Portfoio</h1>
              </div>
              <div className="column-3 gap-7 flex justify-center pb-50">
                <PortfolioCard />
              </div>
            </div>
          </Element>
          <Element name="contact">
            <div className="pb-50">
              <div className="flex justify-center py-10">
                <h1 className="font-bold text-3xl">Contact me</h1>
              </div>
              <div className="flex">
                <div className="w-6/13 flex justify-center">
                  <div className="border rounded-sm w-1/2 h-2/3 bg-yellow-50">
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
                <div className="pl-3 w-7/13">
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
