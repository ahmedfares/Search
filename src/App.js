import "./App.css";
import Menu from "./Menu";
import Content from "./Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartColumn,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import localData from "./items.json";

library.add(faChartColumn, faBars, faSearch);

function App() {
  const ItemsData = [];
  const [items, setItems] = useState(ItemsData);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisplayFilter, setIsDisplayFilter] = useState(false);

  const resetAll = () => {
    setItems([]);
    setIsDisplayFilter(!isDisplayFilter);
  };

  const filter = (searchObj) => {
    setIsDisplayFilter(!isDisplayFilter);
    const locals = localData;
    const itemValues = searchObj.itemNum
      ? searchObj.itemNum.split(",").map((x) => Number(x))
      : [];
    const orderValues = searchObj.orderNum
      ? searchObj.orderNum.split(",").map((x) => Number(x))
      : [];
    const typeValues = searchObj.type;
    const milliseconds = Math.round(Math.random() * 500) + 500;
    setIsLoading(true);
    setTimeout(() => {
      const searchResults = locals
        .filter((x) => typeValues.includes(x.Type))
        .filter(
          (x) => orderValues.includes(x.OrderNum) || orderValues.length === 0
        )
        .filter(
          (x) => itemValues.includes(x.ItemNum) || itemValues.length === 0
        );
      setItems(searchResults);
      setIsLoading(false);
    }, Number(milliseconds));
  };

  const searchByItem = (value) => {
    const milliseconds = Math.round(Math.random() * 500) + 500;
    setIsLoading(true);
    setTimeout(() => {
      const locals = localData;
      const searchValues = value.split(",").map((x) => Number(x));
      const searchItems = locals.filter((item) =>
        searchValues.includes(item.ItemNum)
      );
      setIsLoading(false);
      setItems(searchItems);
    }, Number(milliseconds));
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Menu />
      </div>
      <div className="col-md-10">
        <Content
          items={items}
          searchByItem={searchByItem}
          isLoading={isLoading}
          isDisplayFilter={isDisplayFilter}
          displayFilter={() => setIsDisplayFilter(!isDisplayFilter)}
          resetAll={resetAll}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;
