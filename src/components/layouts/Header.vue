<template>
  <header :data-width="headerWidth">
    <nav class="header-nav" :class="{ show: show }">
      <div class="header-nav-top">
        <div class="nav-welcome">
          <div class="welcome-text">Bienvenu</div>
          <svg
            @click="show = !show"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.2266 42.3467L28.88 32L39.2266 21.6533C39.4735 21.4065 39.6694 21.1134 39.803 20.7908C39.9366 20.4682 40.0054 20.1225 40.0054 19.7733C40.0054 19.4242 39.9366 19.0785 39.803 18.7559C39.6694 18.4333 39.4735 18.1402 39.2266 17.8933C38.9797 17.6465 38.6866 17.4506 38.3641 17.317C38.0415 17.1834 37.6958 17.1146 37.3466 17.1146C36.9975 17.1146 36.6518 17.1834 36.3292 17.317C36.0066 17.4506 35.7135 17.6465 35.4666 17.8933L23.2266 30.1333C22.9794 30.38 22.7833 30.6731 22.6495 30.9957C22.5157 31.3183 22.4468 31.6641 22.4468 32.0133C22.4468 32.3626 22.5157 32.7084 22.6495 33.031C22.7833 33.3536 22.9794 33.6466 23.2266 33.8933L35.4666 46.1333C36.5066 47.1733 38.1866 47.1733 39.2266 46.1333C40.24 45.0933 40.2666 43.3867 39.2266 42.3467Z"
              fill="#FFF500"
            />
          </svg>
        </div>
        <div class="nav-logo">
          <img src="@/assets/img/logo.svg" alt="My logo" />
          <span class="nav-logo-title">Teixeira</span>
        </div>
        <ul class="nav-list">
          <li
            @click="itemActive(isActive[0], 0)"
            class="nav-item"
            :class="{ active: isActive[0] }"
          >
            <router-link to="/">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1564 31.5625L33.4127 5.8375C33.2273 5.65178 33.0072 5.50443 32.7648 5.4039C32.5224 5.30337 32.2626 5.25162 32.0002 5.25162C31.7378 5.25162 31.478 5.30337 31.2356 5.4039C30.9932 5.50443 30.7731 5.65178 30.5877 5.8375L4.84395 31.5625C4.09395 32.3125 3.66895 33.3313 3.66895 34.3938C3.66895 36.6 5.4627 38.3938 7.66894 38.3938H10.3814V56.75C10.3814 57.8563 11.2752 58.75 12.3814 58.75H28.0002V44.75H35.0002V58.75H51.6189C52.7252 58.75 53.6189 57.8563 53.6189 56.75V38.3938H56.3314C57.3939 38.3938 58.4127 37.975 59.1627 37.2188C60.7189 35.6563 60.7189 33.125 59.1564 31.5625V31.5625Z"
                />
              </svg>
              <div class="item-text">
                Accueil
                <span class="item-text-line">─── 01.</span>
              </div>
            </router-link>
          </li>
          <li
            @click="itemActive(isActive[1], 1)"
            class="nav-item"
            :class="{ active: isActive[1] }"
          >
            <a href="/#resume">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.3335 53.3333H10.6668C9.25234 53.3333 7.89579 52.7714 6.89559 51.7712C5.8954 50.771 5.3335 49.4145 5.3335 48V16C5.3335 14.5855 5.8954 13.229 6.89559 12.2288C7.89579 11.2286 9.25234 10.6667 10.6668 10.6667H53.3335C54.748 10.6667 56.1045 11.2286 57.1047 12.2288C58.1049 13.229 58.6668 14.5855 58.6668 16V48C58.6668 49.4145 58.1049 50.771 57.1047 51.7712C56.1045 52.7714 54.748 53.3333 53.3335 53.3333ZM13.3335 34.6667V40H42.6668V34.6667H13.3335ZM13.3335 24V29.3333H50.6668V24H13.3335Z"
                />
              </svg>
              <div class="item-text">
                CV
                <span class="item-text-line">─── 02.</span>
              </div>
            </a>
          </li>
          <li
            @click="itemActive(isActive[2], 2)"
            class="nav-item"
            :class="{ active: isActive[2] }"
          >
            <a href="/#portfolio">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.3333 24H18.6667V18.6667H45.3333V24ZM45.3333 34.6667H18.6667V29.3333H45.3333V34.6667ZM37.3333 45.3333H18.6667V40H37.3333V45.3333ZM32 8C32.7072 8 33.3855 8.28095 33.8856 8.78105C34.3857 9.28114 34.6667 9.95942 34.6667 10.6667C34.6667 11.3739 34.3857 12.0522 33.8856 12.5523C33.3855 13.0524 32.7072 13.3333 32 13.3333C31.2928 13.3333 30.6145 13.0524 30.1144 12.5523C29.6143 12.0522 29.3333 11.3739 29.3333 10.6667C29.3333 9.95942 29.6143 9.28114 30.1144 8.78105C30.6145 8.28095 31.2928 8 32 8V8ZM50.6667 8H39.52C38.4 4.90666 35.4667 2.66666 32 2.66666C28.5333 2.66666 25.6 4.90666 24.48 8H13.3333C11.9188 8 10.5623 8.5619 9.5621 9.56209C8.5619 10.5623 8 11.9188 8 13.3333V50.6667C8 52.0811 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H50.6667C52.0812 56 53.4377 55.4381 54.4379 54.4379C55.4381 53.4377 56 52.0811 56 50.6667V13.3333C56 11.9188 55.4381 10.5623 54.4379 9.56209C53.4377 8.5619 52.0812 8 50.6667 8Z"
                />
              </svg>
              <div class="item-text">
                Portfolio
                <span class="item-text-line">─── 03.</span>
              </div>
            </a>
          </li>
          <li
            @click="itemActive(isActive[3], 3)"
            class="nav-item"
            :class="{ active: isActive[3] }"
          >
            <router-link to="/blog">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3334 26.6667H26.6667C25.2 26.6667 24 25.4667 24 24C24 22.5333 25.2 21.3333 26.6667 21.3333H33.3334C34.8 21.3333 36 22.5333 36 24C36 25.4667 34.8 26.6667 33.3334 26.6667ZM40 37.3333C40 35.8667 38.8 34.6667 37.3334 34.6667H26.6667C25.2 34.6667 24 35.8667 24 37.3333C24 38.8 25.2 40 26.6667 40H37.3334C38.8 40 40 38.8 40 37.3333ZM58.6667 10.6667V53.3333C58.6667 56.2933 56.2934 58.6667 53.3334 58.6667H10.6667C7.70671 58.6667 5.33337 56.2933 5.33337 53.3333V10.6667C5.33337 7.70667 7.70671 5.33334 10.6667 5.33334H53.3334C56.2934 5.33334 58.6667 7.70667 58.6667 10.6667ZM48 32C48 32 48 29.3333 45.3334 29.3333C42.8 29.4133 42.6667 26.6667 42.6667 26.6667V21.3333C42.6667 16.9067 39.0934 13.3333 34.6667 13.3333H24C19.5734 13.3333 16 16.9067 16 21.3333V40C16 44.4267 19.5734 48 24 48H40C44.4267 48 48 44.4267 48 40V32Z"
                />
              </svg>

              <div class="item-text">
                Blog
                <span class="item-text-line">─── 04.</span>
              </div>
            </router-link>
          </li>
          <li
            @click="itemActive(isActive[4], 4)"
            class="nav-item"
            :class="{ active: isActive[4] }"
          >
            <a href="/#contact">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.6125 55.35L56.2625 48.6938C56.7341 48.2242 57.1083 47.6661 57.3636 47.0516C57.6188 46.437 57.7502 45.778 57.75 45.1125C57.75 43.7563 57.2187 42.4813 56.2625 41.525L49.1 34.3625C48.6305 33.8909 48.0724 33.5167 47.4578 33.2615C46.8432 33.0062 46.1842 32.8749 45.5187 32.875C44.1625 32.875 42.8875 33.4063 41.9312 34.3625L36.6938 39.6C33.9915 38.374 31.5332 36.6695 29.4375 34.5688C27.3316 32.4733 25.6209 30.0152 24.3875 27.3125L29.625 22.075C30.0966 21.6055 30.4708 21.0474 30.7261 20.4328C30.9813 19.8182 31.1127 19.1593 31.1125 18.4938C31.1125 17.1375 30.5813 15.8625 29.625 14.9063L22.4688 7.73752C21.9983 7.26534 21.4392 6.89083 20.8235 6.63555C20.2078 6.38026 19.5478 6.24924 18.8812 6.25002C17.525 6.25002 16.25 6.78127 15.2938 7.73752L8.65 14.3813C7.11875 15.9063 6.25 18.0125 6.25 20.175C6.25 20.6313 6.2875 21.0688 6.3625 21.5C7.75 29.925 12.2312 38.2813 18.9688 45.025C25.7 51.7625 34.05 56.2375 42.5 57.6438C45.0812 58.0688 47.7375 57.2125 49.6125 55.35V55.35Z"
                />
              </svg>
              <div class="item-text">
                Contact
                <span class="item-text-line">─── 05.</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="header-nav-bottom">
        <ul class="nav-social-list">
          <li class="social-item">
            <a href="https://www.facebook.com/david.teixeira.18488">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.725 55.9921V34.1361H43.0983L44.1943 25.5787H35.725V20.1281C35.725 17.6587 36.413 15.9681 39.957 15.9681H44.4476V8.33872C42.2627 8.10456 40.0664 7.9915 37.869 8.00005C31.3516 8.00005 26.877 11.9787 26.877 19.2827V25.5627H19.5516V34.1201H26.893V55.9921H35.725Z"
                />
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a href="https://twitter.com/_TeixeiraD">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58 15.8938C56.0875 16.7188 54.0063 17.3125 51.8625 17.5438C54.0882 16.2215 55.755 14.1325 56.55 11.6688C54.4615 12.9112 52.1735 13.7824 49.7875 14.2438C48.7903 13.1777 47.5842 12.3284 46.2444 11.7488C44.9046 11.1692 43.4598 10.8718 42 10.875C36.0938 10.875 31.3438 15.6625 31.3438 21.5375C31.3438 22.3625 31.4438 23.1875 31.6063 23.9813C22.7625 23.5188 14.875 19.2938 9.63128 12.825C8.67581 14.457 8.17511 16.3152 8.18127 18.2063C8.18127 21.9063 10.0625 25.1688 12.9313 27.0875C11.2407 27.0209 9.58967 26.5563 8.11252 25.7313V25.8625C8.11252 31.0438 11.775 35.3375 16.6563 36.325C15.7398 36.5631 14.7969 36.6849 13.85 36.6875C13.1563 36.6875 12.5 36.6188 11.8375 36.525C13.1875 40.75 17.1188 43.8188 21.8 43.9188C18.1375 46.7875 13.55 48.475 8.56878 48.475C7.67502 48.475 6.85002 48.4438 5.99377 48.3438C10.7188 51.375 16.325 53.125 22.3625 53.125C41.9625 53.125 52.6875 36.8875 52.6875 22.7938C52.6875 22.3313 52.6875 21.8688 52.6563 21.4063C54.7313 19.8875 56.55 18.0063 58 15.8938Z"
                />
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.linkedin.com/in/teixeirad/">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2878 19.192C16.5102 19.192 19.1225 16.5797 19.1225 13.3573C19.1225 10.1349 16.5102 7.52264 13.2878 7.52264C10.0654 7.52264 7.45312 10.1349 7.45312 13.3573C7.45312 16.5797 10.0654 19.192 13.2878 19.192Z"
                />
                <path
                  d="M24.6318 23.6133V55.9839H34.6825V39.9759C34.6825 35.7519 35.4772 31.6613 40.7145 31.6613C45.8798 31.6613 45.9438 36.4906 45.9438 40.2426V55.9866H55.9998V38.2346C55.9998 29.5146 54.1225 22.8133 43.9305 22.8133C39.0372 22.8133 35.7572 25.4986 34.4158 28.04H34.2798V23.6133H24.6318V23.6133ZM8.25317 23.6133H18.3198V55.9839H8.25317V23.6133Z"
                />
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a href="https://github.com/DavidMTdev">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.975 4.76874C16.5188 4.76249 4 17.275 4 32.7187C4 44.9312 11.8312 55.3125 22.7375 59.125C24.2062 59.4937 23.9813 58.45 23.9813 57.7375V52.8937C15.5 53.8875 15.1562 48.275 14.5875 47.3375C13.4375 45.375 10.7188 44.875 11.5312 43.9375C13.4625 42.9437 15.4312 44.1875 17.7125 47.5562C19.3625 50 22.5812 49.5875 24.2125 49.1812C24.5687 47.7125 25.3313 46.4 26.3813 45.3812C17.5938 43.8062 13.9312 38.4437 13.9312 32.0687C13.9312 28.975 14.95 26.1312 16.95 23.8375C15.675 20.0562 17.0688 16.8187 17.2563 16.3375C20.8875 16.0125 24.6625 18.9375 24.9562 19.1687C27.0187 18.6125 29.375 18.3187 32.0125 18.3187C34.6625 18.3187 37.025 18.625 39.1063 19.1875C39.8125 18.65 43.3125 16.1375 46.6875 16.4437C46.8688 16.925 48.2313 20.0875 47.0312 23.8187C49.0563 26.1187 50.0875 28.9875 50.0875 32.0875C50.0875 38.475 46.4 43.8437 37.5875 45.3937C38.3423 46.136 38.9416 47.0213 39.3505 47.9978C39.7594 48.9744 39.9695 50.0226 39.9688 51.0812V58.1125C40.0188 58.675 39.9688 59.2312 40.9062 59.2312C51.975 55.5 59.9437 45.0437 59.9437 32.725C59.9437 17.275 47.4188 4.76874 31.975 4.76874V4.76874Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: [true, false, false, false, false],
      headerWidth: Number,
      show: true
    };
  },
  mounted() {
    this.resize();
  },
  updated() {
    this.resize();
  },
  methods: {
    resize() {
      this.headerWidth = document.querySelector(".header-nav").clientWidth;
      document.querySelector("main").style.marginLeft =
        this.headerWidth - 1 + "px";
      document.querySelector("footer").style.marginLeft =
        this.headerWidth - 1 + "px";
    },
    itemActive(value, key) {
      if (!value) {
        this.isActive.forEach((element, index) => {
          this.isActive[index] = false;
        });

        this.isActive[key] = true;

        this.$forceUpdate();
      }
    }
  }
};
</script>
