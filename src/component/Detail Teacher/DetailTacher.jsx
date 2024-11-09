import Table from "../Table";
import "./DetailTeacher.scss";
function DetailTacher({ data }) {
  return (
    <div className="container_content">
      <div className="container_table">
        <Table
          columnNmae1={"chapter"}
          columnNmae2={"state"}
          data={data}
          typeInput={"checkbox"}
        />
        <Table
          columnNmae1={"td"}
          columnNmae2={"state"}
          data={data}
          typeInput={"checkbox"}
        />
        <Table
          columnNmae1={"tp"}
          columnNmae2={"state"}
          data={data}
          typeInput={"checkbox"}
        />
      </div>
    </div>
  );
}

export default DetailTacher;
