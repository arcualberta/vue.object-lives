<template>
  <div class="discovery-workshop">
    <div class="content">
      <div class="left-column">
        <img
          src="../assets/image-discovery.gif"
          alt="Workshop Logo"
          class="header-image"
        />
        <p class="first-paragraph">
          Objects record the intentions of past generations. Our aim was to
          uncover and assess the evidence held in selected artifacts in the
          collection of the Pitt Rivers Museum, Oxford University. The PRM holds
          particularly rich collections and some of the earliest materials from
          the colonial era of Northern North America and from the periods that
          followed.
        </p>
        <p>
          Our research team selected items that reveal the sequence of contacts
          and connections among Indigenous peoples, as well as between
          Indigenous and Métis peoples and European traders and settlers (c.
          1700s-1800s) in regions of what is now Canada. We also selected
          several 20th century objects central to our project.
        </p>
        <p>
          Most of these objects reflect métissage, the blending and mixing of
          cultures and peoples, revealed in the hybridity of things. This
          creative mixing typified many facets of material culture in Northern
          North America.
        </p>
        <p>
          Clothing, in particular, was an active agent in cultural contact and
          change, deployed with great intentionality by Indigenous, Métis and
          European peoples in these northern regions. The agency of objects is
          revealed in the cut, stitching, decoration and signs of use.
        </p>
        <p>
          The ‘Object Lives’ group encountered their first group of objects at
          the PRM in April 2015. Our aim was to uncover the features and
          dynamics of these objects and their contributions to material life. We
          engaged with each object collaboratively and discursively. The
          following pages reflect the Discovery Process; the blogs produced by
          team members suggest the stages of knowledge developed in this manner.
        </p>
        <div class="paragraph-separator"></div>
        <p>
          <strong>Affiliated Blogs</strong>
        </p>
        <p>
          <a href="https://example.com">Brave New World Curator</a>
        </p>
      </div>
      <div class="right-column">
        <img src="../assets/pad-saddle.jpg" alt="Pad Saddles" />
        <div class="image-description">
          <h2>PAD SADDLES</h2>
          <p>April 10, 2017</p>
          <p>
            At our Oxford workshop in May 2015, Object Lives participants worked
            with this stunning saddle. We know very little about its history,
            although we can tell from the style of porcupine quillwork that it
            is from the northern Plains and likely dates to the first half of
            the 19th
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

.discovery-workshop {
  display: flex;
  justify-content: center;
  background-color: #1e1e1e;
  padding: 15px;
}

.content {
  max-width: 950px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  font-family: "DM Sans";
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 100;
  font-style: normal;
  font-size: 11px;
  color: #fcf9f7;
  display: flex;
}

.left-column,
.right-column {
  padding: 15px;
}

.left-column {
  flex: 1 1 33%;
  padding-right: 40px;
}

.right-column {
  flex: 2 1 67%;
  max-width: 67%;
  text-align: left;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.image-description {
  background-color: #2e2e2e;
  padding: 20px;
}

.header-image {
  margin-bottom: 20px;
}

.first-paragraph {
  margin-top: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.paragraph-separator {
  margin-top: 40px; /* Gap after the last paragraph */
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 30px;
}

strong {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}

a {
  display: block;
  color: #fcf9f7;
  text-decoration: none;
  font-size: 14px;
  color: #20b0f3;
}

a:hover {
  text-decoration: underline;
}

h1,
h2 {
  font-family: "Courier New", Courier, monospace;
  color: #eaeaea;
}
</style>
