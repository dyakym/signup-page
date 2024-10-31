import "./PcProgress.css";

interface Props {
  step: number;
}

function PcProgress({ step }: Props) {
  let firstLine = "pc-progress__item current";
  let secondLine = "pc-progress__item";
  let thirdLine = "pc-progress__item";
  let fourthLine = "pc-progress__item";
  if (step >= 2) {
    firstLine += " done line";
    secondLine += " current"
  }
  if (step >= 3) {
    secondLine += " done";
  }
  if (step >= 4) {
    secondLine += " line";
    thirdLine += " current"
  }
  if (step >= 5) {
    thirdLine += " done";
  }
  if (step >= 6) {
    thirdLine += " line"
    fourthLine += " current"
  }
  if (step >= 7) {
    fourthLine = " done";
  }
  return (
    <div className="pc-progress">
    <div className={firstLine}>
      <div className="pc-progress__item-circle"></div>
      <div className="pc-progress__item-text">Welcome</div>
    </div>
    <div className={secondLine}>
      <div className="pc-progress__item-circle"></div>
      <div className="pc-progress__item-text">Connect your Shopify store</div>
    </div>
    <div className={thirdLine}>
      <div className="pc-progress__item-circle"></div>
      <div className="pc-progress__item-text">Connect your customer support email</div>
    </div>
    <div className={fourthLine}>
      <div className="pc-progress__item-circle"></div>
      <div className="pc-progress__item-text">Done</div>
    </div>
  </div>
  );
}

export default PcProgress;
