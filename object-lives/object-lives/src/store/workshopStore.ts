import { defineStore } from "pinia";
import { baseState, fetchQuery } from "@arc/arc-solr";
import { default as config } from "../appsettings";
import type { SolrQuery, SolrSearchResult } from "@arc/arc-foundation/src/solr/models";

export const useWorkshopStore = defineStore("workshopStore", {
  state: () => ({
    ...baseState,
    dataFetched: false,
    searchResult: null as SolrSearchResult | null,
    _workshopSubmissions: [] as any[], // Added this line
    offset: 0,
    pageSize: 1000,
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
        console.log("solRAPI ..", config.solr);
        fetchQuery(
          config.solr, // solrApiRoot
          " ", // freeText
          null, // queryModel
          [], // freeTextSearchTargetFieldNames
          config.tenantId.toString(), // tenantId
          null, // sortBy
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

    loadWorkshopSubmissions() {
      try {
        fetchQuery(
          config.solr, // solrApiRoot
          " ", // freeText, adjust if needed
          null, // queryModel, adjust if needed
          [], // freeTextSearchTargetFieldNames, adjust if needed
          config.tenantId.toString(), // tenantId
          null, // sortBy, adjust if needed
          this.offset, // offset
          this.pageSize, // pageSize
          (result: SolrSearchResult) => {
            this._workshopSubmissions = result.resultEntries || [];
            console.log("Workshop Submissions Loaded:", this._workshopSubmissions);
          }
        );
      } catch (error) {
        console.error("Error loading workshop submissions:", error);
      }
    },
  },
});
