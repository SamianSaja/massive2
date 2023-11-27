import { Button } from "react-bootstrap";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CtaBtn = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(targetPath);
  // };

  return (
    // <Button className="cta-card" onClick={handleClick}>
    //   Baca Lebih Lanjut <img src="/img/right.png" alt="right" width={"8px"} />{" "}
    // </Button>
    <Button className="cta-card">
      Baca Lebih Lanjut <img src="/img/right.png" alt="right" width={"8px"} />{" "}
    </Button>
  );
};

export default CtaBtn;
