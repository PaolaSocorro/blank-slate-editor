
# Run

Copy MongoDB cert into directory
```
CERTS='./certs/X509-cert.pem'
```

Run Server (wont connect without certs)
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