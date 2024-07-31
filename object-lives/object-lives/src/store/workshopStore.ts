import { defineStore } from "pinia";
import { baseState, fetchQuery } from "@arc/arc-solr";
import { default as config } from "../appsettings";
import type { SolrQuery, SolrSearchResult } from "@arc/arc-foundation/src/solr/models";

export const useWorkshopStore = defineStore("workshopStore", {
  state: () => ({
    ...baseState,
    dataFetched: false,
    searchResult: null as SolrSearchResult | null,
    offset: 0,
    pageSize: 1000,
    
   // searchResultFieldMapping: config.SearchResultFieldMapping.NAME,
  }),

  getters: {
    resultCount: (state) => {
      return state.searchResult?.resultEntries
        ? state.searchResult.resultEntries.length
        : 0;
    },

  },
   
});
