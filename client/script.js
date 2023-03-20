import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_containerr');

let loadInterval;

function loadInterval(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent ='';
    }
  }, 300)
}

function typeText(element, text) {
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe (isAi, value, uniqueID) {
  return (
    `
      <div class='wrapper ${isAi && 'ai'}'>
        <div class="chat">
          <div className="profile">
            <img
              src="${isAi ? bot : user}"
              ALT="${isAi ? 'bot' : 'user'}"
            >
          </div>
        </div>
      </div>
    `
  )
}