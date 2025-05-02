// Import necessary modules
import pkg from '@commercetools/custom-objects-exporter';
const CustomObjectsExporter = pkg.default;
import fs from 'fs';

// Define your commercetools project credentials and settings
const options = {
  apiConfig: {
    apiUrl: process.env.COMMERCE_TOOLS_API_HOST,
    host: process.env.COMMERCE_TOOLS_AUTH_HOST,
    projectKey: process.env.COMMERCE_TOOLS_PROJECT_KEY,
    credentials: {
      clientId: process.env.COMMERCE_TOOLS_CLIENT_ID,
      clientSecret: process.env.COMMERCE_TOOLS_CLIENT_SECRET
    }
  },
  // The accessToken field is typically not needed when you provide credentials as above, 
  // since the SDK can obtain the token for you. However, if you have a specific token to use, you can uncomment the following line:
  // accessToken: '123456yuhgfdwegh675412wefb3rgb',
  predicate: '' // Adjust your predicate as needed
};

const logger = {
  error: console.error,
  warn: console.warn,
  info: console.log,
  debug: console.debug,
};

// Create an instance of CustomObjectsExporter with the options and logger
const customObjectsExporter = new CustomObjectsExporter(options, logger);

// Create an output stream where the exported data will be saved
const outputStream = fs.createWriteStream(`exported-custom-objects_${new Date().toISOString()}.json`);

// Register error listener for the output stream
outputStream.on('error', (error) => {
  console.error('Error writing to file:', error);
});

outputStream.on('finish', () => console.log('Done with export'));

// Run the export and pipe the results to the output stream
customObjectsExporter.run(outputStream);
