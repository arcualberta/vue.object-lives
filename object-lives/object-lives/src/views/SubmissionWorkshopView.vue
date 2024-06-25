<script setup lang="ts">
  import { ref } from 'vue'
  import { getActivePinia } from 'pinia'
  import { useRoute } from 'vue-router'
  import router from '../router'
  import { Guid } from 'guid-typescript'
  import { createPinia } from 'pinia';
  // import {default as config} from "@/appsettings";
  import { FormSubmission } from '@arc/form-submission'
  import { StatusCodes } from 'http-status-codes'

  import { discoveryform } from '../discoveryForm'
  // import { useProfileStore } from '@/stores/ProfileStore'
  // import { useApiRootsStore } from '@/stores/apiRootsStore'
  
  const route = useRoute()
  const submissionId = route.params.submissionId as unknown as Guid
  // const apiRootsStore = useApiRootsStore();
  const formSubmissionCallback = (submissionStatus:StatusCodes): void => {
      if(submissionStatus == StatusCodes.OK){
        router.push({name:'success'})
      }
  }



const pinia = createPinia() 

  // const store = useProfileStore()
  // store.formSubmissionMode = "CREATE";
  
</script>
<template>
  <div class="container">   
      <div class="inner-container form-details">
      <FormSubmission 
      :solrCoreURL = "'http://localhost:8983/solr/object-lives/'"
      :api-root = "'https://localhost:7148'"
      :data-store = "'Solr'"
      securityToken = ""
      :is-update = "false"
      :form-template = "discoveryform"
      :pinia-instance = "pinia" 
      :tanent-id = "('95302eb2-596e-ceb7-4de6-5917b29d5fa2' as unknown as Guid)"
      :msg = "''" 
      @arc-form-submit = "formSubmissionCallback"
      >
    </FormSubmission>
    </div>
  </div>
</template>

<style>
.ext-option-button {
  background-color: #327d49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.ext-op-delete {
  margin-left: 10px;
}
.ext-option-text {
  margin-top: 5px;
}
.collapse-button {
  background-color: #327d49;
  color: white;
  border: none;
  border-radius: 5px;
  height: 35px;
}
.composite-field-heading {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: left;
  position: absolute;
  left: 230px;
}
.hovertext {
  display: none;
}
.add-button {
  background-color: #327d49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
  position: relative;
  top: -40px;
  left: -20px;
}
.submit-button {
  background-color: #327d49;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 5px;
  margin-bottom: 20px;
  position: relative;
  top: -40px;
  left: 40px;
  color: white;
}
.form-details {
  background-color: white;
  padding-top: 50px;
}
.create-profile-description {
  text-align: justify;
  margin-top: 100px;
}
.protection-description {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px 25px 50px 25px;
  text-align: justify;
  background-color: #f4f9f6;
}
.info-field {
  font-size: 24px;
  font-weight: 500;
  color: #327d49;
}
.info-field-description {
  font-size: 16px;
  width: 100%;
  color: #787878;
  text-align: justify;
}
.required {
  color: red;
}
.create-profile-heading {
  margin-top: 100px;
  padding-top: 50px;
  font-size: 64px;
  font-weight: 500;
  color: #327d49;
}
.form-background {
  background-color: #f4f9f6;
}
.roots-of-change-url {
  text-decoration: underline;
  color: black;
}
.delete-button {
  float: right;
}
.add-button {
  float: right;
}
.compositeField {
  padding: 10px;
  margin-bottom: 30px;
  position: relative;
  right: -1px;
  bottom: -50px;
  height: 600px;
  width: 1089px;
}
.lightGrayBorder {
  border: 1px solid lightgray;
  border-radius: 5px;
}
/* insert field button*/
.insertFieldBtn {
  text-align: center;
  width: 100%;
}
.fontSize2em {
  font-size: 2rem;
}
.inner-container {
  padding-left: 100px;
  padding-right: 100px;
}
</style>

