const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'https://sonarcloud.io',
    token : "1103a42547bb8efeafc1c07427ea51192330b9f6",
    options: {
      'sonar.projectName': 'api-nodejs',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'specs'
    }
  },
  () => process.exit()
)