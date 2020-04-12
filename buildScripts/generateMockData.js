import faker from "faker";
import jsf from "json-schema-faker";
import fs from "fs";
import chalk from "chalk";
import { schema } from "./mockDataSchema";

/* eslint-disable no-console */

jsf.extend('faker', () => faker);

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (error) => {
    if (error) {
        return console.log(chalk.red(error));
    } else {
        console.log(chalk.green('Mock data generated.'))
    }
})
