import dotenv from 'dotenv';
import path from 'path';

async function globalSetup() {
    dotenv.config({ path: path.resolve(__dirname, '.env')});
    console.log(process.env.APP_USER_NAME);
    console.log(process.env.APP_USER_PASSWORD);
}

export default globalSetup;