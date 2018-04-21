# Corona HTML5 Background Plugin

_Change the background color of the HTML5 app page without messing with the index.html source._

## Download

Download the plugin archive by __[clicking here](https://github.com/develephant/corona-html5-bg-color-plugin/archive/master.zip)__.

## Install

Unzip the archive and place __plugin/bgcolor_js.js__ and __plugin/bgcolor.lua__ in the ___root___ directory of your project.

## Require

```lua
local bgColor = require("bgcolor")
```

## API

### setColor

Set by [HTML color name](https://en.wikipedia.org/wiki/Web_colors#X11_color_names).

```lua
bgColor.setColor("darkorange")
```

### setHex

Set by hex value.

```lua
bgColor.setHex("#f97c00")
```

### setRGBA

Set with RGB + Alpha.

```lua
bgColor.setRGBA(150, 150, 150, .30)
```

__Arguments__

  - red (0-255)
  - green (0-255)
  - blue (0-255)
  - alpha (0-1)

---

&copy;2018 C. Byerley ([develephant](https://develephant.com))