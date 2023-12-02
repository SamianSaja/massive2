import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
  TelegramIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Bagikan = () => {
  const shareUrl = `www.linkedin.com/in/aldi-b3a568227`;
  return (
    <div className="ms-lg-5">
      <div className="">
        <p className="bold fs-5">Bagikan:</p>
      </div>
      <div className="d-flex gap-2">
        <FacebookShareButton
          url={shareUrl}
          quote="Silahkan Bagikan Ke orang lain"
          hashtag="#MakananSehat"
        >
          <FacebookIcon size={30} round={true} className="iconshare" />
        </FacebookShareButton>
        <WhatsappShareButton
          url={shareUrl}
          quote="Silahkan Bagikan Ke orang lain"
          hashtag="#MakananSehat"
        >
          <WhatsappIcon size={30} round={true} className="iconshare" />
        </WhatsappShareButton>
        <TelegramShareButton
          url={shareUrl}
          quote="Silahkan Bagikan Ke orang lain"
          hashtag="#MakananSehat"
        >
          <TelegramIcon size={30} round={true} className="iconshare" />
        </TelegramShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote="Silahkan Bagikan Ke orang lain"
          hashtag="#MakananSehat"
        >
          <XIcon size={30} round={true} className="iconshare" />
        </TwitterShareButton>
        {/* <img src="/img/share/wa.png" alt="" className="icon-share me-2" />
        <img src="/img/share/fb.png" alt="" className="icon-share me-2" />
        <img src="/img/share/ig.png" alt="" className="icon-share me-2" /> */}
      </div>
    </div>
  );
};

export default Bagikan;
