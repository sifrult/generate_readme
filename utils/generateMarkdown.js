var installationInput;
var usageInput;
var contributionInput;
var testInput;

// Table of Contents


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let tableOfContents = `## Table of Contents
  `;
if (data.installation !== '') {
  tableOfContents += `* [Installation](# Installation)
  `
}
if (data.usage !== '') {
  tableOfContents += `* [Usage](# Usage)
  `
}
if (data.contribution !== '') {
  tableOfContents += `* [Contributions](# How to Contribute)
  `
}
if (data.test !== '') {
  tableOfContents += `* [Tests](# Tests)
  `
}



// Optional installation
  if (data.installation !== '') {
    installationInput =
`
## Installation
${data.installation}
`
  } else {
    installationInput = ''
  }

// Optional usage
  if (data.usage !== '') {
    usageInput =
`
## Usage
${data.usage}
`
  } else {
    usageInput = ''
  }

// Optional contribution
if (data.contribution !== '') {
  contributionInput =
`
## How to Contribute
${data.contribution}
`
} else {
  contributionInput = ''
}

// Optional test
if (data.test !== '') {
  testInput =
`
## Tests
${data.test}
`
} else {
  testInput = ''
}

// Generate markdown for README
  return `# ${data.title}

## Description
${data.description}

${tableOfContents} ${installationInput} ${usageInput}
## License ${contributionInput} ${testInput}
## Questions?
Visit my GitHub profile [here](https://github.com/${data.username})
You can also send me an email at <a href='mailto:${data.email}'>${data.email}</a>`;

}

module.exports = generateMarkdown;
