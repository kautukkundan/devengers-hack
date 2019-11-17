#!/bin/bash

cp "$1" "./boilerplate/model.joblib"
cd boilerplate

docker build -t "$2":latest . 

docker tag "$2" kktest.azurecr.io/"$2":v1

docker push kktest.azurecr.io/"$2":v1

rm model.joblib