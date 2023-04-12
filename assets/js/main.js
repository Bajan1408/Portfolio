
function updateProfileInfo (profileData) {
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText =  profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel: ${profileData.phone}`;

    const mail = document.getElementById('profile.mail');
    mail.innerText = profileData.mail;
    mail.href = `mailto: ${profileData.mail}`;
}

function updateSoftSkills (profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('');
}

function updateHardSkills (profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li>
    <img src="${skill.logo}" alt="javascript" title="${skill.nome}"></li>`).join('');
}

function updateLanguage (profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map((lang) => `<li>${lang}</li>`).join('');
}

function updatePortfolio (profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map((job) => `<h3 ${job.gitHub} ? 'class="github"' : ''>${job.nome}</h3>
    <a href="${job.certificado}" target="_blank">${job.repositorio}</a>`).join('');
}


(async () => {
    const profileData = await fetchProfileData();

    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguage(profileData);
    updatePortfolio(profileData);  

})()

