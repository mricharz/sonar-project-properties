<div align="center">
  <h1>sonar-project-properties</h1>
  <br>
</div>

<div align="center"><h4>Update sonar-project.properties projectName and projectVersion platform independent.</h4></div>

## How to use

### Install
```
// with npm
npm i sonar-project-properties

// with yarn
yarn add sonar-project-properties
```

### Setup
Add a script to your package.json which will then update the properties.
As example you can run the script before `test-coverage` like so:
```
"scripts": {
  ...
  "pretest-coverage": "update-sonar-properties"
  ...
}
```

### CLI Arguments
```
Options:
  --help                      Show help                                [boolean]
  --version                   Show version number                      [boolean]
  --sp, --skipProjectName     Skip updating projectName                [boolean]
  --sk, --skipProjectKey      Skip updating projectKey                 [boolean]
  --sv, --skipProjectVersion  Skip updating projectVersion             [boolean]
  --file                      Path to your sonar-project.properties
                                           [default: "sonar-project.properties"]
  -v, --verbose               Verbose output                           [boolean]
```