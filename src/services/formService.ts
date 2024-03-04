import { Request, Response } from "express";
import axios from "../lib/axiosInstance";
import logger from "../lib/logger";
import { FilterClauseType, QueryParamsType } from "../types/form-types";

class FormService {
  async getFormSubmissions(req: Request): Promise<any> {
    try {
      const { formId } = req.params;
      const queryParams: QueryParamsType = req.query;
      let filters: FilterClauseType[] = [];
      const filtersString = queryParams.filters || "[]";

      if (typeof filtersString === "string") {
        filters = JSON.parse(filtersString);
      }

      const { data } = await axios.get(`forms/${formId}/submissions`, {
        params: queryParams,
      });
      const filteredResponses = this.filterResponses(data.responses, filters);

      return {
        responses: filteredResponses,
        totalResponses: filteredResponses.length,
        pageCount: Math.ceil(filteredResponses.length / 5),
      };
    } catch (error: any) {
      logger.error(`An error occurred: ${error.message}`);
      throw error;
    }
  }

  private filterResponses(
    responses: any[],
    filters: FilterClauseType[],
  ): any[] {
    return responses.filter((response) =>
      filters.every((filter) => {
        const question = response.questions.find(
          (q: any) => q.id === filter.id,
        );
        if (!question) return false;

        return this.compareByCondition(
          question.value,
          filter.value,
          filter.condition,
        );
      }),
    );
  }

  private compareByCondition(
    questionValue: any,
    filterValue: any,
    condition: string,
  ): boolean {
    switch (condition) {
      case "equals":
        return questionValue === filterValue;
      case "does_not_equal":
        return questionValue !== filterValue;
      case "greater_than":
        return new Date(questionValue) > new Date(filterValue);
      case "less_than":
        return new Date(questionValue) < new Date(filterValue);
      default:
        return false;
    }
  }
}

export default FormService;
