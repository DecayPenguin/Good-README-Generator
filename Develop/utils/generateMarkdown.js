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
${data.tests}
# License
![Github license](https://img.shields.io/badge/cc-$%7B1.0%7D-blue.svg)
${data.license}
# Questions
If there are any questions, feel free to email me here.
${data.email}
Or just review my GitHub here.
https://github.com/${data.github}
`;

}

module.exports = generateMarkdown;
