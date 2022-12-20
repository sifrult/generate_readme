var installationInput;
var usageInput;
var contributionInput;
var testInput;
var licenseInput;
var licenseBadge;

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, test, username, email}) {

// Table of Contents
  let tableOfContents = `## Table of Contents
  `;
if (installation !== '') {
  tableOfContents += `* [Installation](#installation)
  `
}
if (usage !== '') {
  tableOfContents += `* [Usage](#usage)
  `
}
if (contribution !== '') {
  tableOfContents += `* [Contributions](#how-to-Contribute)
  `
}
if (test !== '') {
  tableOfContents += `* [Tests](#tests)
  `
}

if (installation === '' && usage === '' && contribution === '' && test === '') {
  tableOfContents = `
  `
}
// Licenses
// None
if (license === '') {
  licenseBadge = '';
  licenseInput = ''
};
// GNU AGPLv3
if (license === 'GNU AGPLv3') {
  licenseBadge = `

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

  `;
  licenseInput =
`
## License

Usage is provided under the [GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0) license.
`
}
// GNU GPLv3
if (license === 'GNU GPLv3') {
  licenseBadge = `

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  `;
  licenseInput =
`
## License

Usage is provided under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0) license.
`
}
// GNU LGPLv3
if (license === 'GNU LGPLv3') {
  licenseBadge = `

[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

  `;
  licenseInput =
`
## License

Usage is provided under the [GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0) license.
`
}
// Mozilla Public License 2.0
if (license === 'Mozilla Public License 2.0') {
  licenseBadge = `

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

  `;
  licenseInput =
`
## License

Usage is provided under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0) license.
`
}
// Apache License 2.0
if (license === 'Apache License 2.0') {
  licenseBadge = `

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  `;
  licenseInput =
`
## License

Usage is provided under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) license.
`
}
// MIT License
if (license === 'MIT License') {
  licenseBadge = `

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  `;
  licenseInput =
`
## License

Usage is provided under the [MIT License](https://opensource.org/licenses/MIT) license.

Copyright (c) ${username}
`
}
// Boost Software License 1.0
if (license === 'Boost Software License 1.0') {
  licenseBadge = `

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

`;
  licenseInput =
`
## License

Usage is provided under the [Boost Software License - Version 1.0](https://www.boost.org/LICENSE_1_0.txt) license.
`
}
// The Unlicense
if (license === 'The Unlicense') {
  licenseBadge = `

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

`;
  licenseInput =
`
## License

Usage is provided under [The Unlicense](http://unlicense.org/) license.
`
}

// Optional installation
  if (installation !== '') {
    installationInput =
`
## Installation
${installation}
`
  } else {
    installationInput = ''
  }

// Optional usage
  if (usage !== '') {
    usageInput =
`
## Usage
${usage}
`
  } else {
    usageInput = ''
  }

// Optional contribution
if (contribution !== '') {
  contributionInput =
`
## How to Contribute
${contribution}
`
} else {
  contributionInput = ''
}

// Optional test
if (test !== '') {
  testInput =
`
## Tests
${test}
`
} else {
  testInput = ''
}

// Generate markdown for README
  return `# ${title}

## Description
${description} ${licenseBadge} ${tableOfContents} ${installationInput} ${usageInput} ${licenseInput} ${contributionInput} ${testInput}
## Questions?
Visit my GitHub profile [here](https://github.com/${username}). You can also send me an email at <a href='mailto:${email}'>${email}</a> for any additional questions.`;

}

module.exports = generateMarkdown;
