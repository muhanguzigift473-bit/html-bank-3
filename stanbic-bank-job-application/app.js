const form=document.getElementById('application-form');
const resume=document.getElementById('resume');
const filename=document.getElementById('filename');
const status=document.getElementById('status');
resume.addEventListener('change',()=>{const f=resume.files[0];filename.textContent=f?`${f.name} · ${(f.size/1048576).toFixed(2)} MB`:'No file selected';resume.setCustomValidity(f&&f.size>5*1048576?'Please choose a file smaller than 5 MB.':'')});
form.addEventListener('submit',event=>{event.preventDefault();status.textContent='';if(!form.reportValidity())return;status.textContent='Your application form is complete. This independent template does not transmit applications. Please use Stanbic Bank’s official careers portal to apply.';status.scrollIntoView({behavior:'smooth',block:'center'})});
