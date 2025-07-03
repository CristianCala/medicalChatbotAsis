<template>
	<div class="min-h-screen flex items-center justify-center bg-slate-800">
		<div class="bg-white rounded-2xl shadow-lg p-8 w-80 text-center space-y-6">
			<div class="relative mx-auto w-20 h-20">
				<div class="bg-teal-400 rounded-full w-full h-full flex items-center justify-center">
					<div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
					<div class="bg-teal-600 rounded-full w-6 h-6 border-2 border-white"/></div>
				</div>
				<div class="absolute inset-0 pointer-events-none">
					<div
						v-for="(bubble, i) in bubbles"
						:key="i"
						class="absolute bg-teal-400 rounded-full opacity-80"
						:style="{
							width: bubble.size + 'px',
							height: bubble.size + 'px',
							top: bubble.top + '%',
							left: bubble.left + '%'
						}">
					</div>
				</div>
			</div>

			<h1 class="text-4xl font-black text-gray-800">Bienvenido</h1>
			<p
				class="text-2xl text-gray-600"
				style="margin: 0;"
			>
				HelpDesk Medical Assistant
			</p>

			<button class="text-xl bg-teal-400 text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-500 transition w-full">
				Iniciar
			</button>
		</div>
	</div>
</template>

<script setup>
	const bubbles = [
		{ size: 8, top: -10, left: 10 },
		{ size: 12, top: 0, left: 80 },
		{ size: 16, top: 30, left: -10 },
		{ size: 10, top: 50, left: 90 },
		{ size: 14, top: 70, left: 20 },
		{ size: 6, top: 10, left: 40 },
	]
</script>
