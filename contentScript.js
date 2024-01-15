//ENV Variables
var SUBJECT="Regarding Interest in Software Engineer Intern Opportunity"
var JOB_TITLE_REPLACE=/Software Engineer Intern/g
var HR=`
<p>Dear PERSON_NAME,</p>

<p>I hope you're doing well FIRST_NAME. I'm reaching out with genuine interest in working with COMPANY_NAME.</p> 

<p>I have one year of experience and have already completed three full-time internships, where I worked on various enterprise-level applications as a Software Engineer. I'm genuinely interested to work as a Software Engineer Intern at COMPANY_NAME, and I would greatly appreciate your help FIRST_NAME.</p>

<p>I hope you check out my portfolio, I've gotten tons of appreciation from managers for its visually stunning experience <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>. I look forward to a call where I can provide a more in depth look into my profile and discuss the Software Engineer Intern position further.</p>

<a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

<p>Thanks for your time FIRST_NAME.</p>

<p>
Thanks & Regards
<br>
Junith
<br>
+919346723027
</p>`;

var NO_POSITION_EMPLOYEE=`
<p>Dear PERSON_NAME,</p>

<p>I hope you're doing well FIRST_NAME. I'm reaching out with genuine interest in working with COMPANY_NAME.</p> 

<p>I have one year of experience and have already completed three full-time internships, where I worked on various enterprise-level applications as a Software Engineer. I'm genuinely interested to work as a Software Engineer Intern at COMPANY_NAME, and I would greatly appreciate your help FIRST_NAME.</p>

<p>I hope you check out my portfolio, I've gotten tons of appreciation from managers for its visually stunning experience <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>. So even though there might not be an open position as Software Engineer Intern right now, I would really appreciate it if you could forward this mail/resume to the recruiting/hr team.</p>

<a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

<p>Thanks for your time FIRST_NAME.</p>

<p>
Thanks & Regards
<br>
Junith
<br>
+919346723027
</p>`;

var REFERRAL=`
<p>Dear PERSON_NAME,</p>

<p>I hope you're doing well FIRST_NAME. I'm reaching out with genuine interest in working with COMPANY_NAME.</p> 

<p>I have one year of experience and have already completed three full-time internships, where I worked on various enterprise-level applications as a Software Engineer. I'm genuinely interested to work as a Software Engineer Intern at COMPANY_NAME, and I would greatly appreciate your help FIRST_NAME.</p>

<p>I hope you check out my portfolio, I've gotten tons of appreciation from managers for its visually stunning experience <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>. So it would be great to get a referral from your side for the Software Engineer Intern, if not possible please forward this mail/resume to the recruiting/hr team.</p>

<a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

<p>Thanks for your time FIRST_NAME.</p>

JOB_LINK

<p>
Thanks & Regards
<br>
Junith
<br>
+919346723027
</p>`;


function composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer) {
  return new Promise((resolve) => {
    document.querySelector('input.agP.aFw').value = email
    if (checkedornot == "true") {
      subject = subject.replace(JOB_TITLE_REPLACE, jobTitle);
    } else {
      if (jobTitle != "") {
        subject = subject.replace(JOB_TITLE_REPLACE, jobTitle);
      }
    }
    document.querySelector('input[name="subjectbox"]').value = subject
    const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
    const signatureDiv = divElement.querySelector('#mt-signature');

    if (signatureDiv) {
      divElement.removeChild(signatureDiv);
    }
    let temp_data;
    if (checkedornot == "false" || checkedornot == null) {
      temp_data = engineer=="true" ? NO_POSITION_EMPLOYEE : HR;
    } else {
      temp_data = REFERRAL;
      if(jobLink){
        temp_data = temp_data.replace("JOB_LINK", `<a href='${jobLink}'>Job_Link</a><br>`)
      }else{
        temp_data = temp_data.replace("JOB_LINK", "")
      }
    }
    temp_data = temp_data.replace("PERSON_NAME", person_name)
    temp_data = temp_data.replace(/COMPANY_NAME/g, company_name.charAt(0).toUpperCase() + company_name.slice(1));
    temp_data = temp_data.replace(/FIRST_NAME/g, person_name.split(" ")[0])
    if(jobTitle!=""){
      temp_data = temp_data.replace(JOB_TITLE_REPLACE, jobTitle)
    }
    divElement.innerHTML = temp_data;
    const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
    divElement1.addEventListener('click', function onClick() {
      divElement1.removeEventListener('click', onClick);
      resolve();
    })
  })
}

var namui = "";

async function checkForElement1(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      console.log(gmail)
      console.log(domain)
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0].toLowerCase() + "." + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement2(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0][0].toLowerCase() + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement3(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement4(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0].toLowerCase() + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement5(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      console.log(gmail)
      console.log(domain)
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0].toLowerCase() + "." + name[name.length - 1][0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement6(gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
  const buttons = document.querySelectorAll('.cb-group.cb-flex.cb-w-full.cb-items-center.cb-justify-between.cb-bg-white.cb-px-6.cb-py-3');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      const buttonName = button.querySelector('.cb-text-md.cb-mb-1.cb-text-md.cb-mt-0.cb-font-medium').innerText;
      if (buttonName == namui) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
    return;
  }
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  const mailer = document.querySelector(".ck-link");
  const dommy = mailer.textContent.split('.')
  const sodommy = dommy[1]
  const soemmy = dommy[0]
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
    const com_gmail = gmail == "" || gmail == null ? soemmy : gmail;
    const domain_name = domain == "" || domain == null ? sodommy : domain;
    if (namui != person_name) {
      console.log(gmail)
      console.log(domain)
      namui = person_name;
      const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
      composeButton.click();

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      let name = person_name.split(" ")
      let email = name[0].toLowerCase() + name[name.length - 1][0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      console.log(email)
      await composeEmail(email, SUBJECT, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

let checkInterval1, checkInterval2, checkInterval3, checkInterval4, checkInterval5, checkInterval6;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  clearInterval(checkInterval1);
  clearInterval(checkInterval2);
  clearInterval(checkInterval3);
  clearInterval(checkInterval4);
  clearInterval(checkInterval5);
  clearInterval(checkInterval6);

  if (message.messageText === "f1") {
    checkInterval1 = setInterval(() => checkForElement1(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f2") {
    checkInterval2 = setInterval(() => checkForElement2(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f3") {
    checkInterval3 = setInterval(() => checkForElement3(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f4") {
    checkInterval4 = setInterval(() => checkForElement4(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f5") {
    checkInterval5 = setInterval(() => checkForElement5(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f6") {
    checkInterval6 = setInterval(() => checkForElement6(message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "stop") {
    console.log("Clearbit Auto Stopped!")
  }
});

// CLICK
// setTimeout(()=>{
//     const clickEvent = new MouseEvent("click", {
//         bubbles: true,
//         cancelable: true,
//         view: window,
//         buttons: 1,
//     });
//     divElement1.dispatchEvent(clickEvent);
// },5000)