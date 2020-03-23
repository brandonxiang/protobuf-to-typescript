import program from 'commander';
import serveAction from './serve';

const errorHandler = (e: any) => {
  console.error(e.message);
  process.exit(1);
};

function actionRunner(fn: (...args: any[]) => Promise<any>) {
  return (...args: any[]) => fn(...args).catch(errorHandler);
}

program
  .command('convert [entry]')
  .description('serve based on local protobuf files')
  .action(actionRunner(serveAction));
