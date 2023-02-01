# !!! This project is a replica of PreCSSS, because PreCSSS is no longer maintained !!!.

# PreCSSS [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PreCSSS] lets you use Sass-like markup and staged CSS features in CSS.

```scss
$blue: #056ef0;
$column: 200px;

.menu {
  width: calc(4 * $column);
}

.menu_link {
  background: $blue;
  width: $column;
}

/* becomes */

.menu {
  width: calc(4 * 200px);
}

.menu_link {
  background: #056ef0;
  width: 200px;
}
```

PreCSSS combines Sass-like syntactical sugar — like variables, conditionals, and
iterators — with emerging CSS features — like logical and custom properties,
media query ranges, and image sets.

## Usage

Add [PreCSSS] to your build tool:

```bash
npm install PreCSSSs --save-dev

or

yarn add -D PreCSSSs
```

#### Node

Use [PreCSSS] to process your CSS:

```js
import PreCSSS from 'PreCSSS';

PreCSSS.process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PreCSSS] as a plugin:

```js
import postcss from 'postcss';
import PreCSSS from 'PreCSSS';

postcss([
  PreCSSS(/* options */)
]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PreCSSS] in your Gulpfile:

```js
import postcss from 'gulp-postcss';
import PreCSSS from 'PreCSSS';

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      PreCSSS(/* options */)
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PreCSSS] in your Gruntfile:

```js
import PreCSSS from 'PreCSSS';

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        PreCSSS(/* options */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

# Plugins

PreCSSS is powered by the following plugins (in this order):

- [postcss-extend-rule](https://github.com/jonathantneal/postcss-extend-rule)
- [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables)
- [postcss-preset-env](https://github.com/jonathantneal/postcss-preset-env)
- [postcss-atroot](https://github.com/OEvgeny/postcss-atroot)
- [postcss-property-lookup](https://github.com/simonsmith/postcss-property-lookup)
- [postcss-nested](https://github.com/postcss/postcss-nested)

[cli-img]: https://img.shields.io/travis/jonathantneal/PreCSSS/master.svg
[cli-url]: https://travis-ci.org/jonathantneal/PreCSSS
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/PreCSSS.svg
[npm-url]: https://www.npmjs.com/package/PreCSSS

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PreCSSS]: https://github.com/cage1618/precss
