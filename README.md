# Webhint "real" JSON formatter

The Webhint "real" `json` formatter does a `JSON.stringify()` of
the results of running `hint`, formatted as an array of objects.
Unlike the default `json` formatter, no other non-JSON text is output.
Output is not very user friendly, but it can be useful when using it
as input for other tools:

To use it you will have to install it via `npm`:

```bash
npm install webhint-formatter-real-json
```

Note: You can make `npm` install it as a `devDependency` using the
`--save-dev` parameter, or to install it globally, you can use the
`-g` parameter. For other options see [`npm`'s
documentation](https://docs.npmjs.com/cli/install).

And then activate it via the [`.hintrc`][hintrc] configuration file:

```json
{
    "connector": {...},
    "formatters": "real-json",
    "hints": {
        ...
    },
    ...
}
```

**This package is derived from the core webhint JSON formatter.**

## Running the tests

```
$ npm test
```

## Releasing a new version

```
$ npm run build-release
$ npm publish
```

<!-- Link labels: -->

[hintrc]: https://webhint.io/docs/user-guide/configuring-webhint/summary/
