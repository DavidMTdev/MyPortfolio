<template>
  <article class="blog-post">
    <div class="container">
      <div class="blog-post-header">
        <h2 class="post-title mb-2">Rapport Stage Chez SFR Distribution</h2>
        <div class="post-meta mb-3">
          <span>
            Juillet 27, 2019 / by
            <a href="#" target="_blank">David Teixeira</a>
          </span>
        </div>
        <div class="post-banner">
          <img
            class="img-fluid"
            src="@/assets/img/banner-sfr-distribution.png"
            alt
          />
        </div>
      </div>
      <div class="blog-post-body">
        <p>
          La première semaine de stage chez SFR Distribution a été
          essentiellement une visite guidée afin de présenter les locaux et
          services de l’entreprise, puis une présentation plus approfondie sur
          le service informatique auquel j’allais être rattaché.
          <br />
          <br />A partir de la deuxième semaine, ma tutrice m’a expliqué sa
          fonction au sein du service informatique de l’entreprise puis m’a
          montré les tâches qu’elle effectue au quotidien. Ses tâches
          constituent essentiellement dans le paramétrage, de plus elle est
          habilitée à ressortir des lignes de bases de données pour les
          transmettre à la responsable des Ressources Humaines afin de s’occuper
          des fiches de payes de chaque salarié.
        </p>
        <h3 class="mt-2 mb-1">Réalisation du cahier des charges</h3>
        <p>
          Par la suite, j’ai été pendant quelques jours chargé de réaliser le
          cahier des charges Cette fonction consistait à l’envoyer à l’éditeur
          pour permettre de rajouter si possible une fonction sur l’outil. Pour
          réaliser celui-ci j’ai dû comprendre et étudier le problème afin d’y
          trouver une solution.
        </p>
        <h3 class="mt-2 mb-1">Mode opératoire d’une fonctionnalité</h3>
        <p>
          Ma tutrice et moi-même avons tenté d’effectuer des tests sur l’outil
          Octime pour comprendre une des fonctionnalités de l’outil, celle-ci
          permettait de mettre des articles dans l’intranet de la société, c’est
          seulement après ces tests nous avons compris l’utilisation de cette
          fonction. Le jour suivant ma tutrice a pris son jour de travail à
          domicile, pendant ce temps je me suis concentré à écrire le mode
          opératoire ou guide d’utilisation de la fonctionnalité de l’outil que
          nous avions résolu le jour avant.
        </p>
        <h3 class="mt-2 mb-1">Création d’un programme</h3>
        <p>
          Ce jour-là, ma tutrice m’a confié une mission qui consistait à
          automatiser une tâche manuelle. Dans un premier temps j’ai étudié le
          problème que ma tutrice m’a octroyé et trouvé rapidement plusieurs
          solutions à ce problème, dont j’ai choisi celle où mes compétences
          pour la réaliser était les plus élevé.
          <br />
          <br />Afin de réaliser cette mission j’ai dû apprendre et installer
          des modules et des librairies du langage python. Lors de
          l’apprentissage de ces modules j’utilisais la version 3.7 de python
          sous une machine 64 bits. De plus j’ai utilisé un module pour
          interagir avec la base de données oracle et un autre module qui permet
          de compiler et créer un exécutable du programme. Après avoir appris et
          installé les modules j’ai pu commencer la réalisation du script.
        </p>
        <div class="post-image">
          <img class="img-fluid" src="@/assets/img/wallpaper-python.jpg" alt />
        </div>
        <p>
          Le jour suivant, le script fut terminé et j’ai pu commencer des tests
          sur le serveur, mais j’ai rencontré quelques erreurs sur le serveur,
          or sur ma machine le programme fonctionnait. De longues heures de
          recherches ont été nécessaire pour comprendre l’erreur qui me posait
          problème, dont la solution était que j’utilisé python 3.7 64 bits sous
          une machine 32 bits. Pour faire face à cette erreur j’ai dû recompiler
          mon script avec python 3.7 32 bits. Pour donner suite à cela j’ai
          effectué à nouveau un test sur le serveur mais une nouvelle erreur est
          apparue. Cela m’a demandé de nouvelles heures de recherche pour
          résoudre le nouvel problème qui se posait. J’ai alors compris que l’OS
          du serveur était un Windows serveur 2003 32 bits, or j’utilisais
          python 3.7. Toutefois, l’OS du serveur est trop ancien pour
          l’utilisation de python 3.5 ou plus, c’est pour cela que je me suis
          mis à utiliser python 2.7 32 bits. Par ailleurs, j’ai remarqué que la
          base de données utilisé Oracle 9.2, ce qui a nécessité que j’utilise
          un autre module pour interagir avec la base de données, car le module
          utilisé auparavant ne fonctionnait pas avec le module 9.2. Enfin, les
          nouveaux testes effectués ont été concluant, la mission était résolue.
        </p>
        <h3 class="mt-2 mb-1">Paramétrage sur l’outil Octime</h3>
        <p>
          Ma tutrice et moi-même nous sommes partagés la liste des
          collaborateurs, afin de modifier le paramétrage du profil en assignant
          le bon chef de vente et son responsable au bon magasin.
        </p>
        <h3 class="mt-2 mb-1">Création d’un nouveau programme</h3>
        <div class="post-image">
          <img class="img-fluid" src="@/assets/img/code.jpg" alt />
        </div>
        <p>
          Ma tutrice m’a donné une nouvelle tâche à accomplir qui consistait à
          envoyer des mails avec pièce jointes automatiques à la représentante
          des Ressources Humaines sur le serveur dans lequel je travaillais.
          C’est ainsi que j’ai pu découvrir et apprendre d’autres modules pour
          réaliser cette tâche, tout en continuant à utiliser python 2.7 32 bits
          pour éviter les erreurs précédentes. Lors des tests effectué tout à
          parfaitement fonctionner.
        </p>
        <h3 class="mt-2 mb-1">Bilan</h3>
        <p>
          Durant ces semaines dans cette entreprise, j’ai été confronté à
          l’ancienneté des appareils qui ne me permettait pas d’utiliser les
          ressources plus modernes. J’ai réalisé toutes les tâches que l’on
          m’avait confié. Cependant, quelques problèmes se sont révélés, mais
          par la force de la recherche j’ai résolu toutes les solutions. J’ai
          beaucoup apprécié à réaliser ses missions, car je me suis
          perfectionner dans certains domaines, en apprenant des informations,
          que j’ignorais de la part des autres membres de l’entreprise.
        </p>
      </div>
    </div>
  </article>
</template>
