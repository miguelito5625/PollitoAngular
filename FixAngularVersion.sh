#!/bin/bash

#Need Node.js 14.15 and Angular 12.2

# nvm install v14.15

npm uninstall -g @angular/cli
npm cache clean --force
npm install -g @angular/cli@12.2
npm i --legacy-peer-deps --force
