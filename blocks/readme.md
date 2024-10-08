# WMDE Blocks Repository

This repo is to be used as a git submodule for newer (e.g. Tailwind based) WMDE themes.

## Details

For custom ACF blocks that we may want to reuse a modular structure is recommended. For now there's an example with the block called `accordion`.

- ACF fields:
  - file: `blocks/accordion/group_5cff8a6c26332.json`
  - can be also symlinked to: `acf-json/group_5cff8a6c26332.json` to allow edit in WP backend
- block declaration:
  - file: `blocks/accordion/block.json`
- Styling:
  - file: `blocks/accordion/style.scss`
  - will be **automatically** included by `src/scss/site.scss`
- Render template:
  - file: `blocks/accordion/accordion.php`
- JS code:
  - file: `blocks/accordion/accordion.js`
  - needs to be **manually** imported in `site.js` and `site.js` to be extended as needed

## Adding the submodule to a project

To include the submodule in a theme first make sure you delete the blocks directory and remove it from git:

```
rm -rf blocks
git rm -r blocks
git commit -m 'Removed blocks...'
```

Then add the submodule:

```
git submodule add  https://bitbucket.org/bbteam2016/wmde-blocks.git blocks
```

### Usage

### Blocks

Blocks are loaded with the following command in your functions:

```
require_once get_template_directory() . '/blocks/init.php';
```

Check out the ACF Options page to set which blocks are to be loaded.

### SCSS

To include the blocks SCSS add the node-module `gulp-sass-glob` to the project and insert the following line in your SCSS stylesheet:

```
/* ACF blocks */
@import '../../blocks/**/style.scss';
```

### Staying up to date

The following command will initialize and update the submodules:

```
git submodule update --init
```
