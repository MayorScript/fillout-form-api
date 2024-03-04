export type FilterClauseType = {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
};

export type QueryParamsType = {
  filters?: FilterClauseType[];
  limit?: number;
  afterDate?: Date | string;
  beforeDate?: Date | string;
  offset?: number;
  status?: "in_progress" | "finished";
  includeEditLink?: boolean;
  sort?: "asc" | "desc";
};
