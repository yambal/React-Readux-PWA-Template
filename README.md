```gh-pages```


```yarn add gh-pages -d```

``` package.json
  "homepage": "./",
  "scripts": {
    ...
    "preghpages": "yarn build",
    "ghpages": "gh-pages -d build"
    ...
  },
```

```yarn run ghpages```

``` src/manifest.js
  "start_url": ".",
  "url": ".",
  "screenshots": [],
  "orientation": "portrait",
  "lang":"ja"
}
```