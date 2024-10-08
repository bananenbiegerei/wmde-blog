# Team Members

## Summary

This module adds the following features:

- Team CPT with custom fields
- Team taxonomy with colors for each category
- Team Member ACF block
- bbTeamMember class to query a team member and get info, photo, etc.

## Team CPT

This allows creating a list of WKMDE Team Members with their details for use in
the Team Members Block and Blog Post template.

The Team CPT is **only active on the main site** (on a multisite instance) but the
data can be queried from other sites (e.g. Blog).

## Post Custom Authors

You can add a custom author to a post via the metabox, their name must be typed manually. If there
is a matching team member in the Team CPT their info (name + photo + background color) will be used.
If there's no match a placeholder is used.

This is done by the bbTeamMember class.

## bbTeamMember Class

This class makes it easy to query an team member and get an object with all the necessary info.

Usage: `new bbTeamMember([ 'id'=> 23132])` or `new bbTeamMember([ 'name'=> 'User Name'])`.
And then `$member->name`, `$member->email`, etc., and `$member->get_photo($classes)`.
