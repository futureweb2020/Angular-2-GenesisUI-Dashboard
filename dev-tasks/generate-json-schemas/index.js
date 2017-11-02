const exec = require('child_process').execSync
const fs = require('fs-extra')

const schema_basedir = './src/app/core/planning/schemas'
const tsconfig_path = './src/tsconfig.json'

//clean schema folder
fs.removeSync(schema_basedir)
fs.ensureDirSync(schema_basedir)

//sync func
let CreateSchema = (type, outputPath) => {
  console.log('generating ' + type + ' schema @ ' + outputPath)
  //create schema
  exec('typescript-json-schema "' + tsconfig_path + '" ' + type + ' --out "' + outputPath + '"')

  //add version attribute to the schema
  let f = fs.readJsonSync(outputPath)
  f['version'] = 0;
  fs.writeJsonSync(outputPath, f)
}

CreateSchema('TimeSlotViewModel', schema_basedir + '/time-slot.schema.json')
CreateSchema('WizardViewModel', schema_basedir + '/wizard.schema.json')






// ------------------------------------------------------
// -------------- Don't mind this -----------------------
// ------------------------------------------------------
// let wizardCatalog = (require("C:/z/2now/src/13500-basil/7apps/telmi-apps-1/app-1/src/app/core/catalogs/mockups/wizard-catalogue.mockup.json"))
// let activityCatalog = (require("C:/z/2now/src/13500-basil/7apps/telmi-apps-1/app-1/src/app/core/catalogs/mockups/activity-catalogue.mockup.json"))

// let aux = 0;
// wizardCatalog.entries.map(
//   entry => entry.steps.map(
//     step => {aux++; step.id = 's'+aux; step.name = activityCatalog.entries.find(e => e.telmiId === step.activityId).name;  step.desc = activityCatalog.entries.find(e => e.telmiId === step.activityId).desc}
//   )
// )

// require('fs').writeFileSync('C:/z/2now/src/13500-basil/7apps/telmi-apps-1/app-1/src/app/core/catalogs/mockups/wizard-catalogue.mockup.NEW.json', JSON.stringify(wizardCatalog, null, 2))

// ------------------------------------------------------
//    create sub-folder for each wizard catalog entry
// ------------------------------------------------------
// let fs = require('fs-extra');

// let catalog = require("../src/app/core/catalogs/mockups/activity-catalogue/activity-catalogue.mockup.json")
// let catalogBaseDir = './src/app/core/catalogs/mockups/activity-catalogue/entries';

// fs.removeSync(catalogBaseDir)
// fs.ensureDirSync(catalogBaseDir)

// var newArr = []
// catalog.entries.forEach(
//   entry => {
//     let telmiId = entry.telmiId;
//     fs.outputJsonSync(catalogBaseDir + '/' + telmiId + '/index.json', entry)

//     newArr.push(telmiId);
//   }
// )

// catalog.entries = newArr;

// fs.outputJsonSync("./src/app/core/catalogs/mockups/activity-catalogue/activity-catalogue.mockup.NEW.json", catalog)
