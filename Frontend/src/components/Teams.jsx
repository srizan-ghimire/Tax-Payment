import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { teamMembers } from "../data/TeamMembers";
const Teams = () => {
  return (
    <section id="our-team" className="py-12 bg-gray-100">
      <div className="w-[90%] mx-auto ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center pb-2"
        >
          <span className="text-primary font-bold text-2xl md:text-3xl relative inline-block stroke-current">
            Our Teams
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 max-sm:gap-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 my-6 text-center bg-white rounded-lg shadow-md"
            >
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full mx-auto">
                <img
                  src={member.imgSrc}
                  alt={`Team Member ${index + 1}`}
                  className="absolute top-0 left-0 object-cover w-full h-full"
                />
              </div>

              <h3 className="my-2 text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-gray-700">Role: {member.role}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={`https://www.facebook.com/profile.php?id=${member.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-xl text-gray-700 hover:text-primary"
                >
                  <FaFacebook />
                </a>
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-xl text-gray-700 hover:text-primary"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`https://github.com/${member.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-primary"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
