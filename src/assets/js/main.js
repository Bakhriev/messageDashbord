const messagesContainer = document.querySelector('.chat-container')

const scrollToBottom = element => {
	element.scrollTo(0, messagesContainer.scrollHeight)
}
scrollToBottom(messagesContainer)
