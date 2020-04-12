import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.prod';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified file for production, this will take a moment.'))

webpack(config).run((error,stats)=>{
    if (error) {
        console.log(chalk.red(error))
        return 1;
    } else {
        const jsonStats = stats.toJson();

        if (jsonStats.hasErrors) {
            return jsonStats.errors.map(error => console.log(chalk.red(error)))
        }

        if (jsonStats.hasWarnings) {
            return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
        }

        console.log(`Webpack stats: ${stats}`);

        console.log(chalk.green('The app has been built for production and written to /dist'))

        return 0;
    }
});
