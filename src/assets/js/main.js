const messagesContainer = document.querySelector('.chat-container')

const scrollToBottom = element => {
	element.scrollTo(0, messagesContainer.scrollHeight)
}
scrollToBottom(messagesContainer)

const infoOpenBtns = document.querySelectorAll('[data-info-open-btn]')
const infoCloseBtns = document.querySelectorAll('[data-info-close-btn]')

const sectionInfo = document.querySelector('.section-info')
infoOpenBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		sectionInfo.classList.add('active')
	})
})

infoCloseBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		sectionInfo.classList.remove('active')
	})
})
