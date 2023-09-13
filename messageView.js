class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#remove-message');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    //console.log('Thanks for clicking me!');
    const message = document.querySelector('#username-input').value;
    console.log(message)

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message

  document.querySelector('#username-input').value=''


    document.querySelector('#main-container').append(messageElement)
  }
  hideMessage(){
    document.querySelector('#message').remove()
  }
}

module.exports = MessageView;