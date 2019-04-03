#!/usr/bin/env node

const path = require('path')
const replace = require('./src/replace')
const argv = require('yargs')
    .describe('sp', 'Skip updating projectName')
    .boolean('sp')
    .alias('sp', 'skipProjectName')
    .describe('sk', 'Skip updating projectKey')
    .boolean('sk')
    .alias('sk', 'skipProjectKey')
    .describe('sv', 'Skip updating projectVersion')
    .boolean('sv')
    .alias('sv', 'skipProjectVersion')
    .describe('file', 'Path to your sonar-project.properties')
    .default({file: 'sonar-project.properties'})
    .describe('v', 'Verbose output')
    .boolean('v')
    .alias('v', 'verbose')
    .argv

const {name, version} = require(path.join(process.cwd(), '/package.json'))
const file = path.join(process.cwd(), argv.file)

const replacements = []

if (!argv.sp) {
    replacements.push({
        find: /projectName=.*/g,
        replace: 'projectName=' + name
    })
}

if (!argv.sk) {
    replacements.push({
        find: /projectKey=.*/g,
        replace: 'projectKey=' + name
    })
}

if (!argv.sv) {
    replacements.push({
        find: /projectVersion=.*/g,
        replace: 'projectVersion=' + version
    })
}

if (argv.v) {
    console.log('File:', file)
    console.log('Replacements:', replacements)
}

if (replacements.length) {
    replace(replacements, file)
        .then(() => argv.v && console.log('Updated ' + file))
        .catch(err => {
            console.error(err)
        })
}