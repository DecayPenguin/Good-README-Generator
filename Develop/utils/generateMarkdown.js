// function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
           # ${data.type}
           # ${data.toc}
           # ${data.install}
           # ${data.use}
           # ${data.license}
           # ${data.contributors}
           # ${data.test}
           # ${data.questions}

`;

}

module.exports = generateMarkdown;
