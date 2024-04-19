const translation = {
	en: {
		Dog: 'A dog is a four-legged friend of man, known for its loyalty and devotion.',
		Mercedes:
			'Mercedes is a German luxury and sports car brand, known for its high quality, elegance, and innovative solutions.',
		Fishing: 'Fishing is a popular sport and hobby involving catching fish from water using various methods and tools.',
		Football:
			'Football engages both physical skills such as speed, agility, and strength, and tactical thinking and teamwork.',
		Code:
			'Programming is a key element of creating software that can be used for automating processes, solving business problems, or creating games and mobile applications.',
		LogoText: 'Flips Cards',
	},
	pl: {
		Dog: 'Pies to czworonożny przyjaciel człowieka, znany ze swojej lojalności i oddania',
		Mercedes:
			'Mercedes to niemiecka marka samochodów luksusowych i sportowych, znana z wysokiej jakości, elegancji i innowacyjnych rozwiązań.',
		Fishing:
			'Łowienie ryb to popularny sport i hobby polegający na połowie ryb z wody za pomocą różnych metod i narzędzi.',
		Football:
			'Piłka nożna angażuje zarówno umiejętności fizyczne, takie jak szybkość, zwinność i siła, jak i taktyczne myślenie i współpracę z drużyną.',
		Code:
			'Programowanie jest kluczowym elementem tworzenia oprogramowania, które może być używane do automatyzacji procesów, rozwiązywania problemów biznesowych, czy też tworzenia gier i aplikacji mobilnych.',
		LogoText: 'Obracane karty',
	},
}

const panelsData = [
	{
		title: 'Dog',
		image:
			'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Mercedes',
		image:
			'https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Fishing',
		image:
			'https://images.unsplash.com/photo-1529230117010-b6c436154f25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Football',
		image:
			'https://images.unsplash.com/photo-1524748969064-cf3dabd7b84d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Code',
		image:
			'https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
]

function generatePanels() {
	const containerBox = document.querySelector('.container__box')
	panelsData.forEach((data, index) => {
		const panel = document.createElement('div')
		panel.classList.add('panel')
		panel.style.backgroundImage = `url(${data.image})`
		panel.innerHTML = `
                <h3 id="text">${translation.pl[data.title]}</h3>
            `
		if (index == 0) {
			panel.classList.add('active')
		}

		containerBox.appendChild(panel)
	})
}
generatePanels()

const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}

function updateTranslation(lang) {
	panels.forEach((panel, index) => {
		const title = panel.querySelector('#text')
		title.innerText = translation[lang][panelsData[index].title]
	})
}

document.querySelector('.pl-flag').addEventListener('click', () => {
	updateTranslation('pl')
})

document.querySelector('.en-flag').addEventListener('click', () => {
	updateTranslation('en')
})

updateTranslation('pl')
