#!/bin/sh
mkdir -p dist

# Define the slug to include 'wmde-blog'
SLUG="wmde-blog"

# Update version number with build timestamp
TS=`date +%y%j%H%M`
VERSION=`grep Version style.css | awk '{ print $3 }' | cut -d . -f -1,2`.$TS
sed  -i '' -e "s/Version:.*/Version:        $VERSION/" style.css

# Delete symlinks in acf-json
find acf-json -type link -exec rm {} \;

# Creates a zip file of the theme ready to upload to WordPress
cd ..
ZIP_NAME="$SLUG-$TS.zip"
zip "$ZIP_NAME" wmde blog -rv \
  -x \*/.DS_Store \
  -x wmde/.babelrc \
  -x wmde/.env\* \
  -x wmde/.git\* \
  -x wmde/.nova/\* \
  -x wmde/blocks/.git\* \
  -x wmde/blocks/\*/style.scss \
  -x wmde/dist/\* \
  -x wmde/gulpfile.js \
  -x wmde/mktheme.sh \
  -x wmde/node_modules/\* \
  -x wmde/package\*.json \
  -x wmde/\*.md \
  -x wmde/\*/\*.md \
  -x wmde/src/\*

# Move the zip with the timestamp to the dist folder
mv "$ZIP_NAME" wmde/dist/

# Copy the same zip file without the timestamp as wmde-blog.zip
cp wmde/dist/"$ZIP_NAME" wmde/dist/"$SLUG.zip"
