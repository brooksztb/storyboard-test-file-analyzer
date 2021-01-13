<template>
	<div class="flex flex-col w-full max-w-400px p-4 m-4 bg-primary rounded">
		<div v-if="fileInfo">
			<div class="flex flex-col items-center">
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">File URI:</span>
					<span>{{ fileInfo.source.uri }}</span>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">File Type:</span>
					<span>{{ fileInfo.properties.format.format_long_name }}</span>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">File Size:</span
					><span
						>{{ fileInfo.properties.format.size }} {{ fileSizeUnits }}</span
					>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">Sample Rate:</span
					><span>{{ sampleRate }}</span>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">Codec Type:</span
					><span>{{ fileInfo.properties.stream.codec_type }}</span>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">Duration:</span
					><span
						>{{ fileInfo.properties.stream.duration }}
						{{ fileDurationUnits }}</span
					>
				</div>
				<div class="flex flex-row flex-wrap justify-between w-full">
					<span class="text-secondary font-bold">Channel Count:</span
					><span>{{ fileInfo.properties.stream.channels }}</span>
				</div>
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
		sampleRateConversion: {
			type: Object,
			default: () => {
				return { units: 'kHz', perSecond: 1000 }
			},
		},
	},
	computed: {
		sampleRate() {
			return this.fileInfo.properties.stream.sample_rate
				? `${this.convertedSampleRate} ${this.sampleRateConversion.units}`
				: ''
		},
		convertedSampleRate() {
			return (
				this.fileInfo.properties.stream.sample_rate /
				this.sampleRateConversion.perSecond
			)
		},
	},
}
</script>

<style></style>
