<template>
	<div>
		<div v-if="fileInfo">
			<div>
				<div>File Type:</div>
				{{ fileInfo.properties.format.format_long_name }}
				<div>File Size:</div>
				{{ fileInfo.properties.format.size }} {{ fileSizeUnits }}
				<div>Codec Type:</div>
				{{ fileInfo.properties.stream.codec_type }}
				<div>File Type:</div>
				{{ fileInfo.properties.stream.duration }} {{ fileDurationUnits }}
				<div>Channel Count:</div>
				{{ fileInfo.properties.stream.channels }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AnalyzedFile',
	props: {
		fileInfo: Object,
		fileSizeUnits: {
			type: String,
			default: 'bytes',
		},
		fileDurationUnits: {
			type: String,
			default: 'seconds',
		},
	},
}
</script>

<style></style>
