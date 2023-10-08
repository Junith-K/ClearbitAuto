function composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle) {
    return new Promise((resolve)=> {
        document.querySelector('input.agP.aFw').value = "junithkumar.r20@iiits.in"
        if(checkedornot=="true"){
          subject = subject.replace("Software or Frontend Engineer",jobTitle);
        }
        document.querySelector('input[name="subjectbox"]').value = subject
        const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
        const signatureDiv = divElement.querySelector('#mt-signature');

        if (signatureDiv) {
            divElement.removeChild(signatureDiv);
        }


        //important
        //ceo
        if(checkedornot=="false"){
          divElement.innerHTML = `
          <p>Dear ${person_name},</p>
          
          <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
          
          <p>I'm a student at IIIT Sri City with a passion for Software Engineering, especially in Technologies like ReactJS, NextJS, NodeJS, ExpressJS and MongoDB. You can check out my Portfolio to get a good idea of my skills which you can explore at this link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
          
          <p>Additionally, I have one year of practical experience gained through internships where I worked on various web development projects. I'm now looking for a Software or Frontend Engineer opportunity to further expand my skills and contribute effectively to an awesome team like yours.</p>
          
          <p>If there's an opportunity for a Software or Frontend Engineer at ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}, I'd love to be considered. I believe this experience would be a great fit for both of us.</p>

          <p>Thank you for your time, and I've attached my resume for your reference.</p>
          
          <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

          <br>

          <p>Warm regards,<br>Junith<br>+919346723027</p>`;
        }else{
          
          //referral
          divElement.innerHTML = `
          <p>Dear ${person_name},</p>
          
          <p>I hope you're doing well. I'm reaching out because I'm genuinely impressed with ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}'s reputation and impact in the industry.</p> 
          
          <p>I'm a student at IIIT Sri City with a passion for Software Engineering. You can check out my Portfolio to get a good idea of my skills which you can explore at this link: <a href="https://portfolio-juni.vercel.app/">Portfolio_Juni</a>.</p>
          
          <p>Additionally, I have one year of practical experience gained through internships where I worked on various web development projects. I'm now looking for an ${jobTitle} opportunity to further expand my skills and contribute effectively to an awesome team like yours.</p>
          
          <p>I would love to get a referral from your side for the ${jobTitle} role at ${company_name.charAt(0).toUpperCase() + company_name.slice(1)}. I believe this experience would be a great fit for me.</p>
  
          <p>Thank you for your time, and I've attached my Resume and the Job Link for your reference.</p>
          
          <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>
  
          <br>
  
          <a href="${jobLink}">Job_Link</a>
  
          <br>
  
          <p>Warm regards,<br>Junith<br>+919346723027</p>`;
        }

        const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
        divElement1.addEventListener('click', function onClick(){
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
  
let namui="";
let subject = "Expressing Interest in Software or Frontend Engineer Opportunity";

async function checkForElement1(format, gmail, domain, checkedornot, jobLink, jobTitle) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
      const person_name = targetElements[0].textContent;
      const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
      if(namui!=person_name){
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
        let email = name[0].toLowerCase()+"."+name[name.length - 1].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
        console.log(email)
        await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
      }
    }
}

async function checkForElement2(format, gmail, domain, checkedornot, jobLink, jobTitle) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
        if(namui!=person_name){
          namui = person_name;
          const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
          composeButton.click();
  
          await new Promise((resolve) => {
              setTimeout(() => {
              resolve();
              }, 1000);
          });
  
          let name = person_name.split(" ")
          let email = name[0][0].toLowerCase()+name[name.length - 1].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
        }
      }
}

async function checkForElement3(format, gmail, domain, checkedornot, jobLink, jobTitle) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
        if(namui!=person_name){
          namui = person_name;
          const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
          composeButton.click();
  
          await new Promise((resolve) => {
              setTimeout(() => {
              resolve();
              }, 1000);
          });
  
          let name = person_name.split(" ")
          let email = name[0].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
        }
      }
}

async function checkForElement4(format, gmail, domain, checkedornot, jobLink, jobTitle) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
        if(namui!=person_name){
          namui = person_name;
          const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
          composeButton.click();
  
          await new Promise((resolve) => {
              setTimeout(() => {
              resolve();
              }, 1000);
          });
  
          let name = person_name.split(" ")
          let email = name[0].toLowerCase()+name[name.length - 1].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
        }
      }
}

async function checkForElement5(format, gmail, domain, checkedornot, jobLink, jobTitle) {
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
    if(namui!=person_name){
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
      let email = name[0].toLowerCase()+"."+name[name.length - 1][0].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
      console.log(email)
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
    }
  }
}

async function checkForElement6(format, gmail, domain, checkedornot, jobLink, jobTitle) {
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = targetElements[1].textContent;
      const com_gmail = gmail==""?company_name:gmail;
      const domain_name = domain==""?"com":domain;
    if(namui!=person_name){
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
      let email = name[0].toLowerCase()+name[name.length - 1][0].toLowerCase()+"@"+com_gmail.toLowerCase()+"."+domain_name;
      console.log(email)
      await composeEmail(email, subject, person_name, company_name, checkedornot, jobLink, jobTitle);
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
      checkInterval1 = setInterval(() => checkForElement1(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if (message.messageText === "f2") {
      checkInterval2 = setInterval(() => checkForElement2(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if (message.messageText === "f3") {
      checkInterval3 = setInterval(() => checkForElement3(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if (message.messageText === "f4") {
      checkInterval4 = setInterval(() => checkForElement4(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if (message.messageText === "f5") {
      checkInterval5 = setInterval(() => checkForElement5(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if (message.messageText === "f6") {
      checkInterval6 = setInterval(() => checkForElement6(message.messageText,message.email,message.domain,message.checkedornot,message.jobLink,message.jobTitle), 1000);
    } else if(message.messageText === "stop"){
      console.log("Clearbit Auto Stopped!")
    }
});