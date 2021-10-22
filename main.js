const LinksSocialMedia = {
  github: 'Gbennemann',
  youtube: '/channel/UCWDTYUJSOipPe9lH1lTq31A',
  facebook: 'gabriel.mendoncabennemann',
  instagram: 'gabrielmendoncabenneman',
  twitter: 'Mendoncadev'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/Gbennemann`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href.textContent = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
