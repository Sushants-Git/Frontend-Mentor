import resources from "../resources/results-summary-component-main/index";
import "./styles/ResultSummaryComponent.css";

export default function ResultSummaryComponent() {
  const {
    reaction: reactionImg,
    memory: memoryImg,
    verbal: verbalImg,
    visual: visualImg,
    data,
  } = resources;

  const images = [reactionImg, memoryImg, verbalImg, visualImg];

  const allStats = [];

  for (let i = 0; i < data.length; i++) {
    allStats.push(
      <div
        key={data[i].category}
        className={"stats " + data[i].category.toLocaleLowerCase()}
      >
        <img src={images[i]} alt={data[i].category} />
        <span className="category">{data[i].category}</span>
        <span className="score">
          {data[i].score}
          <span className="out-of-hundread"> / 100</span>
        </span>
      </div>
    );
  }

  return (
    <div className="result-summary-component-wrapper">
      <div className="result-summary-component">
        <section className="result">
          <p className="heading">Your Result</p>
          <div className="circle">
            <h1>76</h1>
            <p className="out-of">of 100</p>
          </div>
          <h2>Great</h2>
          <p className="description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className="summary">
          <h2>Summary</h2>
          <div className="all-stats">{allStats}</div>
          <button>Continue</button>
        </section>
      </div>
    </div>
  );
}
