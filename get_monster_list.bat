@ECHO OFF
REM These are comments
echo Fetching a list of all the monsters...
break > all_monster_list.txt
for /r . %%g in (saved_monsters\*.html) do echo %%~nxg >> all_monster_list.txt

goto EXIT
:EXIT
ECHO Press any key to exit...
pause>null
