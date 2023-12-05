import { Button} from "react-bootstrap";

const CtaBtnSmall = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Button onClick={handleReload} className="cta-card" size="sm">
      Baca Lebih Lanjut <img src="/img/right.png" alt="right" width={"8px"} />{" "}
    </Button>
  );
};

export default CtaBtnSmall;
