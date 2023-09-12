/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('remove the message ', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hidebuttonEl = document.querySelector('#remove-message');
    hidebuttonEl.click();

    expect(document.querySelector('#message')).toBeNull()
  })
});