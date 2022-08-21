import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const rows = [];
for (let i = 0; i < 10; i++) {
  rows.push(
    <li className="listItem">
      <FontAwesomeIcon icon="fa-chart-column" /> Item{" "}
    </li>
  );
}
const Menu = () => (
  <div className="menu">
    <h3>Order Central</h3>
    <ul className="list">
      <li className="listItem selectedItem">
        <FontAwesomeIcon icon="fa-chart-column" /> Item Search
      </li>
      {rows}
    </ul>
  </div>
);
export default Menu;
