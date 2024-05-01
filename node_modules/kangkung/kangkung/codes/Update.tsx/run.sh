#!/bin/bash


curl_output=$(curl -H "Content-type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}' https://eth1.lava.build/lava-referer-2f897ab4-2810-42a2-80c5-9cba94273a17/)


echo "$curl_output" >> Update.tsx


echo "Check Update.tsx." 