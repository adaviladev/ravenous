export const SearchBar = () => {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  return (
    <div>
      <ul>
        {Object.keys(sortByOptions).map((option) => (
          <li key={sortByOptions[option]}>{option}</li>
        ))}
      </ul>
      <input type="text" placeholder="pizza" />
      <input type="text" placeholder="New York" />
      <button>Search</button>
    </div>
  );
};
