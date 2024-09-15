// get reference to the form and dispaly area
const form = document.getElementById('Resumeform') as HTMLFormElement;
const resumeDispalyElement = document.getElementById('resume-display') as HTMLDivElement;


// handle form submission

form.addEventListener('submit', (event:Event)=>{
   event.preventDefault();

   // collect input values
   const name = (document.getElementById('name') as HTMLInputElement).value
   const email = (document.getElementById('email') as HTMLInputElement).value
   const Phone = (document.getElementById('phonenumber') as HTMLInputElement).value
   const education = (document.getElementById('Education') as HTMLInputElement).value
   const experience = (document.getElementById('Experience') as HTMLInputElement).value
   const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value

   const resumeHTML = `
   <h2><b>Resume</b></h2>
   <h3>Personal Infromation</h3>
   <p><b>name:</b>${name}</p>
   <p><b>email:</b>${email}</p>
   <p><b>Phonenumber:</b>${Phone}</p>

   <h3>Education</h3>
   <p>${education}</p>

   <h3>Experience</h3>
   <p>${experience}</p>

   <h3>Skills</h3>
   <p>${skills}</p>


   `;

   if(resumeDispalyElement){
      resumeDispalyElement.innerHTML = resumeHTML;
   } else{
      console.error('The Resume Dispaly Element is missing!')
   }
});