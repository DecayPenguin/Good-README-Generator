// function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
  ## Table Of Contents

# Description
${data.type}
# Installation
${data.install}
# Usage
${data.use}
# License
${data.license}
# Questions
${data.questions}
https://github.com/${data.github}
${data.test}
`;

}

module.exports = generateMarkdown;
