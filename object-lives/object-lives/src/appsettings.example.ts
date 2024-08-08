import { Guid } from "guid-typescript";

let googleClientId = "";
let app = "";
let auth = "";
let solr = "";
let solrCore = "";
if(window.location.host.indexOf("object-lives.artsrn.ualberta.ca") >= 0){
    //Prod Server
    googleClientId = "*********************************";
    app = "https://skipp.artsrn.ualberta.ca";
    auth = "https://auth.artsrn.ualberta.ca/v1";
    solr = "https://solr.artsrn.ualberta.ca";
    solrCore = "http://arrw-db001.artsrn.ualberta.ca:8983/solr/skipp.artsrn.ualberta.ca"
}
else if(window.location.host.indexOf("object-lives-test.artsrn.ualberta.ca") >= 0){
   //Test Server
   googleClientId = "*********************************";
   app = "https://skipp-test.artsrn.ualberta.ca";
   auth = "https://auth-test.artsrn.ualberta.ca/v1";
   solr = "https://solr-test.artsrn.ualberta.ca";
   solrCore = "";
}
else{
   //Dev Server
   googleClientId = "*********************************";
   app = "http://localhost:8080";
   auth = "https://auth-test.artsrn.ualberta.ca/v1";
   solr = "https://solr-test.artsrn.ualberta.ca";
   solrCore = "";
}

export default {
    tenantId: "95302eb2-596e-ceb7-4de6-5917b29d5fa2" as unknown as Guid,
    googleClientId,
    app,
    auth,
    solr,
    solrCore,
    appId: "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid,
};

export enum SearchResultFieldMapping {
  BANNERTEXT = "data_93d3bd1d-d697-70ae-31a4-11773216883c_a2758293-bd78-a312-ef28-98154add4327_t",
  TITLETEXT = "data_93d3bd1d-d697-70ae-31a4-11773216883c_caf42133-9bfd-dc5c-2694-4cc547d1c268_t",
  DATE = "data_93d3bd1d-d697-70ae-31a4-11773216883c_015c7efb-d7b2-cc5e-86be-a3472c7c6a19_dt",
  ABSTRACTTEXT = "data_93d3bd1d-d697-70ae-31a4-11773216883c_8e878039-6219-e563-cff3-d925f9d5b56f_t",
  AUTHORNAME = "data_93d3bd1d-d697-70ae-31a4-11773216883c_99a0e1c1-ac21-3ee9-a0e7-f772d67002c4_t",
  AUTHORURL = "data_93d3bd1d-d697-70ae-31a4-11773216883c_3a43c63d-562c-a312-2f79-57c930249e8e_t",
  AUTHORNAME2 = "data_93d3bd1d-d697-70ae-31a4-11773216883c_b52398dc-fc90-f426-1225-d6a1b94b8c67_t",
  AUTHORURL2 = "data_93d3bd1d-d697-70ae-31a4-11773216883c_15a61fb0-e2f2-8286-cd9f-b38102ecfe99_t",
  TAGS = "data_93d3bd1d-d697-70ae-31a4-11773216883c_593f8379-b3f6-6edd-3b75-4e318a5b543f_ss0",
  PROJECT_LIST = "container_c250d9ff-bb1f-c205-34c8-e81ba21ab513",
  IMAGEHOVER = "data_c250d9ff-bb1f-c205-34c8-e81ba21ab513_edafb951-adf2-d6ba-f02f-095c50df8659_t",
  POSTITEM = "data_c250d9ff-bb1f-c205-34c8-e81ba21ab513_714a5e38-b353-b9dd-887b-60df8cd7b424_t",
  PROJECT_INDEX = "child_index_i",
  STATE = "status_s",
  NAME = "NAME",
}

export const freeTextSearchTargetFieldNames = [
  SearchResultFieldMapping.BANNERTEXT,
  SearchResultFieldMapping.TITLETEXT,
  SearchResultFieldMapping.DATE,
  SearchResultFieldMapping.ABSTRACTTEXT,
  SearchResultFieldMapping.AUTHORNAME,
  SearchResultFieldMapping.AUTHORURL,
  SearchResultFieldMapping.AUTHORNAME2,
  SearchResultFieldMapping.AUTHORURL2,
  SearchResultFieldMapping.TAGS,
  SearchResultFieldMapping.PROJECT_LIST,
  SearchResultFieldMapping.IMAGEHOVER,
  SearchResultFieldMapping.POSTITEM,
];
