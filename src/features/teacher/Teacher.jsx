import Detail from "../../component/Detail";
import "./Teacher.scss";
function Teacher() {
  return (
    <div className="container">
      <div className="headding">
        <p>Course of lessons</p>
        <div className="selections">
          <select>
            <option value="group1">group1</option>
          </select>
          <select>
            <option value="data structer">data structer</option>
          </select>
        </div>
      </div>
      <Detail />
    </div>
  );
}

export default Teacher;
