import Detail from "../../component/Detail";
import "./Admin.scss";
const coureInf = [
  { chapter: "chapter 1 ", state: "yes" },
  { chapter: "chapter 2 ", state: "No" },
  { chapter: "chapter 3 ", state: "No" },
  { chapter: "chapter 4 ", state: "No" },
  { chapter: "chapter 5 ", state: "No" },
  { chapter: "chapter 6", state: "No" },
];
const tdInfo = [
  { chapter: "td 1 ", state: "yes" },
  { chapter: "td 2 ", state: "No" },
  { chapter: "td 3 ", state: "No" },
  { chapter: "td 4 ", state: "No" },
  { chapter: "td 5 ", state: "No" },
  { chapter: "td 6", state: "No" },
];
const tpInfo = [
  { chapter: "tp 1 ", state: "yes" },
  { chapter: "tp 2 ", state: "No" },
  { chapter: "tp 3 ", state: "No" },
  { chapter: "tp 4 ", state: "No" },
  { chapter: "tp 5 ", state: "No" },
  { chapter: "tp 6", state: "No" },
];
function Admin() {
  return (
    <div className="container">
      <div className="headding">
        <p>mangment</p>
        <div className="selections">
          <select>
            <option value="group1">group1</option>
          </select>
          <select>
            <option value="data structer">data structer</option>
          </select>
        </div>
      </div>
      <Detail title={"COURE"} data={coureInf} />
      <Detail title={"TD"} data={tdInfo} />
      <Detail title={"TP"} data={tpInfo} />
    </div>
  );
}

export default Admin;
