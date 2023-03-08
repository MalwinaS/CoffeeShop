<script>
import { ref } from 'vue';

export default {
  setup() {
    const navOpen = ref(false);

    function toggleNavigation() {
		navOpen.value = !navOpen.value;
    }

    return {
	navOpen,
      toggleNavigation,
    };
  },
};
</script>

<template>
	<div id="nav-desktop">
    	<nav>
      	<router-link class="menu-link" to="/">Nasza palarnia</router-link>
      	<router-link class="menu-link" to="/store">Kup kawę</router-link>
      	<router-link class="menu-link" to="/contact">Kontakt</router-link>
    	</nav>
	</div>

	<hr class="line-hr">

    <div id="sidemenu">
    	<button class="sidemenu__btn" @click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
			<span class="top"></span>
			<span class="mid"></span>
			<span class="bottom"></span>
		</button>
    	<transition name="translateX">
      		<nav v-show="navOpen">
        		<div class="sidemenu__wrapper">
          			<ul class="sidemenu__list">
                		<router-link class="sidemenu__menu-link" to="/" @click="navOpen=!navOpen">Nasza palarnia</router-link>
      					<router-link class="sidemenu__menu-link" to="/store" @click="navOpen=!navOpen">Kup kawę</router-link>
      					<router-link class="sidemenu__menu-link" to="/contact" @click="navOpen=!navOpen">Kontakt</router-link>
          			</ul>
       			 </div>
     		</nav>
    	</transition>
    </div>
</template>

<style scoped lang="scss">

#nav-desktop {
nav {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  margin: 0 20%;
}
nav a {
  font-weight: bold;
  color: $color-primary;
  font-size: $font-size-base;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: $color-green;
}
@media only screen and (max-width: 992px) {
	display: none;
	}
}
.line-hr {
	@media only screen and (max-width: 992px) {
		margin: 0;
	}
}
#sidemenu {
	nav {
		width: 100%;
		background: $color-basic;
		position: fixed;
		left: 0;
		z-index: 99;
	}
	.sidemenu {
		&__btn {
			display: block;
			width: 50px;
			height: 50px;
			background: $color-basic;
			border: none;
			position: absolute;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: $color-primary;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .4s ease;
				&.top {
					transform: translateY(-8px);
				}
				&.bottom {
					transform: translateY(8px);
				}
			}
			&.active{
				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}

		}

		&__menu-link {
			list-style:none;
      		padding: 0;
      		margin: 0;
			margin-right: 50px;
        	text-decoration: none;
			line-height: 1.6em;
			padding: .5em;
			display: block;
			color: $color-primary;
			transition: .4s ease;
			font-size: $font-size-small;
				&:hover {
					opacity: 0.5;
			}
		}
	}
	@media only screen and (max-width: 992px) {
		display: block
	}
	display: none;
}

.translateX-enter{
	transform:translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
	transform-origin: top left 0;
	transition:.2s ease;
}

.translateX-leave-to{
	transform: translateX(-200px);
	opacity: 0;
}

</style>
