After reading the Q&A I didn't see my issues resolved with the provided source files of the *shopsy app* so hope this helps the next person resolve the *package.json* issues I'm experiencing.

The video instructed to run an `npm i` but I received a few fatal errors and this is because of the `"bcrypt": "^1.0.3"` being deprecated. I did find a Q&A that mentions `bcrypt-nodejs` but when I reference this on [NPM it indicates it's deprecated](https://www.npmjs.com/package/bcrypt-nodejs). Instead I removed the line `"bcrypt": "^1.0.3"` and replaced it with `npm i bcryptjs`.

When I ran `npm start` I received an error of bcrypt and that is because there is a require in a file that needs to be changed:

```
/server/models/mongoose/User.js
```

from `const bcrypt = require('bcrypt');` to `const bcrypt = require('bcryptjs');`

Running `npm start` again I get a mongoose error so I install mongoose with `npm i mongoose`

Run `npm start` again and I get `Cannot find module './build/Release/DTraceProviderBindings'` and this can be resolved with `npm i dtrace-provider`

To verify I have everything working correctly I deleted the directory **node_modules** and the file **package-lock.json** and ran `npm i`. No errors were fired during the process. Ran `npm start` and the app works correctly @ http://localhost:3000/.

This is how my dependcies look now:

```
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "~1.17.1",
    "bunyan": "^1.8.12",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.3",
    "dtrace-provider": "^0.8.8",
    "express": "~4.15.2",
    "express-session": "^1.15.6",
    "mongoose": "^5.7.1",
    "pug": "~2.0.0-beta11"
  },
  "devDependencies": {
    "eslint": "^4.8.0",
    "eslint-config-airbnb-base": "^12.0.1",
    "eslint-plugin-import": "^2.7.0"
  }
  ```

  I tried posting all of this in the Q&A on LinkedIn but was throw an error so made this Gist.

  