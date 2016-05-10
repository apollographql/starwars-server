# apollo-starter-kit

Boilerplate for getting off the ground quickly when writing a GraphQL server.

See also [Tutorial: How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs) and the solution in the `server-tutorial-solution` branch of this repo.

## Getting started

```sh
git clone git@github.com:apollostack/apollo-starter-kit.git
cd apollo-starter-kit
npm install
npm run start
```

Then open [http://localhost:8080](http://localhost:8080)

When you paste this on the left side of the page:

```
{
  testString
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "testString": "It works!"
  }
}
```  
