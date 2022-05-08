
# Run

Copy MongoDB cert into directory
```
CERTS='./certs/X509-cert.pem'
```

Run Server
```
> cd blank-slate-editor/server/
> node server.js

Server is running on port: 5000
Successfully connected to MongoDB.
```

Run Client (webpack)
```
> cd client
> npm start


Note

Using `17.0.2` version of react and react-dom in client, because react-draft-wysiwyg doesn't support react v18 yet. https://github.com/jpuri/react-draft-wysiwyg/pull/1245
