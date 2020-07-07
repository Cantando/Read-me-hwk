// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${data.description}
  ${data.url}
  ${data.contact}
  ${data.githubnode}
  ${data.technology}
`;
}

module.exports = generateMarkdown;
