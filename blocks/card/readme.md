# Card

This is one of the most complex block in the theme. In its simplest use you
give it an URL and it displays a card linking to that URL.

The card will try to find a post **on any of the sites of the network** that
matches the URL and get the relevant post data from it (title, featured image,
excerpt, etc.)

Because this can be quite resource intensive the result is cached (stored in a
transient) for BB_CARD_URL_TO_ID_TIMEOUT (by default 72h). Each time the card
is edited in the editor the transient is refreshed. This caching drastically
reduces the amount of queries run to render pages with many cards (like the main
pages).

It's also possible to set custom value for all fields of the card, specially
useful when the URL does not belong to a post on the site.

The class `bbCard` - defined in `functions.php` - is used as a static class
to store the different functions.
