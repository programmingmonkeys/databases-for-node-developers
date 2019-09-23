# Databases for Node.js Developers

This is a [LinkedIn Course](https://www.linkedin.com/learning/databases-for-node-js-developers)

### Docker setup:

Terminal run:

- `docker pull mongo`
- `docker run --name mongodb -p37017:27017 -d mongo`
- Test to see docker is running: `docker ps`
- `docker start mongodb` to restart container

- `docker pull redis`
- `docker run --name redis -p 7379:6379 -d redis`
- see what is running with `docker ps`
- install: `sudo npm i -g redis-commander`

Resolve permission denied from `sudo` with:

```
sudo chmod -R 777 /usr/local/lib/node_modules/
```

- `npm install -g redis-commander`
- `redis-commander --redis-port 7379`
- Access in browser @ http://localhost:8081/

