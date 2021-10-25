## Introduction

Empty next project with my standard config

<br>

### Changes to base config / Features

---

- 'npx create-next-project' - init
- jsconfig.json - '@' points to 'root/'
- next.config.js - 'imgix' set as img loader to enable export without error/fail for static pages

- sass - for root & modules
- .prettierrc

- ChansenCode .favicon replacing default
- Layout file - _read more below..._
- Component strucuture - _read more below..._

<br>

### Layout

---

Layout components live in 'root/Layout', wraps the initial component in #\_\_next root div

```javascript
<div id="__next">
  <Layout>
    <Component {...pageProps} />
  </Layout>
</div>
```

```javascript
Layout.js

<>
    <Head /> //title, meta, robotpointer etc..

    <Header /> // nav / logo
    {children} // i.e. pages
    <Footer /> // footer
</ >
```

### Components

---

All components will be structured by the following pattern

_All components are exported from index.js_

```javascript
file: '@components/index.js';

export * from './Foo';
export * from './Bar';
//...for all components
```

_Component_

```javascript
file: '@components/Foo/index.js';

export * from './Foo';

file: '@components/Foo/Foo.js';

export const Foo = () => {
  return (
    <div>
      <h4>foo</h4>
    </div>
  );
};
```

_To import components in Pages/compositions_

```javascript
import { Foo, Bar } from '@/components';
```

<br>
