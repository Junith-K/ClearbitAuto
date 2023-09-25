import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  if (activeTab.url.includes("mail.google.com")) {
    const buttons = document.querySelectorAll('.format');
    const selectedButtonId = localStorage.getItem('selectedButtonId');

    const getemail = localStorage.getItem('email');
    const getdomain = localStorage.getItem('domain');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: `runMyFunction${selectedButtonId}`, messageText: selectedButtonId, email: getemail, domain: getdomain });
    });
    const email = document.getElementById('email');
    email.value = getemail
    email.addEventListener('input', function() {
      localStorage.setItem('email', email.value);
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: `runMyFunction${selectedButtonId}`, messageText: selectedButtonId, email: email.value, domain: domain.value });
      });
    });
    const domain = document.getElementById('domain');
    domain.value = getdomain
    domain.addEventListener('input', function() {
      localStorage.setItem('domain', domain.value);
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: `runMyFunction${selectedButtonId}`, messageText: selectedButtonId, email: email.value, domain: domain.value });
      });
    });
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(otherButton => {
          if (otherButton !== button) {
            otherButton.classList.remove('selected');
          }
        });
        button.classList.add('selected');
        const id = button.id;
        
        // Store the selected button's ID in local storage
        localStorage.setItem('selectedButtonId', id);
        
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: `runMyFunction${id}`, messageText: id, email: email.value, domain: domain.value });
        });
      });
      
      // Set the selected class based on the stored ID
      if (button.id === selectedButtonId) {
        button.classList.add('selected');
      }
    });
  } else {
    const container = document.getElementsByClassName("container")[0];
    container.textContent = 'This is not a Gmail page';
  }
});
