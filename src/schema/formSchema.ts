import * as yup from "yup";

// Validation schema for a single filter clause
const filterClauseSchema = yup.object({
  id: yup.string().required(),
  condition: yup
    .mixed<"equals" | "does_not_equal" | "greater_than" | "less_than">()
    .oneOf(["equals", "does_not_equal", "greater_than", "less_than"])
    .required(),
  value: yup.lazy((val) =>
    (/^\d+$/.test(val) ? yup.number() : yup.string()).required(),
  ),
});

// Validation schema for the filters array (as a JSON string)
const filtersSchema = yup
  .string()
  .test("is-valid-json", "Filters must be valid JSON", (value) => {
    try {
      const parsed = JSON.parse(value || "[]");
      return (
        Array.isArray(parsed) &&
        parsed.every((filter) => filterClauseSchema.isValidSync(filter))
      );
    } catch (error) {
      return false;
    }
  });

const formSchema = yup.object({
  query: yup.object().shape({
    filters: filtersSchema,
    limit: yup.number().positive().integer(),
    afterDate: yup
      .date()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value,
      ),
    beforeDate: yup
      .date()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value,
      ),
    offset: yup.number().integer(),
    status: yup
      .mixed<"in_progress" | "finished">()
      .oneOf(["in_progress", "finished"]),
    includeEditLink: yup.boolean(),
    sort: yup.mixed<"asc" | "desc">().oneOf(["asc", "desc"]),
  }),
});

export default formSchema;
