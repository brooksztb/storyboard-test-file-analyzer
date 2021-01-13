<template>
	<div
		id="app"
		class="flex flex-col items-center max-w-1200px w-full m-auto p-10"
	>
		<h1 class="text-2xl">Audio File Analyzer</h1>
		<div v-if="fileInfo && fileInfo.source" class="flex flex-col items-center">
			<span class="text-md">Results of file(s) analysis</span>
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

		//could be improved to pull several files from a server and list them out
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

<style></style>
