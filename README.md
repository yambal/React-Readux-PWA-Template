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