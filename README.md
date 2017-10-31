# dnd-monster-info

This is a html source written in HTML/Javascript to create D&D 5e monster information (stat blocks) like they appear here: http://www.aidedd.org/regles/bestiaire/liste/.

The created information is both in HTML format and in XML format, in case some editing at a later time is needed. Once exporting to HTML and XML, the two formats are filled into the two textareas below. Copy each exported format into a text editor and save in the <i>saved_monsters</i> directory using the appropriate extension (<i>.html</i> for HTML and <i>.xml</i> for XML). If using a monster image, enter the location and name of the image relative to the <i>saved_monsters</i> directory. For example, save the image named <i>monster.jpg</i> into the <i>image</i> directory inside the <i>saved_monsters</i> directory and fill in the image information as <i>./image/monster.jpg</i>.

In addition, there are scripts (<i>get_monster_list.bat</i> for Windows and <i>get_monster_list.sh</i> for Linux) to automatically create a list of all monsters saved in the <i>saved_monsters</i> directory. To use, run either of the two scripts and then open <i>all_monsters.html</i> in a web browser (preferably firefox).
