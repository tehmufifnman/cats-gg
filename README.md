[![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)
# cats-gg
[Cats.gg](http://cats.gg/) - Sweet Cat Pics!

# Query Parameters
Settings can be configured using query parameters for viewing in other apps such as OBS.

Example usage:
http://cats.gg/?streamModeEnabled=true&displayMode=DISPLAY_MODE_GIFS&slideshowDelay=2

Options:
* `displayMode=<DISPLAY_MODE_GIFS|DISPLAY_MODE_PICTURES>`
    * Sets the display mode to show cat gifs (default) or cat pictures
    * E.G. `cats.gg?displayMode=DISPLAY_MODE_PICTURES`
* `slideshowDelay=<number>`
    * Sets the delay between images in seconds (default 2)
    * E.G. `cats.gg?slideshowDelay=5`
* `streamModeEnabled=true`
    * Enables stream mode, removing all UI elements besides the images
* `theme=dark`
   * Enables the dark theme
