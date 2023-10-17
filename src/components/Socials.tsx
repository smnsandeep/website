import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@/context/ThemeContxt";

const Socials = () => {
  const themeContext = useTheme();
  const { theme } = themeContext;

  return (
    <div className="flex justify-center items-center">
      <a
        href="https://www.youtube.com/channel/UCKhhRdyD5hik6alGEBCMPrQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl mx-4 text-gray-600 dark:text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        href="https://github.com/smnsandeep"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl mx-4 text-gray-600 dark:text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://medium.com/@sandeepsmn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl mx-4 text-gray-600 dark:text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a
        href="https://www.linkedin.com/in/sandeep-suman/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl mx-4 text-gray-600 dark:text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default Socials;
