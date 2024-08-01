import { Guid } from "guid-typescript";

export default {
  dataServiceApiRoot: "/server/applets/api/",
  googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
  tenantId: "95302eb2-596e-ceb7-4de6-5917b29d5fa2" as unknown as Guid,
  maxEvents: 10,
  googleLoginClientId:
    "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",

  //Production API Roots
  prod: {
    app: "https://skipp.artsrn.ualberta.ca",
    auth: "https://auth.artsrn.ualberta.ca",
    solr: "https://solr.artsrn.ualberta.ca",
  },
  //Test API Roots
  test: {
    app: "https://skipp-test.artsrn.ualberta.ca",
    auth: "https://auth-test.artsrn.ualberta.ca/v1",
    solr: "https://solr-test.artsrn.ualberta.ca",
  },
  //Dev API Roots
  dev: {
    app: "https://templates-test.artsrn.ualberta.ca",
    auth: "https://auth-test.artsrn.ualberta.ca/v1",
    solr: "https://solr-test.artsrn.ualberta.ca",
  },

  //LOGIN component  settings
  googleLocalClientId:
    "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com",

  appId: "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid,
};

// export default {
//   //   dataServiceApiRoot: "/server/applets/api/",
//   //   googleApiKey: "AIzaSyBgCnBy-LbHAqbB8PbQhNID68vZ8f8_j_Q",
//   //   googleCalendarIds: [
//   //     "ualberta.ca_kdp9enkplai8s5ipu2efknjels@group.calendar.google.com",
//   //     "c_1netqe2n16i5o9su69ft5c8f8c@group.calendar.google.com",
//   //   ],
//   //   maxEvents: 10,
//   tenantId: "95302eb2-596e-ceb7-4de6-5917b29d5fa2" as unknown as Guid,
//   googleLoginClientId: googleClientId,
//   apiRoot: app,
//   authApi: auth,
//   solrApi: solr,
//   solrCore,

//   //on prod auth.api
//   appId: "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid,
// };
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

  // INDIGENOUS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_3138944e-82e7-3ff0-831a-b17cc2c950fe_t",
  // COMMUNITIESNATIONSORGANIZATIONS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_a5582c7f-5c0b-b373-32ee-ad8584abe106_s",
  // LOCATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_be9ebb54-2971-0267-80b2-3d963b56b8a4_ts",
  // ETHNICITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_71ae6003-556c-2ed0-d197-ff382ce75c45_t",
  // THEME = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_dca2335d-3c60-8785-6c07-c9e9079aa5c8_t",
  // GENDER_IDENTITY = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_f503da45-f9ec-6942-269d-45cdea413f84_s",
  // CURRENTPROJECTS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_020e9f66-911d-55dd-3eff-3bb3aec182ee_t",
  // INITIATION = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_03d1ffdd-0736-d8c8-418f-58691f22c19b_t",
  // ROLES = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b89ad9f-7a76-7594-b932-9a20bfa44b4b_t",
  // WEBSITELINKS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_0b559321-498d-95b3-0734-2ae9ae876b93_t",
  // KEYWORDS = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_aeaf264c-06e0-7bec-1073-832cbdb88bca_ts",
  // SOCIALMEDIA = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_t",
  // ADITIONAL_CONTACT = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_260bedf2-ef68-c0be-be4b-e0e98ddcaf65_t",
  // PROJECT_LIST = "container_020e9f66-911d-55dd-3eff-3bb3aec182ee",
  // PROJECT_TITLE = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_f9324907-a5e3-d655-c5a8-ee31e6aa0ee5_t",
  // PROJECT_DESCRIPTION = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_21dc5652-296f-1149-9cb9-e914f9894978_t",
  // PROJECT_INITIATION = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_bb85e648-5f85-293f-4b20-f8cdf70c86a6_t",
  // PROJECT_ROLE = "data_020e9f66-911d-55dd-3eff-3bb3aec182ee_b1709fd6-6c12-6234-f20b-6ca96c96716e_t",
  // FILE_REFERENCES = "data_8d9a6bc9-863d-2ee8-ea93-d5544778f090_f3eb263e-4e0b-f79a-7b93-9b0103076312_s",
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
