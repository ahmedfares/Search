import { useState } from "react";

const AdvancedSearch = (props) => {
  const [itemNumber, setItemNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [type, setType] = useState([]);
  const [orderError, setOrderError] = useState(false);
  const [itemError, setItemError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const filter = () => {
    let hasErrors = false;
    if (
      (orderNumber.length > 0 && orderNumber.length < 8) ||
      isNaN(orderNumber)
    ) {
      hasErrors = true;
      setOrderError(true);
    } else setOrderError(false);
    if ((itemNumber.length > 0 && itemNumber.length < 8) || isNaN(itemNumber)) {
      hasErrors = true;
      setItemError(true);
    } else setItemError(false);
    if (type.length === 0) {
      hasErrors = true;
      setTypeError(true);
    } else setTypeError(false);
    if (hasErrors) return;
    const searchObj = {
      itemNum: itemNumber,
      orderNum: orderNumber,
      type: type,
    };
    props.filter(searchObj);
  };
  return (
    <div
      style={{ display: props.isDisplayFilter ? "block" : "none" }}
      className="form-group advanced-box"
    >
      <h3 style={{ textAlign: "center" }}>Set Parameters</h3>
      <form className="advanced-form">
        Item: <br />
        <input
          style={{ marginBottom: "40px" }}
          className="form-control"
          placeholder="Item #"
          value={itemNumber}
          onChange={(event) => setItemNumber(event.target.value)}
          type="text"
        />
        {itemError && (
          <span className="error">please enter valid item number</span>
        )}
        Order Number: <br />
        <input
          style={{ marginBottom: "40px" }}
          className="form-control"
          placeholder="Order #"
          type="text"
          onChange={(event) => setOrderNumber(event.target.value)}
          value={orderNumber}
        />
        {orderError && (
          <span className="error">please enter valid order number</span>
        )}
        Type: <br />
        <input
          type="checkbox"
          className="form-check-input"
          onClick={() => {
            type.includes("EDF")
              ? setType(type.filter((x) => x != "EDF"))
              : setType([...type, "EDF"]);
          }}
        />{" "}
        EDF
        <br />
        <input
          type="checkbox"
          className="form-check-input"
          onClick={() => {
            type.includes("CAO")
              ? setType(type.filter((x) => x != "CAO"))
              : setType([...type, "CAO"]);
          }}
        />{" "}
        CAO
        <br />
        <input
          type="checkbox"
          className="form-check-input"
          onClick={() => {
            type.includes("SFO")
              ? setType(type.filter((x) => x != "SFO"))
              : setType([...type, "SFO"]);
          }}
        />{" "}
        SFO
        <br />
        {typeError && (
          <span className="error">please choose at least one order type.</span>
        )}
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          style={{ margin: "10px" }}
          onClick={filter}
          className="btn btn-primary"
        >
          Apply
        </button>
        <button
          onClick={props.displayFilter}
          style={{ margin: "10px" }}
          className="btn btn-secondary"
        >
          Cancel
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={props.resetAll}
          className="btn btn-warning"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default AdvancedSearch;
