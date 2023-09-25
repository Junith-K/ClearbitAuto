function composeEmail(email, subject, person_name, company_name) {
    return new Promise((resolve)=> {
        document.querySelector('input.agP.aFw').value = email
        document.querySelector('input[name="subjectbox"]').value = subject
        const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
        const signatureDiv = divElement.querySelector('#mt-signature');

        if (signatureDiv) {
            divElement.removeChild(signatureDiv);
        }

        //referral
        // divElement.innerHTML = `
        //     <p>Hello ${person_name},</p>
        //     <p>I hope this email finds you well. I am excited to share that I am applying for the 2024 Software Engineer Intern position at ${company_name}, and I would greatly appreciate your support in providing a referral.</p>
        //     <p>With previous internships under my belt, I've gained practical experience in software engineering and am eager to further develop my skills. I also worked on a project called Scrollon, a user-friendly full-stack social media site (you can check it out at <a href="https://scrollon-6fuj.onrender.com/">Website</a>). Your referral would mean a lot and help me continue to grow as a software engineer.
        //     <p>Thank you for considering my request, and I look forward to your positive response.</p>
        //     <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>
        //     <br>
        //     <a href="https://careers.bloomberg.com/job/detail/118748?el=Students+and+Recent+Graduates&el=Internships">Job_Link</a>
        //     <br>
        //     <p>Thanks & Regards</p>
        // `;

        //ceo
        divElement.innerHTML = `
        <p>Dear ${person_name},</p>
        
        <p>I hope you're doing well. I wanted to reach out because I'm really impressed with ${company_name}'s reputation and impact in the industry.</p>
        
        <p>I'm a student with a passion for web development, especially in frontend technologies like HTML, CSS, and ReactJS. I've recently completed a full-stack project called "Scrollon", which is a social media site built using ReactJS, MongoDB, and NodeJS. This project has given me hands-on experience and the ability to work on complex web applications which you can explore at this link: <a href="https://scrollon-6fuj.onrender.com/">Scrollon Project</a>.</p>
        
        <p>Additionally, I have one year of practical experience gained through internships where I worked on various web development projects. I'm now looking for an internship opportunity to further expand my skills and contribute effectively to a dynamic team like yours.</p>
        
        <p>If there's an opportunity for a frontend developer intern at ${company_name}, I'd love to be considered. I believe this experience would be a great fit for both of us.</p>

        <p>Thank you for your time, and I've attached my resume for your reference.</p>
        
        <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

        <br>

        <p>Warm regards,<br>Junith<br>+919346723027</p>`;

        //hr
        // divElement.innerHTML = `
        // <p>Dear ${person_name},</p>
        
        // <p>I hope this email finds you well. I am writing to express my interest in a Software Engineer Intern/Frontend/Backend position at ${company_name}. I am currently a student at IIIT, set to graduate in 2024, and I'm eager to apply my software engineering skills and knowledge in a practical setting.</p>
        
        // <p>With prior internship experiences and a keen understanding of software engineering principles, I am confident in my ability to contribute effectively to your team. I have also developed a full-stack social media site called Scrollon, which you can explore at this link: <a href="https://scrollon-6fuj.onrender.com/">Scrollon Project</a>.</p>
        
        // <p>I am enthusiastic about the opportunity to join your team and learn from experienced professionals while contributing to meaningful projects. I look forward to the possibility of becoming a part of your organization and further discussing how I can be a valuable asset.</p>
        
        // <p>Thank you for considering my application.</p>
        
        // <a href="https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view">Resume_Junith</a>

        // <br>

        // <p>Warm regards,<br>Junith</p>`;
        const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
        divElement1.addEventListener('click', function onClick(){
            divElement1.removeEventListener('click', onClick);
            resolve();
        })
    })
    
    
    //CLICK
    // const divElement1 = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
    // setTimeout(()=>{
    //     const clickEvent = new MouseEvent("click", {
    //         bubbles: true,
    //         cancelable: true,
    //         view: window,
    //         buttons: 1,
    //     });
    //     divElement1.dispatchEvent(clickEvent);
    // },5000)
}

// async function clickComposeButton() {
//     const composeButton = document.querySelector('div[role="button"][jsaction="click:dlrqf; clickmod:dlrqf"]');
//     if (composeButton) {
//         const spreadsheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSONf7s0KLtlJavZGuHYXxs79fM1ElXdOyhj84tc-PyKc0MMV0N1BFgCq_V1ZgDBN8nBCKlELkDn9KE/pubhtml';
//         let columnsToExtract = [1, 2, 3, 4]; 

//         fetch(spreadsheetURL)
//             .then(response => response.text())
//             .then(async(data) =>{
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = data;
//                 const table = tempDiv.querySelector('table');
//                 let email, company_name, person_name;
//                 // let subject = "Regarding Software Engineer Internship Referral";  //referral
//                 // let subject = "Inquiring About Software Engineer Internship Position";  //hr
//                 let subject = "Expressing Interest in Frontend Developer Internship Opportunity";  //ceo
        
