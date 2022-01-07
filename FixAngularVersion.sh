#!/bin/bash

#Need Node.js 14.5.5 and Angular 12.2

npm uninstall -g @angular/cli
npm cache clean --force
npm install -g @angular/cli@12.2
npm i --legacy-peer-deps --force
