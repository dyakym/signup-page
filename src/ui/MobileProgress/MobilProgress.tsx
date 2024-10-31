import "./MobilProgress.css";

interface Props {
  step: number;
}

function MobilProgress({ step }: Props) {
  const progressNow = `progress progress_${step}`;
  return (
    <div className="mobile-progress">
      <p className="step">{`Step ${step} of 4`}</p>
      <div className="progress-bar">
        <div className={progressNow}></div>
      </div>
    </div>
  );
}

export default MobilProgress;
