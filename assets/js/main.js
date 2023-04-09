
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


(async () => {
    const profileData = await fetchProfileData();

    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);

})()

