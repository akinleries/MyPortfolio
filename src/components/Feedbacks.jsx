import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { BiMailSend } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>You may as well need</p>
          <h2 className={styles.sectionHeadText}>My Resume</h2>

          <div className="my-10">
            <span>
              <Link
                to="mailto:ezekielakintunde18@gmail.com"
                className="flex items-center"
              >
                <BiMailSend className="mr-2" size={25} />
                ezekielakintunde18@gmail.com
              </Link>
            </span>

            <span className="mt-6 flex">
              <IoIosCall className="mr-2" size={25} />
              08022037134
            </span>

            <div className="flex gap-4 mt-8">
              <Link to="https://www.linkedin.com/in/ezekiel-akintunde">
                <BsLinkedin size={30} />
              </Link>

              <Link to="https://github.com/akinleries">
                <AiOutlineGithub size={30} />
              </Link>

              <Link to="https://www.instagram.com/lasisiezekiel/">
                <AiFillInstagram size={30} />
              </Link>
            </div>
          </div>

          <a
            href={Resume}
            download="Resume"
            className="bg-blue-700 hover:bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
