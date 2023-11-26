function composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer) {
  return new Promise((resolve) => {
    document.querySelector('input.agP.aFw').value = email
    if (checkedornot == "true") {
      subject = subject.replace("Software or Frontend Engineer Intern", jobTitle);
    } else {
      if (jobTitle != "") {
        subject = subject.replace("Software or Frontend Engineer Intern", jobTitle);
      }
    }
    document.querySelector('input[name="subjectbox"]').value = subject
    const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
    const signatureDiv = divElement.querySelector('#mt-signature');

    if (signatureDiv) {
      divElement.removeChild(signatureDiv);
    }

    //important
    //ceo
    if (checkedornot == "false" || checkedornot == null) {
      divElement.innerHTML = `
          <p>Dear ${person_name},</p>
          
          <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
          
          <p>I specialize in Software Engineering with passion for technologies such as ReactJS, NextJS, NodeJS, ExpressJS, MongoDB and many more. For a comprehensive overview of my skills and projects, please explore my portfolio at the following link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
          
          <p>I bring one year of hands-on experience acquired through Full-Time Opportunities, during which I successfully contributed to various Large Scale Applications.</p>
          
          <p>I am enthusiastic about the ${jobTitle == "" ? "Software or Frontend Engineer Intern" : jobTitle} role and eager to contribute to ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}. ${engineer == "true" ? "I would greatly appreciate your assistance in forwarding my application to the appropriate recruiting or HR team. Your support in this matter is highly appreciated." : `I believe my skills align well with the requirements and that I would seamlessly integrate into the team. Being part of ${company_name.charAt(0).toUpperCase() + company_name.slice(1)} is a prospect I am genuinely excited about.`}</p>
          
          <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

          <br>

          <p>Warm regards,<br>Junith<br>+919346723027</p>`;
    } else {

      //referral
      divElement.innerHTML = `
        <p>Dear ${person_name},</p>
        
        <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
        
        <p>I specialize in Software Engineering with passion for technologies such as ReactJS, NextJS, NodeJS, ExpressJS, MongoDB and many more. For a comprehensive overview of my skills and projects, please explore my portfolio at the following link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
        
        <p>I bring one year of hands-on experience acquired through Full-Time Opportunities, during which I successfully contributed to various Large Scale Applications.</p>
        
        <p>I'm genuinely excited about the ${jobTitle == "" ? "Software or Frontend Engineer Intern" : jobTitle} role and eager to contribute to ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}. A referral from you would greatly boost my application. If not possible, please forward my resume/email to the recruiting team, emphasizing my sincere interest in contributing to and growing with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}. Your support in this matter is highly appreciated.</p>

        <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

        <br>

        <a href="${jobLink}">Job_Link</a>

        <br>

        <p>Warm regards,<br>Junith<br>+919346723027</p>`;
    }

    const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
    divElement1.addEventListener('click', function onClick() {
      divElement1.removeEventListener('click', onClick);
      resolve();
    })

    //CLICK
    // setTimeout(()=>{
    //     const clickEvent = new MouseEvent("click", {
    //         bubbles: true,
    //         cancelable: true,
    //         view: window,
    //         buttons: 1,
    //     });
    //     divElement1.dispatchEvent(clickEvent);
    // },5000)
  })
}

