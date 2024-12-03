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
zip "$ZIP_NAME" $SLUG -rv \
  -x \*/.DS_Store \
  -x $SLUG/.babelrc \
  -x $SLUG/.env\* \
  -x $SLUG/.git\* \
  -x $SLUG/.nova/\* \
  -x $SLUG/blocks/.git\* \
  -x $SLUG/blocks/\*/style.scss \
  -x $SLUG/dist/\* \
  -x $SLUG/gulpfile.js \
  -x $SLUG/mktheme.sh \
  -x $SLUG/node_modules/\* \
  -x $SLUG/package\*.json \
  -x $SLUG/\*.md \
  -x $SLUG/\*/\*.md \
  -x $SLUG/src/\*

# Move the zip with the timestamp to the dist folder
mv "$ZIP_NAME" $SLUG/dist/

# Copy the same zip file without the timestamp as wmde-blog.zip
cp $SLUG/dist/"$ZIP_NAME" $SLUG/dist/"$SLUG.zip"
