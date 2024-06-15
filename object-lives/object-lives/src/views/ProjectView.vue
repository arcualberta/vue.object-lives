<template>
  <div class="page-container">
    <div class="image-container">
      <img
        src="../assets/Image-asset.gif"
        alt="Project Image"
        class="project-image"
      />
    </div>
    <div class="project-block">
      <div class="project-block-content">
        <div class="project-html-content">
          <p>&nbsp;</p>
          <p>
            <strong
              >Object Lives and Global Histories in Northern North
              America:</strong
            ><br />
            <em
              ><span
                >Networks, Localities, and Material Culture c. 1700s-2000s</span
              ></em
            >
          </p>
          <p><span>&nbsp;</span></p>
          <p>
            <em
              ><span
                >Object Lives and Global Histories in Northern North
                America</span
              ></em
            >
            " is a collaborative research project with Edmonton and Montreal as
            the geographic hubs for its enquiry. This project will explore the
            histories of material culture within these regions, linked to wider
            global flows of influence that arise from trade, colonialism, and
            migration." The object histories will be developed through our
            project’s "multi-disciplinary partnership, generating essential new
            knowledge about people and object interactions. The stories of the
            selected objects will be presented on the ‘Object Lives’ website,
            detailing the biographies of goods that acted as surrogates of early
            globalization and cross-cultural exchange. &nbsp;"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// JavaScript remains the same
</script>

<style scoped>
.page-container {
  text-align: left;
  background-color: var(--page-background-color);
  color: var(--text-font-color); /* Ensure this is used to control text color */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--max-width);
  height: 50vh;
}

.project-image {
  display: block;
  max-width: 80%;
  max-height: 80%;
  width: auto;
  height: auto;
}

.project-block {
  padding: 20px;
  background-color: var(--page-background-color);
  border-radius: 5px;
  font-family: var(--font-family);
  font-size: var(--font-size);
}

.project-block-content {
  padding: 15px;
}

.project-html-content p {
  max-width: 950px;
  margin: 0 auto;
  font-weight: 100;
}
</style>
