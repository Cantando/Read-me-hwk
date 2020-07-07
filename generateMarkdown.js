// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${data.email}
  ${data.description}
  ${data.url}
  ${data.contact}
  ${data.html_url}
  ${data.technology}

`;
}

module.exports = generateMarkdown;

