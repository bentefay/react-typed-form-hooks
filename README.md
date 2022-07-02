<h1 align="center" width="100%">
    WIP: React Typed Form Hooks
</h1>

<p align="center" width="100%">
    <a href="https://www.npmjs.com/package/react-typed-form-hooks"><img alt="NPM" src="https://img.shields.io/npm/v/react-typed-form-hooks.svg" /></a>
    <a href="https://bundlephobia.com/result?p=react-typed-form-hooks"><img alt="NPM Size" src="https://img.shields.io/bundlephobia/minzip/react-typed-form-hooks" /></a>
</p>

<p align="center" width="100%">
    <strong>A performant TypeScript solution for type-safe, complex forms with great UX
</strong>
</p>

The goals of the library include:

- **Full type coverage** - Fully typed even for complex nested forms including arrays, tuples, unions or intersections.
    Supports modelling of distinct input and output types. Uses simple types that produce understandable syntax 
    errors if you make a mistake.
- **Dynamic forms** - Fields in the form can change dynamically (e.g. if changing to a discriminated union 
    case with different fields). Working with nested objects and arrays is straightforward.
- **Flexible validation** - Supports sync and async validation. Supports whole-form validation with a library like Zod. 
    Supports granular validation with explicit validation dependencies that trigger re-validation. 
    Full control over when validation runs to ensure a great user experience
    (as discussed [here](https://ux.stackexchange.com/questions/48268/validate-on-blur-or-keypress) 
    and [here](http://alistapart.com/article/inline-validation-in-web-forms/)).
- **Composable** - Child form elements (single inputs or nested child forms) can be ignorant of the parent form type. 
    Fields can be complex objects and will not be modified by the library. 
- **Performant** - Child form elements only re-render if necessary (including for arrays). 
    Provides hooks and components to listen for changes to specific parts of the form to trigger re-rendering if required.
- **Simple**: An intuitive API with a small surface area. 
- **Small**: [![NPM Size](https://img.shields.io/bundlephobia/minzip/react-typed-form-hooks)](https://bundlephobia.com/result?p=react-typed-form-hooks)

There are lots of great form libraries out there like 
[typed-react-form](https://www.npmjs.com/package/typed-react-form) (the inspiration for this library),
[@react-typed-forms](https://www.npmjs.com/package/@react-typed-forms/core), 
[react-form](https://www.npmjs.com/package/@shopify/react-form#useform),
[react-hook-form](https://www.npmjs.com/package/react-hook-form) and
[formik](https://formik.org/), but to our knowledge none meet all of the above goals.

## Install

```  
npm install react-typed-form-hooks
```

```  
yarn add react-typed-form-hooks
```

## Contributing

Contributions are welcome.

1. Clone this repo.
2. Install deps using `yarn`. Yarn is required because of the resolutions field in package.json, npm does not support this.
3. Run `yarn start`, this will watch source files in `src/` and rebuild on change.
4. Open a new terminal and navigate to `testing/`, run `yarn` and `yarn start` to start the testing application.
5. Done! When you edit source code, it will be rebuilt and update the testing application.

## License

MIT © [Ben Tefay](https://github.com/bentefay)
