const FILTER_PRESETS = {
   POPULAR: {
      label: "Most Popular",
      icon: "trending_up",
      description: "What's trending globally right now.",
      values: { sortBy: { value: "popularity.desc", label: "Popularity" } },
      preview: [
         { label: "Sort Logic", value: "Popularity Score" },
         { label: "Update Frequency", value: "Every 24h" },
         { label: "Target", value: "Mainstream Hits" },
      ],
   },
   TOP_RATED: {
      label: "Critics' Choice",
      icon: "grade",
      description: "Highest community rated of all time.",
      values: { sortBy: { value: "vote_average.desc", label: "Top Rated" } },
      preview: [
         { label: "Sort Logic", value: "User Rating (Avg)" },
         { label: "Requirement", value: "Min. 500 Votes" },
         { label: "Quality", value: "Masterpieces" },
      ],
   },
   NEW_RELEASES: {
      label: "Fresh Content",
      icon: "new_releases",
      description: "The latest additions to the catalog.",
      values: {
         sortBy: { value: "primary_release_date.desc", label: "Release Date" },
      },
      preview: [
         { label: "Sort Logic", value: "Release Date" },
         { label: "Focus", value: "Newest Arrivals" },
         { label: "Timeframe", value: "Last 30 Days" },
      ],
   },
   BLOCKBUSTERS: {
      label: "Box Office",
      icon: "payments",
      description: "Productions with the highest revenue.",
      values: { sortBy: { value: "revenue.desc", label: "Revenue" } },
      preview: [
         { label: "Sort Logic", value: "Total Gross Revenue" },
         { label: "Scale", value: "High Budget" },
         { label: "Vibe", value: "Hollywood Giants" },
      ],
   },
};

export default FILTER_PRESETS;
