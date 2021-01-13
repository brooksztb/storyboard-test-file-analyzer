<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<div>{{ fileinfo }}</div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const API_URL = 'http://localhost:4000/fileinfo'

export default {
	name: 'App',
	data() {
		return {
			fileinfo: {},
		}
	},
	components: {
		HelloWorld,
	},
	mounted() {
		fetch(API_URL)
			.then((response) => response.json())
			.then((result) => {
				this.fileinfo = result
			})
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
