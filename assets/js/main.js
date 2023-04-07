
function updateProfileInfo (profileData) {
    /*const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name; */

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText =  profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = `tel: ${profileData.phone}`;

    const mail = document.getElementById('profile.mail');
    name.innerText = `mailto: ${profileData.mail}`;

}

(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);

    updateProfileInfo(profileData);
})()