//                 for (let i = 1; i < table.rows.length; i++) {
//                     const row = table.rows[i].cells;
//                     console.log(row[columnsToExtract[3]].textContent)
//                     if(row[columnsToExtract[3]].textContent=="no"){
                        // composeButton.click();

                        // await new Promise((resolve) => {
                        //     setTimeout(() => {
                        //     resolve();
                        //     }, 1000);
                        // });


//                         if (row.length > 2) {
//                             email = row[columnsToExtract[0]].textContent;
//                             company_name = row[columnsToExtract[1]].textContent;
//                             person_name = row[columnsToExtract[2]].textContent;

                            // await composeEmail(email, subject, person_name, company_name);
//                             await new Promise((resolve) => {
//                                 setTimeout(() => {
//                                 resolve();
//                                 }, 1000);
//                             });
//                         }
//                     }
//                 }
//             })
//             .catch(error => {
//             console.error('Error fetching data:', error);
//             document.getElementById('data').textContent = 'Error fetching data.';
//         });
//     }
// }

// function autoEmail(format){
//     console.log(format)
// }

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === "runMyFunction") {
//         autoEmail(message.messageText);
//     }else{
//         console.log("new")
//     }
// });
  
let namui="";

async function checkForElement1(format, gmail, domain) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
      const person_name = targetElements[0].textContent;
      const company_name = gmail==""?targetElements[1].textContent:gmail;
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

        let subject = "Expressing Interest in Frontend Developer Internship Opportunity";
        let name = person_name.split(" ")
        let email = name[0].toLowerCase()+"."+name[name.length - 1].toLowerCase()+"@"+company_name.toLowerCase()+"."+domain_name;
        console.log(email)
        await composeEmail(email, subject, person_name, company_name);
      }
    }
}

async function checkForElement2(format, gmail, domain) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = gmail==""?targetElements[1].textContent:gmail;
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
  
          let subject = "Expressing Interest in Frontend Developer Internship Opportunity";
          let name = person_name.split(" ")
          let email = name[0][0].toLowerCase()+name[name.length - 1].toLowerCase()+"@"+company_name.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name);
        }
      }
}

async function checkForElement3(format, gmail, domain) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = gmail==""?targetElements[1].textContent:gmail;
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
  
          let subject = "Expressing Interest in Frontend Developer Internship Opportunity";
          let name = person_name.split(" ")
          let email = name[0].toLowerCase()+"@"+company_name.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name);
        }
      }
}

async function checkForElement4(format, gmail, domain) {
    const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
    
    if (targetElements.length) {
        const person_name = targetElements[0].textContent;
        const company_name = gmail==""?targetElements[1].textContent:gmail;
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
  
          let subject = "Expressing Interest in Frontend Developer Internship Opportunity";
          let name = person_name.split(" ")
          let email = name[0].toLowerCase()+name[name.length - 1].toLowerCase()+"@"+company_name.toLowerCase()+"."+domain_name;
          console.log(email)
          await composeEmail(email, subject, person_name, company_name);
        }
      }
}

async function checkForElement5(format, gmail, domain) {
  const targetElements = document.querySelectorAll(".cb-mb-0.cb-mt-0.cb-text-lg.cb-font-medium");
  
  if (targetElements.length) {
    const person_name = targetElements[0].textContent;
    const company_name = gmail==""?targetElements[1].textContent:gmail;
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

      let subject = "Expressing Interest in Frontend Developer Internship Opportunity";
      let name = person_name.split(" ")
      let email = name[0].toLowerCase()+"."+name[name.length - 1][0].toLowerCase()+"@"+company_name.toLowerCase()+"."+domain_name;
      console.log(email)
      await composeEmail(email, subject, person_name, company_name);
    }
  }
}
  
let checkInterval1, checkInterval2, checkInterval3, checkInterval4, checkInterval5;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    clearInterval(checkInterval1);
    clearInterval(checkInterval2);
    clearInterval(checkInterval3);
    clearInterval(checkInterval4);
    clearInterval(checkInterval5);
  
    if (message.messageText === "f1") {
      checkInterval1 = setInterval(() => checkForElement1(message.messageText,message.email,message.domain), 1000);
    } else if (message.messageText === "f2") {
      checkInterval2 = setInterval(() => checkForElement2(message.messageText,message.email,message.domain), 1000);
    } else if (message.messageText === "f3") {
      checkInterval3 = setInterval(() => checkForElement3(message.messageText,message.email,message.domain), 1000);
    } else if (message.messageText === "f4") {
      checkInterval4 = setInterval(() => checkForElement4(message.messageText,message.email,message.domain), 1000);
    } else if (message.messageText === "f5") {
      checkInterval5 = setInterval(() => checkForElement5(message.messageText,message.email,message.domain), 1000);
    }
});