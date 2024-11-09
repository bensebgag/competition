function Table({ columnNmae1, columnNmae2, data, typeInput }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{columnNmae1}</th>
          <th>{columnNmae2}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <th className="">{row.chapter}</th>
            {typeInput === "checkbox" ? (
              <th>
                <input type="checkbox" />
              </th>
            ) : (
              <th className={row.state}>{row.state}</th>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
