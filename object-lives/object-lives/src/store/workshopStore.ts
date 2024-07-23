import { defineStore } from "pinia";
import { baseState, fetchQuery } from "@arc/arc-solr";
import * as config from "../appsettings";
import type { SolrSearchResult } from "@arc/arc-foundation/src/solr/models";

export const useWorkshopStore = defineStore("workshopStore", {
  state: () => ({
    ...baseState,
    dataFetched: false,
    searchResult: null as SolrSearchResult | null,
    offset: 0,
    pageSize: 1000,
    searchResultFieldMapping: config.SearchResultFieldMapping.NAME,
  }),

  getters: {
    resultCount: (state) => {
      return state.searchResult?.resultEntries
        ? state.searchResult.resultEntries.length
        : 0;
    },
  },

  actions: {
    fetchData() {
      try {
        fetchQuery(
          config.default.solrApi, // solrApiRoot
          null, // freeText
          null, // queryModel
          config.freeTextSearchTargetFieldNames, // freeTextSearchTargetFieldNames
          config.default.tenantId.toString(), // tenantId
          this.searchResultFieldMapping, // searchResultFieldMapping
          this.offset, // offset
          this.pageSize, // pageSize
          (result: SolrSearchResult) => {
            this.searchResult = result;
            this.dataFetched = true;
            console.log("Fetch Data Result:", result);
            console.log(
              "Number of Result Entries:",
              result.resultEntries?.length ?? 0
            );
          }
        );
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    },
  },
});
