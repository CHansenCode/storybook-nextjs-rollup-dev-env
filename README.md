# Introduction

Storybook, Next.js & rollup compilation config.

This codebase is developed as an 'component development environment', both with a view in the storybook interface and with a preview site built on the Next.js framework.

The command 'npm run storybook' is used, for now, as a local dev-environment to be shared across several developers. While the 'npm run dev // npm run build' is the view & export of the online component library that is integrated on customers backside cms in the project development phase.

'npm run build-lib' imports all exported components from the 'root/components/index.js' file and bundles them up in a 'commonjs' & 'es modules' export file found in 'root/dist' for npm publishing.

<br>

## Installation

---

```
npm install
```

<br>

## Usage

---

<br>

_Dev environment_

```javascript
// Storybook
npm run storybook

// Next.js
npm run dev

// Rollup
npm run build-lib
```

_exports_

```javascript
// Next.js
npm run build
(runs 'next export & next build')
exports to '~/out'

// Rollup
npm run build-lib
exports to '~/dist/index.js'
```

<br>

## Usage

---

- 'npx create-next-project' <-- starting point
- jsconfig.json - '@' points to 'root' (only setup for 'npm run dev', NOT storybook)
- next.config.js - 'imgix' set as img loader to enable export without error/fail for static pages
- package.json - added 'next export' on top of npm run build. 'npm run build' now creates a static compilation in 'root/out'

- sass - DEV DEP, for global/modules
- .prettierrc - ADDED

- ChansenCode - REPLACED default with CHansenCode one
- Layout file - _read more below..._
- Component strucuture - _read more below..._

<br>

## Next

---

<br>

```javascript
file: '~/pages/app.js'

<div id="__next">
  <Layout>
    <Component {...pageProps} />
  </Layout>
</div>
```

```javascript
file: '~/Layout/Layout.js'

<Head />

<Header></Header>
{children}
<Footer></Footer>
```

## Component structure

---

_All components are exported from index.js_

```javascript
file: '~/components/index.js';

export * from './Foo';
export * from './Bar';
//...for all components
```

<br>
_Component_

```javascript
file: '~/components/Foo/index.js';

export * from './Foo';
```

```javascript
file: '~/components/Foo/Foo.js';

export const Foo = () => {
  return (
    <div>
      <h4>foo</h4>
    </div>
  );
};
```

<br>

_To import components in Pages/compositions_

```javascript
import { Foo, Bar } from '~/components';
```

<br>
