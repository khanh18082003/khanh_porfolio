import Button from "../../components/ui/Button";
import { FiDownload, FiArrowDown } from "react-icons/fi";

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Button as="a" href="/#work">
        <FiArrowDown size={16} />
        View Projects
      </Button>
      <Button
        as="a"
        href="cv.pdf"
        target="_blank"
        rel="noreferrer"
        variant="secondary"
      >
        <FiDownload size={16} />
        Download CV
      </Button>
    </div>
  );
}

export default HeroActions;
