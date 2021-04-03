import program from 'commander';
import convertAction from './convert';

const errorHandler = (e: any) => {
  console.error(e.message);
  process.exit(1);
};

function actionRunner(fn: (...args: any[]) => Promise<any>) {
  return (...args: any[]) => fn(...args).catch(errorHandler);
}

program
  .command('convert')
  .option('-i, --input <env>', 'input directory', '')
  .option('-o, --output <env>', 'output directory', '')
  .description('convert based on local protobuf ')
  .action(actionRunner(convertAction));