function composeEmailAll(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer) {
  return new Promise((resolve) => {
    const element = document.querySelector('[aria-label="Add Bcc recipients ‪(Ctrl-Shift-B)‬"]');
    if (element) {
      element.click()
    }
    document.querySelectorAll('input.agP.aFw')[1].value = email
    if (checkedornot == "true") {
      subject = subject.replace("Software or Frontend Engineer Intern", jobTitle);
    } else {
      if (jobTitle != "") {
        subject = subject.replace("Software or Frontend Engineer Intern", jobTitle);
      }
    }
    document.querySelector('input[name="subjectbox"]').value = subject
    const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
    const signatureDiv = divElement.querySelector('#mt-signature');

    if (signatureDiv) {
      divElement.removeChild(signatureDiv);
    }

    //important
    //ceo
    if (checkedornot == "false" || checkedornot == null) {
      divElement.innerHTML = `
          <p>Dear ${person_name},</p>
          
          <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
          
          <p>I specialize in Software Engineering with passion for technologies such as ReactJS, NextJS, NodeJS, ExpressJS, MongoDB and many more. For a comprehensive overview of my skills and projects, please explore my portfolio at the following link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
          
          <p>I bring one year of hands-on experience acquired through Full-Time Opportunities, during which I successfully contributed to various Large Scale Applications.</p>
          
          <p>I am keen to be considered for the ${jobTitle == "" ? "Software or Frontend Engineer Intern" : jobTitle} role as I am genuinely interested in the opportunity. ${engineer == "true" ? "So it would be a great help to have my application forwarded to the recruiting or HR team, as appropriate." : `I am keenly interested in contributing to and being a part of ${company_name.charAt(0).toUpperCase() + company_name.slice(1)} as I firmly believe that I would be a good fit and would get along with the team very well.`}</p>
          
          <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

          <br>

          <p>Warm regards,<br>Junith<br>+919346723027</p>`;
    } else {

      //referral
      divElement.innerHTML = `
        <p>Dear ${person_name},</p>
        
        <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
        
        <p>I specialize in Software Engineering with passion for technologies such as ReactJS, NextJS, NodeJS, ExpressJS, MongoDB and many more. For a comprehensive overview of my skills and projects, please explore my portfolio at the following link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
        
        <p>I bring one year of hands-on experience acquired through Full-Time Opportunities, during which I successfully contributed to various Large Scale Applications.</p>
        
        <p>I would love to get a referral from your side or forward my application to the HR/Recruiting team as appropriate for the ${jobTitle} role at ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}. I believe that my experience aligns well with the requirements of the role, making it a suitable fit for me.</p>

        <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

        <br>

        <a href="${jobLink}">Job_Link</a>

        <br>

        <p>Warm regards,<br>Junith<br>+919346723027</p>`;
    }

    const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
    divElement1.addEventListener('click', function onClick() {
      divElement1.removeEventListener('click', onClick);
      resolve();
    })

    //CLICK
    // setTimeout(()=>{
    //     const clickEvent = new MouseEvent("click", {
    //         bubbles: true,
    //         cancelable: true,
    //         view: window,
    //         buttons: 1,
    //     });
    //     divElement1.dispatchEvent(clickEvent);
    // },5000)
  })
}

let namui = "";
let subject = "Expressing Interest in Software or Frontend Engineer Intern Opportunity";

async function checkForElementAll(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      let email = name[0].toLowerCase() + "." + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      email = email + "," + name[0][0].toLowerCase() + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      email = email + "," + name[0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      email = email + "," + name[0].toLowerCase() + name[name.length - 1].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      email = email + "," + name[0].toLowerCase() + "." + name[name.length - 1][0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;
      email = email + "," + name[0].toLowerCase() + name[name.length - 1][0].toLowerCase() + "@" + com_gmail.toLowerCase() + "." + domain_name;

      await composeEmailAll(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement1(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement2(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement3(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement4(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement5(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

async function checkForElement6(format, gmail, domain, checkedornot, jobLink, jobTitle, engineer) {
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
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle, engineer);
    }
  }
}

let checkInterval0, checkInterval1, checkInterval2, checkInterval3, checkInterval4, checkInterval5, checkInterval6;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  clearInterval(checkInterval0);
  clearInterval(checkInterval1);
  clearInterval(checkInterval2);
  clearInterval(checkInterval3);
  clearInterval(checkInterval4);
  clearInterval(checkInterval5);
  clearInterval(checkInterval6);

  if (message.messageText === "f0") {
    checkInterval0 = setInterval(() => checkForElementAll(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f1") {
    checkInterval1 = setInterval(() => checkForElement1(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f2") {
    checkInterval2 = setInterval(() => checkForElement2(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f3") {
    checkInterval3 = setInterval(() => checkForElement3(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f4") {
    checkInterval4 = setInterval(() => checkForElement4(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f5") {
    checkInterval5 = setInterval(() => checkForElement5(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "f6") {
    checkInterval6 = setInterval(() => checkForElement6(message.messageText, message.email, message.domain, message.checkedornot, message.jobLink, message.jobTitle, message.engineer), 1000);
  } else if (message.messageText === "stop") {
    console.log("Clearbit Auto Stopped!")
  }
});