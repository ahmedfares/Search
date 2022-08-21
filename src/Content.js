import Search from "./Search";
import AdvancedSearch from "./AdvancedSearch";
import Results from "./Results";
const Content = (props) => {
  return (
    <div className="content">
      <Search
        total={props.items.length}
        searchByItem={props.searchByItem}
        displayFilter={props.displayFilter}
      />
      <AdvancedSearch
        total={props.items.length}
        searchByItem={props.searchByItem}
        displayFilter={props.displayFilter}
        resetAll={props.resetAll}
        filter={props.filter}
        isDisplayFilter={props.isDisplayFilter}
      />
      <Results items={props.items} isLoading={props.isLoading} />
    </div>
  );
};

export default Content;
