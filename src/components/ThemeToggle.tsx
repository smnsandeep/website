import { Theme, useTheme } from "@/context/ThemeContxt";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleButton = () => {
  const { theme, setTheme} = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <button onClick={toggleDarkMode}>
      <FontAwesomeIcon
        icon={theme === Theme.LIGHT ? faSun : faMoon}
        className={theme === Theme.DARK ? "fa-inverse" : ""}
      />
    </button>
  );
};

export default ToggleButton;