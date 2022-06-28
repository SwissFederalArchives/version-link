#!/bin/sh

PATH="node_modules/.bin/:${PATH}"

es6_escape () {
  NEW_CONTENT=$(sed -e 's/`/\\`/g' -e 's/{/\\{/g' -e 's/}/\\}/g' "$1")
  echo "${NEW_CONTENT}" > "$1"
}

pm2 --name serve start "serve -l tcp://0.0.0.0:5050 ."
sleep 5
mkdir -p dist
respec --disable-sandbox http://localhost:5050/ dist/version.html
es6_escape "dist/version.html"
pm2 delete serve
