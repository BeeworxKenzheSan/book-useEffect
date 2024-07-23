import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import { Wrapper } from "../wrapper/Wrapper";

export const Filter = () => {
  return (
    <Wrapper>
      <div className="app-block filter">
        <div className="filter-row">
          <div className="filter-group">
            <FormInput placeholder="Filter by title..." />
            {/* <input
              type="text"
              value={titleFilter}
              placeholder="Filter by title..."
              onChange={handleTitleFilterChange}
            /> */}
          </div>
          <div className="filter-group">
            <FormInput placeholder="Filter by author..." />
            {/* <input
              type="text"
              value={authorFilter}
              placeholder="Filter by author..."
              onChange={handleAuthorFilterChange}
            /> */}
          </div>
          <div className="filter-group">
            <label>
              <input type="checkbox" />
              Only Favorite
            </label>
          </div>
          <Button>Reset Filters</Button>
        </div>
      </div>
    </Wrapper>
  );
};
