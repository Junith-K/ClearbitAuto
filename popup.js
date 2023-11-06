import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  if (activeTab.url.includes("mail.google.com")) {
    const email = document.getElementById('email');
    const domain = document.getElementById('domain');
    const checkbox = document.getElementById('myCheckbox');
    const checkbox1 = document.getElementById('myCheckbox1');
    const buttons = document.querySelectorAll('.format');
    const myButton = document.getElementById('myButton');
    const jobTitle = document.getElementById('jobTitle');
    const jobLink = document.getElementById('jobLink');
    const additionalFields = document.getElementById('additionalFields');
    const myButtonStop = document.getElementById('myButtonStop');

    
    const selectedButtonId = localStorage.getItem('selectedButtonId');
    const getemail = localStorage.getItem('email');
    const getdomain = localStorage.getItem('domain');
    const getcheckedornot = localStorage.getItem('checkedornot');
    const getcheckedornot1 = localStorage.getItem('checkedornot1');
    const getjobTitle = localStorage.getItem('jobTitle');
    const getjobLink = localStorage.getItem('jobLink');

    email.value = getemail?getemail:""
    email.addEventListener('input', function() {
      localStorage.setItem('email', email.value);
    });

    domain.value = getdomain?getdomain:""
    domain.addEventListener('input', function() {
      localStorage.setItem('domain', domain.value);
    });

    jobTitle.value = getjobTitle?getjobTitle:""
    jobTitle.addEventListener('input', function() {
      localStorage.setItem('jobTitle', jobTitle.value);
    });

    jobLink.value = getjobLink?getjobLink:""
    jobLink.addEventListener('input', function() {
      localStorage.setItem('jobLink', jobLink.value);
    });

    checkbox1.checked = getcheckedornot1=="true"?true:false;

    checkbox.checked = getcheckedornot=="true"?true:false;
    if (checkbox.checked) {
      additionalFields.style.display = 'block';
    } else {
      additionalFields.style.display = 'none';
    }

    checkbox.addEventListener('change', function() {
      localStorage.setItem('checkedornot', checkbox.checked);
      if (checkbox.checked) {
        additionalFields.style.display = 'block';
      } else {
        additionalFields.style.display = 'none';
      }
    });

    checkbox1.addEventListener('change', function() {
      localStorage.setItem('checkedornot1', checkbox1.checked);
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
        localStorage.setItem('selectedButtonId', id);
      });
      
      if (button.id === selectedButtonId) {
        button.classList.add('selected');
      }
    });


    myButton.addEventListener('click', function() {
      const selectedButtonId = localStorage.getItem('selectedButtonId');
      const getemail = localStorage.getItem('email');
      const getdomain = localStorage.getItem('domain');
      const getcheckedornot = localStorage.getItem('checkedornot');
      const getjobTitle = localStorage.getItem('jobTitle');
      const getjobLink = localStorage.getItem('jobLink');
      const engineer = localStorage.getItem('checkedornot1')
      console.log(getemail)
      console.log(getdomain)
      console.log(getcheckedornot)
      console.log(getjobTitle)
      console.log(getjobLink)

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: `runMyFunction${selectedButtonId}`, messageText: selectedButtonId, email: getemail, domain: getdomain, checkedornot: getcheckedornot, jobTitle: getjobTitle, jobLink: getjobLink, engineer: engineer });
      });
    });

    myButtonStop.addEventListener('click', function(){
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: `stop`, messageText: "stop"});
      });
    });

  } else {
    const container = document.getElementsByClassName("container")[0];
    container.textContent = 'This is not a Gmail page';
  }
});
