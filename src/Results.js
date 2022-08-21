const Results = (props) => {
  const tablerows = props.items.map((item) => (
    <tr>
      <th>{item.OrderNum}</th>
      <td>{item.Type}</td>
      <td>{item.ItemNum}</td>
      <td>{item.Category}</td>
      <td>{item.Description}</td>
    </tr>
  ));
  return (
    <div>
      {props.isLoading && (
        <div className="no-items">
          <img src="loading.gif" alt="Loading" />{" "}
        </div>
      )}
      {!props.isLoading && props.items.length === 0 && (
        <div className="no-items">What are you looking for ?</div>
      )}
      {!props.isLoading && props.items.length > 0 && (
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Type</th>
              <th>Item #</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{tablerows}</tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
