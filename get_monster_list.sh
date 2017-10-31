#!/bin/bash

echo "Fetching a list of all the monsters..."
echo -n "" > all_monster_list.txt

for i in $(ls ./saved_monsters/*.html)
do
   echo $(basename $i) >> all_monster_list.txt
done

read -n 1 -s -p "Press any key to exit..."
echo ""

exit 0
