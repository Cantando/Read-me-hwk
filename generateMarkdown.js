// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.html_url}
  ![My Github Profile Pic](${data.avatar})
  # ${data.project}


  ##Description
  ${data.description}

  ##Contact me
  ${data.contact}
  ${data.email}
  
  
  ## live demo
  ${data.url}

  ##Technologies
  ${data.technology}

`;
}

module.exports = generateMarkdown;

