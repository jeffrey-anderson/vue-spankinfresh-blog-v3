# vue-spankinfresh-blog-v3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Containerize for multiple architectures

* [Build multi-arch images with Buildx](https://docs.docker.com/desktop/multi-arch/#build-multi-arch-images-with-buildx)

### Create a builder

__NOTE:__ Required Docker Desktop

```
docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx inspect --bootstrap
```

### Build and push
```
./node_modules/.bin/vue-cli-service build --mode k8s
docker buildx build --push --platform linux/arm64,linux/amd64 --tag <user>/swe-vue-k8s:<tag> .
```
