import Chart from "./Chart";

function Detail({ title, data }) {
  return (
    <div className="container_content">
      <h1>{title}</h1>
      <div className="container_table">
        <table>
          <thead>
            <tr>
              <th>chapters</th>
              <th>state</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                <th className="">{row.chapter}</th>
                <th className={row.state}>{row.state}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <Chart />
        <div className="container_dotes ">
          <div className="dotes">
            <span className="green"></span>
            <span className="label">Percentage completed</span>
          </div>
          <div className="dotes">
            <span className="red"></span>
            <span className="label">Incomplete percentage</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
