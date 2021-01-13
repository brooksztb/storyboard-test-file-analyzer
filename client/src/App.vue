<template>
	<div id="app">
		<div v-if="fileInfo && fileInfo.source">
			<span>Results for file at URI: {{ fileInfo.source.uri }}</span>
			<analzyed-file :fileInfo="fileInfo" />
		</div>
	</div>
</template>

<script>
// import AnalyzedFile from './components/AnalzyedFile'
import axios from 'axios'
import AnalzyedFile from './components/AnalzyedFile.vue'

const API_URL = 'http://localhost:4000/fileinfo'

export default {
	name: 'App',
	data() {
		return {
			fileInfo: {},
			error: '',
		}
	},
	components: {
		AnalzyedFile,
		// AnalyzedFile,
	},
	mounted() {
		//reset the data before requesting the fileinfo
		this.fileInfo = {}
		this.error = ''

		axios.get(API_URL).then((response) => {
			if (response.status == 200 && response.data) {
				this.fileInfo = response.data
			} else {
				this.error = response.data
			}
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
