// Central registry for all technology modules
// Export from languages
export { 
  javascriptPromptModule,
  typescriptPromptModule, 
  pythonPromptModule,
  javaPromptModule,
  goPromptModule,
  csharpPromptModule,
  phpPromptModule,
  rubyPromptModule,
  swiftPromptModule,
  kotlinPromptModule,
  rustPromptModule
} from './languages';

// Export from runtimes
export { nodejsPromptModule } from './runtimes';

// Export from frontend frameworks
export { 
  reactPromptModule,
  angularPromptModule,
  vuePromptModule
} from './frameworks/frontend';

// Export from backend frameworks
export {
  expressPromptModule,
  nestjsPromptModule,
  djangoPromptModule,
  flaskPromptModule,
  springPromptModule,
  laravelPromptModule,
  railsPromptModule
} from './frameworks/backend';

// Export from databases
export {
  mongodbPromptModule,
  postgresqlPromptModule,
  mysqlPromptModule,
  redisPromptModule
} from './databases';

// Export from cloud platforms
export {
  awsPromptModule,
  azurePromptModule,
  gcpPromptModule
} from './cloud';

// Export from DevOps tools
export {
  dockerPromptModule,
  kubernetesPromptModule
} from './tools';

