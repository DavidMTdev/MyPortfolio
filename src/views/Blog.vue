<template>
  <main>
    <div class="blog-header">
      <div class="blog-header-title">
        <h2>Mon Blog</h2>
      </div>
    </div>
    <section class="blog-list">
      <div class="container">
        <div class="item">
          <div class="media">
            <img class="post-thumb" src="@/assets/img/blog-logo-sfr.png" alt />
            <div class="media-body">
              <h3 class="title">
                <router-link to="/blog/article/1"
                  >Stage Chez SFR Distribution</router-link
                >
              </h3>
              <div class="meta">
                <span>
                  Juillet 27, 2019 / by
                  <a href="#" target="_blank">David Teixeira</a>
                </span>
              </div>
              <div class="intro">
                La première semaine de stage chez SFR Distribution a été
                essentiellement une visite guidée afin de présenter les locaux
                et services de l’entreprise, puis une présentation plus
                approfondie sur le service informatique auquel j’allais être
                rattaché...
              </div>
              <router-link class="more-link" to="/blog/article/1"
                >En savoir plus →</router-link
              >
            </div>
          </div>
        </div>
        <!-- /* item end */ -->
        <div class="item">
          <div class="media">
            <img
              class="post-thumb"
              src="@/assets/img/blog-logo-thrill-esport-club.png"
              alt
            />
            <div class="media-body">
              <h3 class="title">
                <router-link to="/blog/article/2"
                  >Stage Chez Thrill Esport Club</router-link
                >
              </h3>
              <div class="meta">
                <span>
                  Aout 20, 2020 / by
                  <a href="#" target="_blank">David Teixeira</a>
                </span>
              </div>
              <div class="intro">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies...
              </div>
              <router-link class="more-link" to="/blog/article/2"
                >En savoir plus →</router-link
              >
            </div>
          </div>
        </div>
        <!-- /* item end */ -->
      </div>
      <!-- /* container end */ -->
    </section>
  </main>
</template>
