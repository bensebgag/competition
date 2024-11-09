import DetailTacher from "../../component/Detail Teacher/DetailTacher";
import "./Teacher.scss";
const coureInf = [
  { chapter: "chapter 1 ", state: "yes" },
  { chapter: "chapter 2 ", state: "No" },
  { chapter: "chapter 3 ", state: "No" },
  { chapter: "chapter 4 ", state: "No" },
  { chapter: "chapter 5 ", state: "No" },
  { chapter: "chapter 6", state: "No" },
];
function Teacher() {
  return (
    <div className="containerTeacher">
      <div className="headding">
        <p>Course of lessons</p>
        <div className="selections">
          <select>
            <option value="group1">group1</option>
          </select>
          <select>
            <option value="data structer">math</option>
          </select>
        </div>
      </div>
      <DetailTacher data={coureInf} />
    </div>
  );
}

export default Teacher;
