# unique-set-demo

> Demonstration site verifying requirements of the UniqueSet function

## Live Demo

A live demo using the function in the browser can be seen [here](https://uniqueset.now.sh/).

## Running Tests

Variants of the function were written in JavaScript, Java, and Elixir, with the live demo using the JavaScript implementation.

In order to run all tests, you will need need to have a [Java Runtime Environment](https://java.com/en/) and [Elixir](http://elixir-lang.org/install.html) installed.

``` bash
# run all tests (JavaScript/Java/Elixir)
yarn test

# run the JavaScript tests
# path to function: ./js/uniqueSet/src/index.js
yarn run test:js

# build and run the Java tests
# path to function: ./java/UniqueSet.java
yarn run test:java

# build and run the Elixir tests
# path to function: ./elixir/UniqueSet/lib/UniqueSet.ex
yarn run test:elixir
```

## Build Setup for Demo

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```
