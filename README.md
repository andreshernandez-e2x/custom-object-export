This is just a small utility that uses commercetools packages to export all (or some) custom objects.

All you need to use this is to set all the environment variables, for example using `direnv`:

```
export COMMERCE_TOOLS_PROJECT_KEY=<fill this>
export COMMERCE_TOOLS_CLIENT_ID=<fill this>
export COMMERCE_TOOLS_CLIENT_SECRET=<fill this>
export COMMERCE_TOOLS_SCOPES=<fill this>
export COMMERCE_TOOLS_AUTH_HOST=<fill this>
export COMMERCE_TOOLS_API_HOST=<fill this>
```

And then run:

```bash
npm run start
```

Unless there's an issue there will be very minimal logging, depending on the amount of custom objects it might take minutes or hours. Once it's done it will produce a JSON file in the same directory.