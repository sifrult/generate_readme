var installationInput;
var usageInput;
var contributionInput;
var testInput;
var licenseInput;
var licenseBadge;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// Table of Contents
  let tableOfContents = `## Table of Contents
  `;
if (data.installation !== '') {
  tableOfContents += `*[Installation](#installation)
  `
}
if (data.usage !== '') {
  tableOfContents += `*[Usage](#usage)
  `
}
if (data.contribution !== '') {
  tableOfContents += `*[Contributions](#how-to-Contribute)
  `
}
if (data.test !== '') {
  tableOfContents += `*[Tests](#tests)
  `
}

// Licenses
// GNU AGPLv3
if (data.license === 'GNU AGPLv3') {
  licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  licenseInput =
`
## License

GNU AGPLv3

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
`
}
// GNU GPLv3
if (data.license === 'GNU GPLv3') {
  licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  licenseInput =
`
## License

GNU GPLv3

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
`
}
// GNU LGPLv3
if (data.license === 'GNU LGPLv3') {
  licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  licenseInput =
`
## License

GNU LGPLv3

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
`
}
// Mozilla Public License 2.0
if (data.license === 'Mozilla Public License 2.0') {
  licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  licenseInput =
`
## License

Mozilla Public License 2.0

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
`
}
// Apache License 2.0
if (data.license === 'Apache License 2.0') {
  licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  licenseInput =
`
## License

Apache License 2.0

Copyright ${data.username}

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
`
}
// MIT License
if (data.license === 'MIT License') {
  licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  licenseInput =
`
## License

MIT License

Copyright (c) ${username}
`
}
// Boost Software License 1.0
if (data.license === 'Boost Software License 1.0') {
  licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  licenseInput =
`
## License

Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:

The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
}
// The Unlicense
if (data.license === 'The Unlicense') {
  licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  licenseInput =
`
## License

The Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
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

${licenseBadge}

${tableOfContents} ${installationInput} ${usageInput} ${licenseInput} ${contributionInput} ${testInput}
## Questions?
Visit my GitHub profile [here](https://github.com/${data.username})
You can also send me an email at <a href='mailto:${data.email}'>${data.email}</a> for any additional questions.`;

}

module.exports = generateMarkdown;
