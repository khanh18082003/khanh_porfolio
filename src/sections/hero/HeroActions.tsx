import Button from "../../components/ui/Button";

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button as="a" href="#">
        View Portfolio
      </Button>
      <Button
        as="a"
        href="cv.pdf"
        target="_blank"
        rel="noreferrer"
        variant="secondary"
      >
        View CV
      </Button>
    </div>
  );
}

export default HeroActions;
