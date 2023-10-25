#!/bin/bash

cd /home/node/app

if [ -e /home/node/app/package.json ]; then
  echo -e "\e[32m Project found \e[0m"

  echo -e "\e[32m Installing dependencies \e[0m"
  npm install
  echo -e "\n\e[32m Dependencies installed \e[0m"

  echo -e "\e[32m Starting server \e[32m"
  npm run dev

else
  echo -e "\e[33;1m *** Warning - Project or file package.json does not exist *** \e[0m"

  echo -e "\e[32;1m Keeping the container up \e[0m"
  tail -f /dev/null
fi