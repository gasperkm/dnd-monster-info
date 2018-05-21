// XML converter functions ----------------------------------------
var loadError = 0;
var ConvertedString;

function getHtmlFileHeader(temp, type)
{
  var tempString;
  // HTML base and title
  if(type == 0)
    tempString = "<!doctype html>\n<html>\n<head>\n\t<meta charset='utf-8'>\n\t<meta name='viewport' content='initial-scale=1'>\n\t<title>" + document.getElementById("monname").value + " &raquo; Dungeons &amp; Dragons - D&amp;D 5</title>\n<style>\n";
  else if(type == 1)
    tempString = "<!doctype html>\n<html>\n<head>\n\t<meta charset='utf-8'>\n\t<meta name='viewport' content='initial-scale=1'>\n\t<title>Monster list &raquo; Dungeons &amp; Dragons - D&amp;D 5</title>\n<style>\n";
  // CSS styling
  if(document.getElementById("exporttype").value == "mobile")
    tempString += "html {font-size:62.5%;}\nbody {padding:0; margin:0;}\n.titre1 {font-size:2.4rem; text-align:center; padding:20px 10px 10px 10px; font-weight:bold;}\n.titre2 {font-size:1.8rem; text-align:center; padding:10px 10px 0px 10px;}\n.titre3 {font-size:1.4rem; text-align:center; padding: 5px 10px 20px 10px; margin:0 33% 10px 33%; border-bottom:2px solid black;}\n.bloc {width:33%; min-width:360px; padding:15px; margin:0; box-sizing:border-box; font-family: Georgia, \"Times New Roman\", serif; font-size:1.2rem; line-height:140%; text-align:left; Page-Break-Inside:avoid}\n.bloc table {margin:8px 0 0 0; padding:0; }\n.bloc table th {font-weight:bold; font-size:1.0rem; vertical-align:bottom; border-bottom:1px solid black}\n.bloc table td {min-width:25px; font-size:1.0rem; }\n.sansSerif {line-height:140%; font-family: arial, sans-serif; font-size:1.2rem; }\n.nom {padding:0; text-transform:uppercase; letter-spacing:1px; color:#6D0000; font-size:1.6rem; font-weight:bold; }\n.nom:first-letter {font-size:2.4rem;}\n.trad {float:right; margin:2px 0 2px 0; font-family: verdana, arial, sans-serif; font-size:1.2rem;}\n.trad a:link, .trad a:hover, .trad a:visited {color:#B30303; font-weight:normal;}\n.niveau {padding:2px 0 8px 0;}\n.type {padding:2px 0 2px 0;}\n.carac {display:inline-block; padding-left:15px; text-align:center}\n.description {padding:8px 0 8px 0; text-align:justify;}\n.red {color:#6D0000;}\n.rub {color:#6D0000; margin:10px 0 5px 0; border-bottom:1px solid #B30303; font-size:1.4rem; text-transform:uppercase; font-weight:bold;}\n.rub:first-letter {font-size:1.6rem;}\n.source {padding:8px 0 4px 0; text-align:left; letter-spacing:-1px; font-family: verdana, arial, sans-serif; font-size:1.0rem;}\np {padding:0; margin:3px 0 3px 0;}\n.center {text-align:center;}\n.petit {font-size:1.1rem;}\n.trespetit {font-size:1.0rem;}\ntable.carac {margin:0}\ntable.carac td	{padding:0 15px 0 0; font-size:1.2rem;}\nimg.picture {max-width:95%; border:4px solid #888; text-align:center;}\ndiv img.sep-monster {margin:3px 0 3px 0; width=90%; height=4px;}\ndiv svg {width:100%; height:5px;}\ndiv .variant {background-color:#DBE2C2; border-top:4px solid #404040; border-bottom:4px solid #404040; padding:10px; margin:10px 0 0 0;}\n.colG {display:inline-block; width:47%; margin:20px 1% 0 2%; vertical-align: top;}\n.colD {display:inline-block; width:47%; margin:20px 2% 0 1%; vertical-align: top;}\n.colG .bloc {width:100%;}\n.colD .bloc {width:100%;}\n.niveauSort {width:50%; font-size:1.8rem; font-weight:bold; text-align:center; background-color:white; color:black; border:3px solid black; padding:5px; margin:1% 25% 0 25%;}\nimg.poison {float:right; border:0px; margin:0 0 5px 10px}\n.erreur {font-weight:bold; color:red;}\n.gras {font-weight:bold;}\n.gris {background-color:#333333; color:#BBBBBB;}\n.blanc {background-color:#FFFFFF; color:#000000; font-weight:bold;}\ntable.rencontre	td {font-size:1.2rem; }\ntable.resultat {border:1px solid black; border-collapse:separate; border-spacing:0;}\ntable.resultat td {font-size:1.2rem; width:80px; text-align:center; padding:6px;}\n.bloc input {font-size:18px; padding:4px;}\n.bloc input.grise {color:#888}\n.bloc input:focus {color:#000}\n.bloc .output {font-size:42px; line-height:1.2; padding:10px;}\n.bloc select {font-size:14px; padding:4px;}\n@media print {\n\thtml {font-size:50%;}\n\t.bloc {width:100%; min-width:200px; padding:2%;}\n\t.sansSerif {line-height:130%;}\n\t.petit {line-height:120%;}\n\t.trespetit {line-height:110%;}\n}\n@media only screen and (max-device-width:980px) {\n\thtml {font-size:87.5%;}\n\t.colG {width:100%; margin:20px 0 0 0;}\n\t.colD {width:100%; margin:20px 0 0 0;}\n\t.bloc {width:100%;}\n\t.trad {float:none; padding-left:0px;}\n}\n";
  else
    tempString += "html {font-size:62.5%;}\nbody {padding:0; margin:0;}\n.titre1 {font-size:2.4rem; text-align:center; padding:20px 10px 10px 10px; font-weight:bold;}\n.titre2 {font-size:1.8rem; text-align:center; padding:10px 10px 0px 10px;}\n.titre3 {font-size:1.4rem; text-align:center; padding: 5px 10px 20px 10px; margin:0 33% 10px 33%; border-bottom:2px solid black;}\n.bloc {width:100%; min-width:650px; padding:15px; margin:0; box-sizing:border-box; font-family: Georgia, \"Times New Roman\", serif; font-size:1.2rem; line-height:140%; text-align:left; Page-Break-Inside:avoid}\n.bloc table {margin:8px 0 0 0; padding:0; }\n.bloc table th {font-weight:bold; font-size:1.0rem; vertical-align:bottom; border-bottom:1px solid black}\n.bloc table td {min-width:25px; font-size:1.0rem; }\n.sansSerif {line-height:140%; font-family: arial, sans-serif; font-size:1.2rem; }\n.nom {padding:0; text-transform:uppercase; letter-spacing:1px; color:#6D0000; font-size:1.6rem; font-weight:bold; }\n.nom:first-letter {font-size:2.4rem;}\n.niveau {padding:2px 0 8px 0;}\n.type {padding:2px 0 2px 0;}\n.carac {display:inline-block; padding-left:15px; text-align:center}\n.description {padding:8px 0 8px 0; text-align:justify;}\n.red {width: 360px; color:#6D0000;}\n.rub {color:#6D0000; margin:10px 0 5px 0; border-bottom:1px solid #B30303; font-size:1.4rem; text-transform:uppercase; font-weight:bold;}\n.rub:first-letter {font-size:1.6rem;}\n.source {padding:8px 0 4px 0; text-align:left; letter-spacing:-1px; font-family: verdana, arial, sans-serif; font-size:1.0rem;}\np {padding:0; margin:3px 0 3px 0;}\n.center {text-align:center;}\n.petit {font-size:1.1rem;}\n.trespetit {font-size:1.0rem;}\ntable.carac {margin:0}\ntable.carac td	{padding:0 15px 0 0; font-size:1.2rem;}\nimg.picture {max-width:95%; text-align:center;}\ndiv img.sep-monster {margin:3px 0 3px 0; width=90%; height=4px;}\ndiv svg {width:100%; height:5px;}\ndiv .variant {background-color:#DBE2C2; border-top:4px solid #404040; border-bottom:4px solid #404040; padding:10px; margin:10px 0 0 0;}\n.colG {display:inline-block; width:47%; margin:20px 1% 0 2%; vertical-align: top;}\n.colD {display:inline-block; width:47%; margin:20px 2% 0 1%; vertical-align: top;}\n.colG .bloc {width:100%;}\n.colD .bloc {width:100%;}\n.niveauSort {width:50%; font-size:1.8rem; font-weight:bold; text-align:center; background-color:white; color:black; border:3px solid black; padding:5px; margin:1% 25% 0 25%;}\nimg.poison {float:right; border:0px; margin:0 0 5px 10px}\n.erreur {font-weight:bold; color:red;}\n.gras {font-weight:bold;}\n.gris {background-color:#333333; color:#BBBBBB;}\n.blanc {background-color:#FFFFFF; color:#000000; font-weight:bold;}\ntable.rencontre	td {font-size:1.2rem; }\ntable.resultat {border:1px solid black; border-collapse:separate; border-spacing:0;}\ntable.resultat td {font-size:1.2rem; width:80px; text-align:center; padding:6px;}\n.bloc input {font-size:18px; padding:4px;}\n.bloc input.grise {color:#888}\n.bloc input:focus {color:#000}\n.bloc .output {font-size:42px; line-height:1.2; padding:10px;}\n.bloc select {font-size:14px; padding:4px;}\n@media print {\n\thtml {font-size:50%;}\n\t.bloc {width:100%; min-width:200px; padding:2%;}\n\t.sansSerif {line-height:130%;}\n\t.petit {line-height:120%;}\n\t.trespetit {line-height:110%;}\n}\n@media only screen and (max-device-width:980px) {\n\thtml {font-size:87.5%;}\n\t.colG {width:100%; margin:20px 0 0 0;}\n\t.colD {width:100%; margin:20px 0 0 0;}\n\t.bloc {width:100%;}\n\t.trad {float:none; padding-left:0px;}\n}\n.trad {position:absolute; right:0; margin-right:15px; width:240px; height:240px; border:4px solid #888; z-index:499; }\n.trad img {position:absolute; margin:auto; top:0; bottom:0; left:0; right:0; max-width:240px; max-height:240px;}\n";
  tempString += ".navbar {list-style-type:none; margin:0; padding:0; overflow:hidden; background-color:#333; position:fixed; top:0; width:100%; z-index:500;}\n.navbar li { float:left; border-right:1px solid #bbb;}\n.navbar li a {display:block; color:white; text-align:center; padding:14px 16px; text-decoration:none;}\n.navbar li a:hover {background-color:#111; cursor:pointer;}\n.first {margin-top:40px;}\n#selectmonster {display:block; float:right; margin-left:10px; margin-top:-5px; color:white; background-color:#333; text-align:center; text-decoration:none;}"
  // HTML body
//  tempString += "</style>\n<script>\nfunction gotoTop()\n{\n\twindow.scrollTo(0,0);\n}\nfunction moveTo()\n{\n\tvar scroll = document.getElementById('selectmonster').value;\n\tif(scroll != 'empty')\n\t\twindow.scrollTo(0, document.getElementById(scroll).offsetTop - 40);\n}\n</script>\n</head>\n<body>\n\t<div id='home'></div>\n\t<ul class='navbar'>\n\t\t<li><a onclick='gotoTop()'>Back to top</a></li>\n\t\t<li><a>Select monster:\n\t\t\t<select id='selectmonster' onchange='moveTo()'>\n\t\t\t\t<option value='empty'>Select monster</option>\nNAVFILLIN\t\t\t</select>\n\t\t</a></li>\n\t</ul>\n";
  tempString += "</style>\n<script>\nfunction gotoTop()\n{\n\twindow.scrollTo(0,0);\n\tdocument.getElementById('selectmonster').firstElementChild.innerHTML = 'Select monster...';\n\tdocument.getElementById('selectmonster').value = 'empty';\n}\nfunction moveTo()\n{\n\tvar scroll = document.getElementById('selectmonster').value;\n\tif(scroll != 'empty')\n\t{\n\t\twindow.scrollTo(0, document.getElementById(scroll).offsetTop - 40);\n\t\tdocument.getElementById('selectmonster').firstElementChild.innerHTML = 'Back to top...';\n\t}\n\telse\n\t{\n\t\twindow.scrollTo(0,0);\n\t\tdocument.getElementById('selectmonster').firstElementChild.innerHTML = 'Select monster...';\n\t}\n}\n</script>\n</head>\n<body>\n\t<div id='home'></div>\n\t<ul class='navbar'>\n\t\t<li><a onclick='gotoTop()'>Back to top</a></li>\n\t\t<li><a>\n\t\t\t<select id='selectmonster' onchange='moveTo()'>\n\t\t\t\t<option value='empty'>Select monster...</option>\nNAVFILLIN\t\t\t</select>\n\t\t</a></li>\n\t</ul>\n";
  
  return tempString;
}

function getHtmlFileFooter(out)
{
  if(out == 0)
    return String("\t</div>\n");
  else if(out == 1)
    return String("</body>\n</html>");
}

function getHtmlFileMiddle()
{
  return String("\t\t</div>\n");
}

function getHtmlFileTopRight(temp, temp2, type, ConvertedString)
{
  var tempString, tempString2;
  
  if( (type == 1) || (type == 2) || (type == 3) || (type == 4) )
  {
	tempString2 = temp.toLowerCase();
	tempString2 = tempString2.replace(/ \(/g, "_");
	tempString2 = tempString2.replace(/ /g, "-");
	tempString2 = tempString2.replace(/\(/g, "");
	tempString2 = tempString2.replace(/\)/g, "");
  }

  if(type == 0)
    tempString = "\t<div class='bloc'>\n\t\t<div class='trad'> [ " + document.getElementById("monname").value + " ] </div>\n";
  else if( (type == 1) || (type == 2) || (type == 3) || (type == 4) )
  {
    if( (type == 1) || (type == 3) || (type == 4) )
	  tempString = "\t<div class='bloc' id='" + tempString2 + "'>\n";
	else if(type == 2)
	  tempString = "\t<div class='bloc first' id='" + tempString2 + "'>\n";
	  
	if((type == 3) || (type == 4))
	  tempString2 = ConvertedString.replace("NAVFILLIN", "\t\t\t\t<option value='" + tempString2 + "'>" + temp + "</option>\n") + tempString;
	else
	  tempString2 = ConvertedString.replace("NAVFILLIN", "\t\t\t\t<option value='" + tempString2 + "'>" + temp + "</option>\nNAVFILLIN") + tempString;
	  
	tempString = tempString2;

    if(document.getElementById("exporttype").value == "mobile")
      tempString += "\t\t<div class='trad'></div>\n";
	else
	{
	  if(temp2 != "###")
	    tempString += "\t\t<div class='trad'><img src='" + temp2 + "' alt='image' title='' class='picture' /></div>\n";
	  else
	    tempString += "\t\t<div class='trad'></div>\n";
	}
  }
  
  return tempString;
}

function getHtmlFileName(temp, type)
{  
  var tempString;
  
  if(type == 0)
    tempString = "\t\t<div class='nom'>" + document.getElementById("monname").value + "</div>\n";
  else if(type == 1)
    tempString = "\t\t<div class='nom'>" + temp + "</div>\n";
  
  tempString += "\t\t<div class='sansSerif'>\n";
  
  return tempString;
}

function getHtmlFileSize(temp, type)
{  
  if(type == 0)
    return String("\t\t\t<div class='type'><em>" + document.getElementById("monsize").value + " ");
  else if(type == 1)
    return String("\t\t\t<div class='type'><em>" + temp + " ");
}

function getHtmlFileType(temp, type)
{  
  if(type == 0)
    return String(document.getElementById("montype").value + ", ");
  else if(type == 1)
    return String(temp + ", ");
}

function getHtmlFileAlignment(temp, type)
{  
  var tempString;
  
  if(type == 0)
    tempString = getAlignment(document.getElementById("monalign").value,1) + "</em></div>\n";
  else if(type == 1)
    tempString = temp + "</em></div>\n";
  tempString += "\t\t\t<div class='red'>\n\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  
  return tempString;
}

function getHtmlFileAC(temp, type)
{  
  if(type == 0)
    return String("\t\t\t\t<strong>Armor Class</strong> " + document.getElementById("monac").value + "\n\t\t\t\t<br />\n");
  else if(type == 1)
    return String("\t\t\t\t<strong>Armor Class</strong> " + temp + "\n\t\t\t\t<br />\n");
}

function getHtmlFileHP(temp, type)
{  
  if(type == 0)
    return String("\t\t\t\t<strong>Hit Points</strong> " + document.getElementById("monhp").value + "\n\t\t\t\t<br />\n");
  else if(type == 1)
    return String("\t\t\t\t<strong>Hit Points</strong> " + temp + "\n\t\t\t\t<br />\n");
}

function getHtmlFileSpeed(temp, type)
{  
  var tempString;
  
  if(type == 0)
    tempString = "\t\t\t\t<strong>Speed</strong> " + document.getElementById("monspeed").value + "\n";
  else if(type == 1)
    tempString = "\t\t\t\t<strong>Speed</strong> " + temp + "\n";
  tempString += "\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  
  return tempString;
}

function getHtmlFileAbility(temp, type, stat)
{  
  var tempString;
  
  if(stat == 0)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>STR</strong><br />" + document.getElementById("monstr").value + " " + document.getElementById("monstrmod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>STR</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
  }
  else if(stat == 1)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>DEX</strong><br />" + document.getElementById("mondex").value + " " + document.getElementById("mondexmod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>DEX</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
  }
  else if(stat == 2)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>CON</strong><br />" + document.getElementById("moncon").value + " " + document.getElementById("monconmod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>CON</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
  }
  else if(stat == 3)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>INT</strong><br />" + document.getElementById("monint").value + " " + document.getElementById("monintmod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>INT</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
  }
  else if(stat == 4)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>WIS</strong><br />" + document.getElementById("monwis").value + " " + document.getElementById("monwismod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>WIS</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
  }
  else if(stat == 5)
  {
    if(type == 0)
      tempString = "\t\t\t\t<div class='carac'><strong>CHA</strong><br />" + document.getElementById("moncha").value + " " + document.getElementById("monchamod").innerHTML + "</div>\n";
    else if(type == 1)
      tempString = "\t\t\t\t<div class='carac'><strong>CHA</strong><br />" + temp + " " + calcModifier(temp,type) + "</div>\n";
	  
	tempString += "\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  }
  
  return tempString;
}

function getHtmlFileSaves(temp, type)
{
  if(type == 0)
  {
    if(document.getElementById("monst").value != "")
      return String("\t\t\t\t<strong>Saving Throws</strong> " + document.getElementById("monst").value + "<br />\n");
  }
  else if(type == 1)
    return String("\t\t\t\t<strong>Saving Throws</strong> " + temp + "<br />\n");
}

function getHtmlFileSkills(temp, type)
{
  if(type == 0)
  {
    if(document.getElementById("monskills").value != "")
      return String("\t\t\t\t<strong>Skills</strong> " + document.getElementById("monskills").value + "<br />\n");
  }
  else if(type == 1)
    return String("\t\t\t\t<strong>Skills</strong> " + temp + "<br />\n");
}

function getHtmlFileDamCond(temp, type, stat)
{
  if(stat == 0)
  {
    if(type == 0)
	{
	  if( document.getElementById("mondamimmun").value != "" )
        return String("\t\t\t\t<strong>Damage Immunities</strong> " + document.getElementById("mondamimmun").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Damage Immunities</strong> " + temp + "<br />\n");
  }
  else if(stat == 1)
  {
    if(type == 0)
	{
	  if( document.getElementById("mondamresist").value != "" )
        return String("\t\t\t\t<strong>Damage Resistances</strong> " + document.getElementById("mondamresist").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Damage Resistances</strong> " + temp + "<br />\n");
  }
  else if(stat == 2)
  {
    if(type == 0)
	{
	  if( document.getElementById("mondamvuln").value != "" )
        return String("\t\t\t\t<strong>Damage Vulnerabilities</strong> " + document.getElementById("mondamvuln").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Damage Vulnerabilities</strong> " + temp + "<br />\n");
  }
  else if(stat == 3)
  {
    if(type == 0)
	{
	  if( document.getElementById("monconimmun").value != "" )
        return String("\t\t\t\t<strong>Condition Immunities</strong> " + document.getElementById("monconimmun").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Condition Immunities</strong> " + temp + "<br />\n");
  }
  else if(stat == 4)
  {
    if(type == 0)
	{  
	  if( document.getElementById("monconresist").value != "" )
        return String("\t\t\t\t<strong>Condition Resistances</strong> " + document.getElementById("monconresist").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Condition Resistances</strong> " + temp + "<br />\n");
  }
  else if(stat == 5)
  {
    if(type == 0)
	{
	  if( document.getElementById("monconvuln").value != "" )
        return String("\t\t\t\t<strong>Condition Vulnerabilities</strong> " + document.getElementById("monconvuln").value + "<br />\n");
	}
    else if(type == 1)
      return String("\t\t\t\t<strong>Condition Vulnerabilities</strong> " + temp + "<br />\n");
  }
}

function getHtmlFileSenses(temp, type)
{
  if(type == 0)
  {
    if( document.getElementById("monsenses").value != "" )
      return String("\t\t\t\t<strong>Senses</strong> " + document.getElementById("monsenses").value + "<br />\n");
  }
  else if(type == 1)
    return String("\t\t\t\t<strong>Senses</strong> " + temp + "<br />\n");
}

function getHtmlFileLanguage(temp, type)
{
  if(type == 0)
  {
    if( document.getElementById("monlang").value != "" )
      return String("\t\t\t\t<strong>Languages</strong> " + document.getElementById("monlang").value + "<br />\n");
  }
  else if(type == 1)
    return String("\t\t\t\t<strong>Languages</strong> " + temp + "<br />\n");
}

function getHtmlFileCR(temp, type)
{
  var tempString;
  
  if(type == 0)
  {
    if( document.getElementById("moncr").value != "" )
      tempString = "\t\t\t\t<strong>Challenge</strong> " + document.getElementById("moncr").value + " (" + document.getElementById("monxp").value + ")\n";
  }
  else if(type == 1)
    tempString = "\t\t\t\t<strong>Challenge</strong> " + temp + " (" + getXP(temp,1) + ")\n";
	
  tempString += "\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  tempString += "\t\t\t</div>\n";
	
  return tempString;
}

function getHtmlFileSpecial(temp, temp2, type)
{
  if(type == 0)
  {
    if(document.getElementById("nrspecial").value != 0)
    {
      for(var i = 0; i < document.getElementById("nrspecial").value; i++)
      {
        return String("\t\t\t<p><strong><em>" + document.getElementById("monspec" + i).value + "</em></strong>. " + (document.getElementById("monspecdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n");
      }
    }
  }
  else if(type == 1)
    return String("\t\t\t<p><strong><em>" + temp + "</em></strong>. " + (temp2).replace(/\n/g, "<br/>") + "</p>\n");
}

function getHtmlFileActionHeader()
{
  return "\t\t\t<div class='rub'>ACTIONS</div>\n";
}

function getHtmlFileAction(temp, temp2, type)
{
  if(type == 0)
  {
    if(document.getElementById("nraction").value != 0)
    {
      for(var i = 0; i < document.getElementById("nraction").value; i++)
      {
        return String("\t\t\t<p><strong><em>" + document.getElementById("monact" + i).value + "</em></strong>. " + (document.getElementById("monactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n");
      }
    }
  }
  else if(type == 1)
    return String("\t\t\t<p><strong><em>" + temp + "</em></strong>. " + (temp2).replace(/\n/g, "<br/>") + "</p>\n");
}

function getHtmlFileLegendHeader(temp, type)
{
  if(type == 0)
  {
    if(document.getElementById("nrlegend").value != 0)
      return "\t\t\t<div class='rub'>LEGENDARY ACTIONS</div>\n\t\t\t<p>" + document.getElementById("mondesclegact").value + "</p>\n";
  }
  else if(type == 1)
    return "\t\t\t<div class='rub'>LEGENDARY ACTIONS</div>\n\t\t\t<p>" + temp + "</p>\n";
}

function getHtmlFileLegend(temp, temp2, type)
{
  if(type == 0)
  {
    if(document.getElementById("nrlegend").value != 0)
    {
      for(var i = 0; i < document.getElementById("nraction").value; i++)
      {
        return String("\t\t\t<p><strong><em>" + document.getElementById("monlegact" + i).value + "</em></strong>. " + (document.getElementById("monlegactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n");
      }
    }
  }
  else if(type == 1)
    return String("\t\t\t<p><strong><em>" + temp + "</em></strong>. " + (temp2).replace(/\n/g, "<br/>") + "</p>\n");
}

function getHtmlFileReactionHeader()
{
  return "\t\t\t<div class='rub'>REACTIONS</div>\n";
}

function getHtmlFileReaction(temp, temp2, type)
{
  if(type == 0)
  {
    if(document.getElementById("nrreaction").value != 0)
    {
      for(var i = 0; i < document.getElementById("nrreaction").value; i++)
      {
        return String("\t\t\t<p><strong><em>" + document.getElementById("monreact" + i).value + "</em></strong>. " + (document.getElementById("monreactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n");
      }
    }
  }
  else if(type == 1)
    return String("\t\t\t<p><strong><em>" + temp + "</em></strong>. " + (temp2).replace(/\n/g, "<br/>") + "</p>\n");
}

function getHtmlFileDescription(temp, type)
{
  var tempString;
  
  if(type == 0)
  {
    if( document.getElementById("mondesc").value != "" )
    {
      tempString = "\t\t<div class='rub'>DESCRIPTION</div>\n";
      tempString += "\t\t<div class='description'>" + (document.getElementById("mondesc").value).replace(/\n/g, "<br/>") + "</div>\n";
    }
    else
      tempString += "\t\t<div class='description'></div>\n";
  }
  else if(type == 1)
  {
    tempString = "\t\t<div class='rub'>DESCRIPTION</div>\n";
    tempString += "\t\t<div class='description'>" + (temp).replace(/\n/g, "<br/>") + "</div>\n";
  }
	
  return tempString;
}

function getHtmlFileImage(temp, type)
{
  if(type == 0)
  {
    if( document.getElementById("monimage").value != "" )
      return String("\t\t<div class='center'><img src='" + document.getElementById("monimage").value + "' alt='image' title='' class='picture' /></div>\n");
  }
  else if(type == 1)
  {
    if(document.getElementById("exporttype").value == "mobile")
      return String("\t\t<div class='center'><img src='" + temp + "' alt='image' title='' class='picture' /></div>\n");
	else
	  return String("\t\t<div class='center'></div>\n");
  }
}

function parseTextAsXml(text, type, curfile, nrfile)
{
  var parser = new DOMParser();
  xmlDom = parser.parseFromString(text, "text/xml");
  
  if(type == 0)
    clearMonster(2);
  else if( (type == 1) && (curfile == 0) )
    ConvertedString = String(getHtmlFileHeader("",1));
	
  var temp, temp2;
  var iCount;
  // Monster name (name)
  temp = xmlDom.getElementsByTagName("name")[0].childNodes[0].nodeValue;
  temp2 = xmlDom.getElementsByTagName("image")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monname").value = temp;
  else if(type == 1)
  {
	if((curfile == 0) && (Number(curfile) == Number(nrfile-1)))
      ConvertedString = String(getHtmlFileTopRight(temp, temp2, 4, ConvertedString));
    if(curfile == 0)
      ConvertedString = String(getHtmlFileTopRight(temp, temp2, 2, ConvertedString));
	else if(Number(curfile) == Number(nrfile-1))
      ConvertedString = String(getHtmlFileTopRight(temp, temp2, 3, ConvertedString));
	else
	  ConvertedString = String(getHtmlFileTopRight(temp, temp2, type, ConvertedString));
	  
    ConvertedString += String(getHtmlFileName(temp, type));
  }
  
  // Monster size (mtype > size)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("size")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monsize").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileSize(temp, type));
	
  // Monster type (mtype > type)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("type")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("montype").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileType(temp, type));
	
  // Monster alignment (mtype > alignment)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("alignment")[0].childNodes[0].nodeValue;
  if(type == 0)
    getAlignment(temp,0);
  else if(type == 1)
    ConvertedString += String(getHtmlFileAlignment(temp, type));
	
  // Monster AC (ac)
  temp = xmlDom.getElementsByTagName("ac")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monac").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAC(temp, type));
  
  // Monster HP (hp)
  temp = xmlDom.getElementsByTagName("hp")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monhp").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileHP(temp, type));
  
  // Monster speed (speed)
  temp = xmlDom.getElementsByTagName("speed")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monspeed").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileSpeed(temp, type));
	
  // Monster Strength (abilities > str)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("str")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monstr").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 0));
  // Monster Dexterity (abilities > dex)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("dex")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("mondex").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 1));
  // Monster Constitution (abilities > con)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("con")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("moncon").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 2));
  // Monster Intelligence (abilities > int)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("int")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monint").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 3));
  // Monster Wisdom (abilities > wis)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("wis")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monwis").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 4));
  // Monster Charisma (abilities > cha)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("cha")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("moncha").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileAbility(temp, type, 5));
  
  // Monster saving throws (st)
  temp = xmlDom.getElementsByTagName("st")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
	  document.getElementById("monst").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileSaves(temp, type));
  }
  
  // Monster skills (skills)
  temp = xmlDom.getElementsByTagName("skills")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monskills").value = temp;
    else if(type == 1)
      ConvertedString += String(getHtmlFileSkills(temp, type));
  }
  
  // Monster damage immunities (damcond > damimmun)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damimmun")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("mondamimmun").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 0));
  }
  // Monster damage resistances (damcond > damresist)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damresist")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("mondamresist").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 1));
  }
  // Monster damage vulnerabilities (damcond > damvuln)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damvuln")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("mondamvuln").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 2));
  }
  // Monster condition immunities (damcond > conimmun)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("conimmun")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monconimmun").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 3));
  }
  // Monster condition resistances (damcond > conresist)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("conresist")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monconresist").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 4));
  }
  // Monster condition vulnerabilities (damcond > convuln)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("convuln")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monconvuln").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileDamCond(temp, type, 5));
  }
  
  // Monster senses (senses)
  temp = xmlDom.getElementsByTagName("senses")[0].childNodes[0].nodeValue;
  if(type == 0)
    document.getElementById("monsenses").value = temp;
  else if(type == 1)
    ConvertedString += String(getHtmlFileSenses(temp, type));
  // Monster languages (lang)
  temp = xmlDom.getElementsByTagName("lang")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monlang").value = temp;
    else if(type == 1)
	  ConvertedString += String(getHtmlFileLanguage(temp, type));
  }
  // Monster challenge rating (cr)
  temp = xmlDom.getElementsByTagName("cr")[0].childNodes[0].nodeValue;
  if(type == 0)
  {
    document.getElementById("moncr").value = temp;
    getXP(temp,0);
  }
  else if(type == 1)
    ConvertedString += String(getHtmlFileCR(temp, type));
	
  // Monster special attacks/actions (special > action)
  iCount = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action").length;
  if(type == 0)
    document.getElementById("nrspecial").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    temp2 = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    
	if(type == 0)
	{
      var divEl = document.createElement('div');
      var titleEl = document.createElement('input');
      titleEl.setAttribute('type', 'text');
      titleEl.setAttribute('id', "monspec" + i);
      titleEl.setAttribute('name', "monspec" + i);
      titleEl.setAttribute('class', "moninputdesc");
      titleEl.setAttribute('value', temp);
      var descEl = document.createElement('textarea');
      descEl.setAttribute('type', 'text');
      descEl.setAttribute('id', "monspecdesc" + i);
      descEl.setAttribute('name', "monspecdesc" + i);
      descEl.setAttribute('class', "montextdesc");
      descEl.value = temp2;
      
      divEl.appendChild(titleEl);
      divEl.appendChild(descEl);
      document.getElementById("specials").appendChild(divEl);
	}
	else if(type == 1)
	  ConvertedString += String(getHtmlFileSpecial(temp, temp2, type));
  }
  
  // Monster actions (actions > action)
  iCount = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action").length;
  if(type == 0)
    document.getElementById("nraction").value = iCount;
  else if(type == 1)
	ConvertedString += String(getHtmlFileActionHeader());
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    temp2 = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    
	if(type == 0)
	{
      var divEl = document.createElement('div');
      var titleEl = document.createElement('input');
      titleEl.setAttribute('type', 'text');
      titleEl.setAttribute('id', "monact" + i);
      titleEl.setAttribute('name', "monact" + i);
      titleEl.setAttribute('class', "moninputdesc");
      titleEl.setAttribute('value', temp);
      var descEl = document.createElement('textarea');
      descEl.setAttribute('type', 'text');
      descEl.setAttribute('id', "monactdesc" + i);
      descEl.setAttribute('name', "monactdesc" + i);
      descEl.setAttribute('class', "montextdesc");
      descEl.value = temp2;
      
      divEl.appendChild(titleEl);
      divEl.appendChild(descEl);
      document.getElementById("actions").appendChild(divEl);
	}
	else if(type == 1)
	  ConvertedString += String(getHtmlFileAction(temp, temp2, type));
  }
  
  // Monster legendary actions (legendactions > action)
  temp = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
  if(type == 0)
  {
    var legendDesc = document.getElementById("mondesclegact");
    legendDesc.setAttribute('class', "montextdesc");
    if(temp != "###")
	  legendDesc.value = temp;
  }
  else if(type == 1)
  {
    if(temp != "###")
	  ConvertedString += String(getHtmlFileLegendHeader(temp, type));
  }
  
  iCount = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action").length;
  if(type == 0)
    document.getElementById("nrlegend").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    temp2 = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    
	if(type == 0)
	{
      var divEl = document.createElement('div');
      var titleEl = document.createElement('input');
      titleEl.setAttribute('type', 'text');
      titleEl.setAttribute('id', "monlegact" + i);
      titleEl.setAttribute('name', "monlegact" + i);
      titleEl.setAttribute('class', "moninputdesc");
      titleEl.setAttribute('value', temp);
      var descEl = document.createElement('textarea');
      descEl.setAttribute('type', 'text');
      descEl.setAttribute('id', "monlegactdesc" + i);
      descEl.setAttribute('name', "monlegactdesc" + i);
      descEl.setAttribute('class', "montextdesc");
      descEl.value = temp2;
      
      divEl.appendChild(titleEl);
      divEl.appendChild(descEl);
      document.getElementById("legendactions").appendChild(divEl);
	}
	else if(type == 1)
	  ConvertedString += String(getHtmlFileLegend(temp, temp2, type));
  }
  
  // Monster reactions (reactions > action)
  iCount = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("action").length;
  if(type == 0)
    document.getElementById("nrreaction").value = iCount;
  else if( (type == 1) && (iCount != 0) )
    ConvertedString += String(getHtmlFileReactionHeader());
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    temp2 = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    
	if(type == 0)
	{
      var divEl = document.createElement('div');
      var titleEl = document.createElement('input');
      titleEl.setAttribute('type', 'text');
      titleEl.setAttribute('id', "monreact" + i);
      titleEl.setAttribute('name', "monreact" + i);
      titleEl.setAttribute('class', "moninputdesc");
      titleEl.setAttribute('value', temp);
      var descEl = document.createElement('textarea');
      descEl.setAttribute('type', 'text');
      descEl.setAttribute('id', "monreactdesc" + i);
      descEl.setAttribute('name', "monreactdesc" + i);
      descEl.setAttribute('class', "montextdesc");
      descEl.value = temp2;
      
      divEl.appendChild(titleEl);
      divEl.appendChild(descEl);
      document.getElementById("reactions").appendChild(divEl);
	}
	else if(type == 1)
	  ConvertedString += String(getHtmlFileReaction(temp, temp2, type));
  }
  
  if(type == 1)
    ConvertedString += String(getHtmlFileMiddle());
  
  // Monster additional description (mondesc)
  temp = xmlDom.getElementsByTagName("mondesc")[0].childNodes[0].nodeValue;
  
  if(type == 0)
  {
    if(temp != "###")
    {
      document.getElementById("mondesc").value = temp;
      document.getElementById("mondesc").setAttribute('class', "montextdesc");
	}
  }
  else if(type == 1)
  {
    if(temp != "###")
	  ConvertedString += String(getHtmlFileDescription(temp, type));
	else
	  ConvertedString += "\t\t<div class='description'></div>\n";
  }
  
  // Monster image (image)
  temp = xmlDom.getElementsByTagName("image")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    if(type == 0)
      document.getElementById("monimage").value = temp;
	else if(type == 1)
	  ConvertedString += String(getHtmlFileImage(temp, type));
  }
  
  if(type == 1)
    ConvertedString += String(getHtmlFileFooter(0));
  
  if(loadError == 0)
  {
    if(type == 0)
	{
	  document.getElementById("result").innerHTML = "Information: Monster info updated!";
	  calcModifier(0,type); calcModifier(1,type); calcModifier(2,type); calcModifier(3,type); calcModifier(4,type); calcModifier(5,type);
	}
    else if( (type == 1) && (Number(curfile) == Number(nrfile-1)) )
	{
          ConvertedString += String(getHtmlFileFooter(1));
          document.getElementById("convertxml").value = ConvertedString;

          // Check for old download links & export name --------
          var outputconvert = $("#convertlink");
          var prevLink = document.querySelector('#convertlink a');
          if(prevLink) {
            window.URL.revokeObjectURL(prevLink.href);
            prevLink.remove();
          }
	  var convertName;
          if(document.getElementById("exporttype").value == "mobile")
            convertName = "all_monsters_small.html";
	  else
            convertName = "all_monsters.html";
          // Check for old download links & export name --------
          
          // Create download link for HTML ---------------------
          var blobConvert = new Blob([ConvertedString], {type: 'text/plain'});
          
          var aConvert = document.createElement('a');
          aConvert.download = convertName;
          aConvert.href = window.URL.createObjectURL(blobConvert);
          aConvert.textContent = "Download converted HTML file of all monsters";
          aConvert.dataset.downloadurl = ['text/plain', aConvert.download, aConvert.href].join(':');
          aConvert.draggable = true;
          aConvert.classList.add('dragout');
          
          outputconvert.append(aConvert);
          
          aConvert.onclick = function(e) {
            aConvert.textContent = "Convert again or change paper size to refresh HTML link";
            aConvert.dataset.disabled = true;
            setTimeout(function() {
              window.URL.revokeObjectURL(aConvert.href);
            }, 1500);
          };
          // Create download link for HTML ---------------------
	}
  }
}

// General functions ----------------------------------------------
function gotoBottom()
{
  window.scrollTo(0,document.body.scrollHeight);
}
function gotoTop()
{
  window.scrollTo(0,0);
}

function changeXP()
{
  getXP(document.getElementById("moncr").value,0)
}

function addSpecial(value)
{
  var currentId;
  
  if( (value == 1) && (document.getElementById("nrspecial").value <= 0) )
    return;
  
  // Add a new special
  if( value == 0 )
  {  
    document.getElementById("nrspecial").value = Number(Number(document.getElementById("nrspecial").value) + 1);
    currentId = document.getElementById("nrspecial").value - 1;
  
    var divEl = document.createElement('div');
    var titleEl = document.createElement('input');
    titleEl.setAttribute('type', 'text');
    titleEl.setAttribute('id', "monspec" + currentId);
    titleEl.setAttribute('name', "monspec" + currentId);
    titleEl.setAttribute('class', "moninputdesc");
    titleEl.setAttribute('value', '');
    var descEl = document.createElement('textarea');
    descEl.setAttribute('type', 'text');
    descEl.setAttribute('id', "monspecdesc" + currentId);
    descEl.setAttribute('name', "monspecdesc" + currentId);
    descEl.setAttribute('class', "montextdesc");
    
    divEl.appendChild(titleEl);
    divEl.appendChild(descEl);
    document.getElementById("specials").appendChild(divEl);
  }
  // Remove one special
  else if( value == 1 )
  {
    currentId = document.getElementById("nrspecial").value;
    document.getElementById("nrspecial").value = Number(Number(document.getElementById("nrspecial").value) - 1);
	
    document.getElementById("specials").removeChild(document.getElementById("specials").getElementsByTagName("div")[currentId]);
  }
}

function addAction(value)
{
  var currentId;
  
  if( (value == 1) && (document.getElementById("nraction").value <= 0) )
    return;
  
  // Add a new action
  if( value == 0 )
  {  
    document.getElementById("nraction").value = Number(Number(document.getElementById("nraction").value) + 1);
    currentId = document.getElementById("nraction").value - 1;
  
    var divEl = document.createElement('div');
    var titleEl = document.createElement('input');
    titleEl.setAttribute('type', 'text');
    titleEl.setAttribute('id', "monact" + currentId);
    titleEl.setAttribute('name', "monact" + currentId);
    titleEl.setAttribute('class', "moninputdesc");
    titleEl.setAttribute('value', '');
    var descEl = document.createElement('textarea');
    descEl.setAttribute('type', 'text');
    descEl.setAttribute('id', "monactdesc" + currentId);
    descEl.setAttribute('name', "monactdesc" + currentId);
    descEl.setAttribute('class', "montextdesc");
    
    divEl.appendChild(titleEl);
    divEl.appendChild(descEl);
    document.getElementById("actions").appendChild(divEl);
  }
  // Remove one action
  else if( value == 1 )
  {
    currentId = document.getElementById("nraction").value;
    document.getElementById("nraction").value = Number(Number(document.getElementById("nraction").value) - 1);
	
    document.getElementById("actions").removeChild(document.getElementById("actions").getElementsByTagName("div")[currentId]);
  }
}

function addLegend(value)
{
  var currentId;
  
  if( (value == 1) && (document.getElementById("nrlegend").value <= 0) )
    return;
  
  // Add a new legend
  if( value == 0 )
  {  
    document.getElementById("nrlegend").value = Number(Number(document.getElementById("nrlegend").value) + 1);
    currentId = document.getElementById("nrlegend").value - 1;
  
    var divEl = document.createElement('div');
    var titleEl = document.createElement('input');
    titleEl.setAttribute('type', 'text');
    titleEl.setAttribute('id', "monlegact" + currentId);
    titleEl.setAttribute('name', "monlegact" + currentId);
    titleEl.setAttribute('class', "moninputdesc");
    titleEl.setAttribute('value', '');
    var descEl = document.createElement('textarea');
    descEl.setAttribute('type', 'text');
    descEl.setAttribute('id', "monlegactdesc" + currentId);
    descEl.setAttribute('name', "monlegactdesc" + currentId);
    descEl.setAttribute('class', "montextdesc");
    
    divEl.appendChild(titleEl);
    divEl.appendChild(descEl);
    document.getElementById("legendactions").appendChild(divEl);
  }
  // Remove one legend
  else if( value == 1 )
  {
    currentId = document.getElementById("nrlegend").value;
    document.getElementById("nrlegend").value = Number(Number(document.getElementById("nrlegend").value) - 1);
	
    document.getElementById("legendactions").removeChild(document.getElementById("legendactions").getElementsByTagName("div")[currentId]);
  }
}

function addReaction(value)
{
  var currentId;
  
  if( (value == 1) && (document.getElementById("nrreaction").value <= 0) )
    return;
  
  // Add a new reaction
  if( value == 0 )
  {  
    document.getElementById("nrreaction").value = Number(Number(document.getElementById("nrreaction").value) + 1);
    currentId = document.getElementById("nrreaction").value - 1;
  
    var divEl = document.createElement('div');
    var titleEl = document.createElement('input');
    titleEl.setAttribute('type', 'text');
    titleEl.setAttribute('id', "monreact" + currentId);
    titleEl.setAttribute('name', "monreact" + currentId);
    titleEl.setAttribute('class', "moninputdesc");
    titleEl.setAttribute('value', '');
    var descEl = document.createElement('textarea');
    descEl.setAttribute('type', 'text');
    descEl.setAttribute('id', "monreactdesc" + currentId);
    descEl.setAttribute('name', "monreactdesc" + currentId);
    descEl.setAttribute('class', "montextdesc");
    
    divEl.appendChild(titleEl);
    divEl.appendChild(descEl);
    document.getElementById("reactions").appendChild(divEl);
  }
  // Remove one reaction
  else if( value == 1 )
  {
    currentId = document.getElementById("nrreaction").value;
    document.getElementById("nrreaction").value = Number(Number(document.getElementById("nrreaction").value) - 1);
	
    document.getElementById("reactions").removeChild(document.getElementById("reactions").getElementsByTagName("div")[currentId]);
  }
}

function startingValues()
{
  document.getElementById("nrspecial").value = 0;
  document.getElementById("nraction").value = 0;
  document.getElementById("nrlegend").value = 0;
  document.getElementById("nrreaction").value = 0;
  getXP(document.getElementById("moncr").value,0);
}

function clearMonster(value)
{
  var iCount;
  
  // completely clear the monster to starting values
  if( (value == 0) || (value == 2) )
  {
    document.getElementById("monname").value = "";
    document.getElementById("monsize").value = "tiny";
    document.getElementById("montype").value = "aberration";
    getAlignment("lawful good",0);
    document.getElementById("monac").value = "";
    document.getElementById("monhp").value = "";
    document.getElementById("monspeed").value = "";
    document.getElementById("monstr").value = "";
    document.getElementById("mondex").value = "";
    document.getElementById("moncon").value = "";
    document.getElementById("monint").value = "";
    document.getElementById("monwis").value = "";
    document.getElementById("moncha").value = "";
    document.getElementById("monst").value = "";
    document.getElementById("monskills").value = "";
    document.getElementById("mondamimmun").value = "";
    document.getElementById("mondamresist").value = "";
    document.getElementById("mondamvuln").value = "";
    document.getElementById("monconimmun").value = "";
    document.getElementById("monconresist").value = "";
    document.getElementById("monconvuln").value = "";
    document.getElementById("monsenses").value = "";
    document.getElementById("monlang").value = "";
    document.getElementById("moncr").value = 0;
    getXP(0,0);
    iCount = document.getElementById("nrspecial").value;
    for(var i = 1; i <= iCount; i++)
      addSpecial(1);
    document.getElementById("nrspecial").value = 0;
    iCount = document.getElementById("nraction").value;
    for(var i = 1; i <= iCount; i++)
      addAction(1);
    document.getElementById("nraction").value = 0;
    document.getElementById("mondesclegact").value = "";
    iCount = document.getElementById("nrlegend").value;
    for(var i = 1; i <= iCount; i++)
      addLegend(1);
    document.getElementById("nrlegend").value = 0;
    iCount = document.getElementById("nrreaction").value;
    for(var i = 1; i <= iCount; i++)
      addReaction(1);
    document.getElementById("nrreaction").value = 0;
    document.getElementById("mondesc").value = "";
    document.getElementById("mondesc").setAttribute('class', "montextdesc");
    document.getElementById("monimage").value = "";
	
    document.getElementById("savexml").value = "";
    document.getElementById("savehtml").value = "";
    if(value == 0)
      document.getElementById("files").value = null;
	
    calcModifier(0,0); calcModifier(1,0); calcModifier(2,0); calcModifier(3,0); calcModifier(4,0); calcModifier(5,0);

    document.getElementById("result").innerHTML = "Information:";
  }
  // clear the monster and fill with commoner values
  else if(value == 1)
  {
    document.getElementById("monname").value = "Commoner";
    document.getElementById("monsize").value = "medium";
    document.getElementById("montype").value = "humanoid";
    getAlignment("any alignment",0);
    document.getElementById("monac").value = "10";
    document.getElementById("monhp").value = "4 (1d8)";
    document.getElementById("monspeed").value = "30 ft.";
    document.getElementById("monstr").value = "10";
    document.getElementById("mondex").value = "10";
    document.getElementById("moncon").value = "10";
    document.getElementById("monint").value = "10";
    document.getElementById("monwis").value = "10";
    document.getElementById("moncha").value = "10";
    document.getElementById("monst").value = "";
    document.getElementById("monskills").value = "";
    document.getElementById("mondamimmun").value = "";
    document.getElementById("mondamresist").value = "";
    document.getElementById("mondamvuln").value = "";
    document.getElementById("monconimmun").value = "";
    document.getElementById("monconresist").value = "";
    document.getElementById("monconvuln").value = "";
    document.getElementById("monsenses").value = "passive Perception 10";
    document.getElementById("monlang").value = "any one language";
    document.getElementById("moncr").value = 0;
    getXP(0,0);
    iCount = document.getElementById("nrspecial").value;
    for(var i = 1; i <= iCount; i++)
      addSpecial(1);
    document.getElementById("nrspecial").value = 0;
    iCount = document.getElementById("nraction").value;
    for(var i = 1; i <= iCount; i++)
      addAction(1);
    addAction(0);
    document.getElementById("monact0").value = "Club";
    document.getElementById("monactdesc0").value = "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.";
    document.getElementById("mondesclegact").value = "";
    iCount = document.getElementById("nrlegend").value;
    for(var i = 1; i <= iCount; i++)
      addLegend(1);
    document.getElementById("nrlegend").value = 0;
    iCount = document.getElementById("nrreaction").value;
    for(var i = 1; i <= iCount; i++)
      addReaction(1);
    document.getElementById("nrreaction").value = 0;
    document.getElementById("mondesc").value = "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans and hermits.";
    document.getElementById("mondesc").setAttribute('class', "montextdesc");
    document.getElementById("monimage").value = "";
	
    document.getElementById("savexml").value = "";
    document.getElementById("savehtml").value = "";
    document.getElementById("files").value = null;
	
    calcModifier(0,0); calcModifier(1,0); calcModifier(2,0); calcModifier(3,0); calcModifier(4,0); calcModifier(5,0);

    document.getElementById("result").innerHTML = "Information: Monster info updated with Commoner stats!";
  }
  else
  {
    document.getElementById("result").innerHTML = "Information: Unknown clear type.";
    loadError = 1;
  }
}

function getAlignment(input, dir)
{
  if(dir == 0)
  {
    if(input == "lawful good")
      document.getElementById("monalign").value = "lg";
    else if(input == "neutral good")
      document.getElementById("monalign").value = "ng";
    else if(input == "chaotic good")
      document.getElementById("monalign").value = "cg";
    else if(input == "lawful neutral")
      document.getElementById("monalign").value = "ln";
    else if(input == "neutral")
      document.getElementById("monalign").value = "nn";
    else if(input == "chaotic neutral")
      document.getElementById("monalign").value = "cn";
    else if(input == "lawful evil")
      document.getElementById("monalign").value = "le";
    else if(input == "neutral evil")
      document.getElementById("monalign").value = "ne";
    else if(input == "chaotic evil")
      document.getElementById("monalign").value = "ce";
    else if(input == "unaligned")
      document.getElementById("monalign").value = input;
    else if(input == "any alignment")
      document.getElementById("monalign").value = "any";
    else
    {
      document.getElementById("result").innerHTML = "Information: Unrecognized alignment!";
      loadError = 1;
    }
  }
  else if(dir == 1)
  {
    var output;
    if(input == "lg")
      output = "lawful good";
    else if(input == "ng")
      output = "neutral good";
    else if(input == "cg")
      output = "chaotic good";
    else if(input == "ln")
      output = "lawful neutral";
    else if(input == "nn")
      output = "neutral";
    else if(input == "cn")
      output = "chaotic neutral";
    else if(input == "le")
      output = "lawful evil";
    else if(input == "ne")
      output = "neutral evil";
    else if(input == "ce")
      output = "chaotic evil";
    else if(input == "unaligned")
      output = "unaligned";
    else if(input == "any")
      output = "any alignment";
    else
    {
      document.getElementById("result").innerHTML = "Information: Unrecognized alignment!";
      loadError = 1;
    }
	  
    return output;
  }
}

function getXP(value, type)
{
  if(type == 0)
  {
    if(value == "0")
      document.getElementById("monxp").value = "0 or 10 XP";
    else if(value == "1/8")
      document.getElementById("monxp").value = "25 XP";
    else if(value == "1/4")
      document.getElementById("monxp").value = "50 XP";
    else if(value == "1/2")
      document.getElementById("monxp").value = "100 XP";
    else if(value == "1")
      document.getElementById("monxp").value = "200 XP";
    else if(value == "2")
      document.getElementById("monxp").value = "450 XP";
    else if(value == "3")
      document.getElementById("monxp").value = "700 XP";
    else if(value == "4")
      document.getElementById("monxp").value = "1,100 XP";
    else if(value == "5")
      document.getElementById("monxp").value = "1,800 XP";
    else if(value == "6")
      document.getElementById("monxp").value = "2,300 XP";
    else if(value == "7")
      document.getElementById("monxp").value = "2,900 XP";
    else if(value == "8")
      document.getElementById("monxp").value = "3,900 XP";
    else if(value == "9")
      document.getElementById("monxp").value = "5,000 XP";
    else if(value == "10")
      document.getElementById("monxp").value = "5,900 XP";
    else if(value == "11")
      document.getElementById("monxp").value = "7,200 XP";
    else if(value == "12")
      document.getElementById("monxp").value = "8,400 XP";
    else if(value == "13")
      document.getElementById("monxp").value = "10,000 XP";
    else if(value == "14")
      document.getElementById("monxp").value = "11,500 XP";
    else if(value == "15")
      document.getElementById("monxp").value = "13,000 XP";
    else if(value == "16")
      document.getElementById("monxp").value = "15,000 XP";
    else if(value == "17")
      document.getElementById("monxp").value = "18,000 XP";
    else if(value == "18")
      document.getElementById("monxp").value = "20,000 XP";
    else if(value == "19")
      document.getElementById("monxp").value = "22,000 XP";
    else if(value == "20")
      document.getElementById("monxp").value = "25,000 XP";
    else if(value == "21")
      document.getElementById("monxp").value = "33,000 XP";
    else if(value == "22")
      document.getElementById("monxp").value = "41,000 XP";
    else if(value == "23")
      document.getElementById("monxp").value = "50,000 XP";
    else if(value == "24")
      document.getElementById("monxp").value = "62,000 XP";
    else if(value == "25")
      document.getElementById("monxp").value = "75,000 XP";
    else if(value == "26")
      document.getElementById("monxp").value = "90,000 XP";
    else if(value == "27")
      document.getElementById("monxp").value = "105,000 XP";
    else if(value == "28")
      document.getElementById("monxp").value = "120,000 XP";
    else if(value == "29")
      document.getElementById("monxp").value = "135,000 XP";
    else if(value == "30")
      document.getElementById("monxp").value = "155,000 XP";
    else
    {
      document.getElementById("result").innerHTML = "Information: Unrecognized challenge rating!";
      loadError = 1;
    }
  }
  else if(type == 1)
  {
    if(value == "0")
      return "0 or 10 XP";
    else if(value == "1/8")
      return "25 XP";
    else if(value == "1/4")
      return "50 XP";
    else if(value == "1/2")
      return "100 XP";
    else if(value == "1")
      return "200 XP";
    else if(value == "2")
      return "450 XP";
    else if(value == "3")
      return "700 XP";
    else if(value == "4")
      return "1,100 XP";
    else if(value == "5")
      return "1,800 XP";
    else if(value == "6")
      return "2,300 XP";
    else if(value == "7")
      return "2,900 XP";
    else if(value == "8")
      return "3,900 XP";
    else if(value == "9")
      return "5,000 XP";
    else if(value == "10")
      return "5,900 XP";
    else if(value == "11")
      return "7,200 XP";
    else if(value == "12")
      return "8,400 XP";
    else if(value == "13")
      return "10,000 XP";
    else if(value == "14")
      return "11,500 XP";
    else if(value == "15")
      return "13,000 XP";
    else if(value == "16")
      return "15,000 XP";
    else if(value == "17")
      return "18,000 XP";
    else if(value == "18")
      return "20,000 XP";
    else if(value == "19")
      return "22,000 XP";
    else if(value == "20")
      return "25,000 XP";
    else if(value == "21")
      return "33,000 XP";
    else if(value == "22")
      return "41,000 XP";
    else if(value == "23")
      return "50,000 XP";
    else if(value == "24")
      return "62,000 XP";
    else if(value == "25")
      return "75,000 XP";
    else if(value == "26")
      return "90,000 XP";
    else if(value == "27")
      return "105,000 XP";
    else if(value == "28")
      return "120,000 XP";
    else if(value == "29")
      return "135,000 XP";
    else if(value == "30")
      return "155,000 XP";
  }
}

function calcModifier(value, type)
{
  var ability;
  
  if(value == 0) ability = "monstr";
  else if(value == 1) ability = "mondex";
  else if(value == 2) ability = "moncon";
  else if(value == 3) ability = "monint";
  else if(value == 4) ability = "monwis";
  else if(value == 5) ability = "moncha";
  else ability = "monstr";

  if( (document.getElementById(ability).value == 0) && (type == 0) )
    document.getElementById(ability + "mod").innerHTML = "";
  else
  {
	if(type == 0)
	{
      var curnr = Number(Number(document.getElementById(ability).value) - 10);
      curnr = Math.floor(curnr/2.);
      if(curnr < 0)
        document.getElementById(ability + "mod").innerHTML = "(" + curnr + ")";
      else
        document.getElementById(ability + "mod").innerHTML = "(+" + curnr + ")";
	}
	else if(type == 1)
	{
      var curnr = Number(Number(value) - 10);
      curnr = Math.floor(curnr/2.);
      if(curnr < 0)
        return String("(" + curnr + ")");
      else
        return String("(+" + curnr + ")");
	}
  }
}

function exportMonster()
{  
  if(document.getElementById("monname").value == "")
  {
    document.getElementById("result").innerHTML = "Information: Could not create XML and HTML files, because monster name is not defined!";
    gotoTop();
    loadError = 1;
    return;
  }

  // Check for old download links & export name --------
  var outputxml = $("#xmllink");
  var outputhtml = $("#htmllink");
  var prevLink = document.querySelector('#xmllink a');
  if(prevLink) {
    window.URL.revokeObjectURL(prevLink.href);
    prevLink.remove();
  }
  prevLink = document.querySelector('#htmllink a');
  if(prevLink) {
    window.URL.revokeObjectURL(prevLink.href);
    prevLink.remove();
  }
  var baseExportName = document.getElementById("monname").value;
  baseExportName = baseExportName.toLowerCase();
  baseExportName = baseExportName.replace(/[)]/g,'');
  baseExportName = baseExportName.replace(/ [(]/g,'_');
  baseExportName = baseExportName.replace(/[(]/g,'_');
  baseExportName = baseExportName.replace(/ /g,'-');
  var xmlExportName = baseExportName + ".xml";
  var htmlExportName = baseExportName + ".html";
  // Check for old download links & export name --------
  
  // Prepare the XML -----------------------------------
  var xmlString, htmlString;
  
  xmlString = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?>\n";
  // Name
  xmlString += "<monster>\n\t<name>" + document.getElementById("monname").value + "</name>\n";
//alert("Name written");  

  // Size, type and alignment
  xmlString += "\t<mtype>\n\t\t<size>" + document.getElementById("monsize").value + "</size>\n\t\t<type>" + document.getElementById("montype").value + "</type>\n\t\t<alignment>" + getAlignment(document.getElementById("monalign").value,1) + "</alignment>\n\t</mtype>\n";
//alert("Size, type and alignment written");  
  
  // AC, HP, speed
  if( document.getElementById("monac").value == "" ) xmlString += "\t<ac>###</ac>\n";
  else xmlString += "\t<ac>" + document.getElementById("monac").value + "</ac>\n";
  if( document.getElementById("monhp").value == "" ) xmlString += "\t<hp>###</hp>\n";
  else xmlString += "\t<hp>" + document.getElementById("monhp").value + "</hp>\n";
  if( document.getElementById("monspeed").value == "" ) xmlString += "\t<speed>###</speed>\n";
  else xmlString += "\t<speed>" + document.getElementById("monspeed").value + "</speed>\n";
//alert("AC, HP and speed written");  
  
  // Abilities
  xmlString += "\t<abilities>\n\t\t<str>" + document.getElementById("monstr").value + "</str>\n\t\t<dex>" + document.getElementById("mondex").value + "</dex>\n\t\t<con>" + document.getElementById("moncon").value + "</con>\n\t\t<int>" + document.getElementById("monint").value + "</int>\n\t\t<wis>" + document.getElementById("monwis").value + "</wis>\n\t\t<cha>" + document.getElementById("moncha").value + "</cha>\n\t</abilities>\n";
//alert("Abilities written");  
  
  // Saving throws and skills
  if( document.getElementById("monst").value == "" ) xmlString += "\t<st>###</st>\n";
  else xmlString += "\t<st>" + document.getElementById("monst").value + "</st>\n";
  if( document.getElementById("monskills").value == "" ) xmlString += "\t<skills>###</skills>\n";
  else xmlString += "\t<skills>" + document.getElementById("monskills").value + "</skills>\n";
//alert("ST and skills written");  
  
  // Damage and conditions
  xmlString += "\t<damcond>\n";
  if( document.getElementById("mondamimmun").value == "" ) xmlString += "\t\t<damimmun>###</damimmun>\n";
  else xmlString += "\t\t<damimmun>" + document.getElementById("mondamimmun").value + "</damimmun>\n";
  
  if( document.getElementById("mondamresist").value == "" ) xmlString += "\t\t<damresist>###</damresist>\n";
  else xmlString += "\t\t<damresist>" + document.getElementById("mondamresist").value + "</damresist>\n";
  
  if( document.getElementById("mondamvuln").value == "" ) xmlString += "\t\t<damvuln>###</damvuln>\n";
  else xmlString += "\t\t<damvuln>" + document.getElementById("mondamvuln").value + "</damvuln>\n";
  
  if( document.getElementById("monconimmun").value == "" ) xmlString += "\t\t<conimmun>###</conimmun>\n";
  else xmlString += "\t\t<conimmun>" + document.getElementById("monconimmun").value + "</conimmun>\n";
  
  if( document.getElementById("monconresist").value == "" ) xmlString += "\t\t<conresist>###</conresist>\n";
  else xmlString += "\t\t<conresist>" + document.getElementById("monconresist").value + "</conresist>\n";
  
  if( document.getElementById("monconvuln").value == "" ) xmlString += "\t\t<convuln>###</convuln>\n";
  else xmlString += "\t\t<convuln>" + document.getElementById("monconvuln").value + "</convuln>\n";
  xmlString += "\t</damcond>\n";
//alert("Damage and conditions written");  
  
  // Senses, languages and CR
  if( document.getElementById("monsenses").value == "" ) xmlString += "\t<senses>###</senses>\n";
  else xmlString += "\t<senses>" + document.getElementById("monsenses").value + "</senses>\n";
  if( document.getElementById("monlang").value == "" ) xmlString += "\t<lang>###</lang>\n";
  else xmlString += "\t<lang>" + document.getElementById("monlang").value + "</lang>\n";
  xmlString += "\t<cr>" + document.getElementById("moncr").value + "</cr>\n";
//alert("Senses, languages and CR written");  
  
  // Special attacks/actions
  xmlString += "\t<special>\n";
  for(var i = 0; i < document.getElementById("nrspecial").value; i++)
  {
    xmlString += "\t\t<action>\n\t\t\t<title>" + document.getElementById("monspec" + i).value + "</title>\n\t\t\t<desc>" + document.getElementById("monspecdesc" + i).value + "</desc>\n\t\t</action>\n";
  }
  xmlString += "\t</special>\n";
//alert("Specials written");  
  
  // Actions
  xmlString += "\t<actions>\n";
  for(var i = 0; i < document.getElementById("nraction").value; i++)
  {
    xmlString += "\t\t<action>\n\t\t\t<title>" + document.getElementById("monact" + i).value + "</title>\n\t\t\t<desc>" + document.getElementById("monactdesc" + i).value + "</desc>\n\t\t</action>\n";
  }
  xmlString += "\t</actions>\n";
//alert("Actions written");  
  
  // Legendary actions
  if( document.getElementById("mondesclegact").value == "" ) xmlString += "\t<legendactions>\n\t\t<desc>###</desc>\n";
  else xmlString += "\t<legendactions>\n\t\t<desc>" + document.getElementById("mondesclegact").value + "</desc>\n";
  for(var i = 0; i < document.getElementById("nrlegend").value; i++)
  {
    xmlString += "\t\t<action>\n\t\t\t<title>" + document.getElementById("monlegact" + i).value + "</title>\n\t\t\t<desc>" + document.getElementById("monlegactdesc" + i).value + "</desc>\n\t\t</action>\n";
  }
  xmlString += "\t</legendactions>\n";
//alert("Legends written");  
  
  // Rections
  xmlString += "\t<reactions>\n";
  for(var i = 0; i < document.getElementById("nrreaction").value; i++)
  {
    xmlString += "\t\t<action>\n\t\t\t<title>" + document.getElementById("monreact" + i).value + "</title>\n\t\t\t<desc>" + document.getElementById("monreactdesc" + i).value + "</desc>\n\t\t</action>\n";
  }
  xmlString += "\t</reactions>\n";
//alert("Reactions written");  
  
  // Additional description and image
  if( document.getElementById("mondesc").value == "" ) xmlString += "\t<mondesc>###</mondesc>\n";
  else xmlString += "\t<mondesc>" + document.getElementById("mondesc").value + "</mondesc>\n";
  if( document.getElementById("monimage").value == "" ) xmlString += "\t<image>###</image>\n";
  else xmlString += "\t<image>" + document.getElementById("monimage").value + "</image>\n";
//alert("Description and image written");  
  
  xmlString += "</monster>";
  
  document.getElementById("savexml").value = xmlString;
  // Prepare the XML -----------------------------------
  
  // Create download link for XML ----------------------
  var blobXml = new Blob([xmlString], {type: 'text/plain'});

  var aXml = document.createElement('a');
  aXml.download = xmlExportName;
  aXml.href = window.URL.createObjectURL(blobXml);
  aXml.textContent = "Download XML file";
  aXml.dataset.downloadurl = ['text/plain', aXml.download, aXml.href].join(':');
  aXml.draggable = true;
  aXml.classList.add('dragout');

  outputxml.append(aXml);

  aXml.onclick = function(e) {
    aXml.textContent = "Export monster to refresh XML link";
    aXml.dataset.disabled = true;
    setTimeout(function() {
      window.URL.revokeObjectURL(aXml.href);
    }, 1500);
  };
  // Create download link for XML ----------------------

  // Prepare the HTML ----------------------------------
  htmlString = "<!doctype html>\n<html>\n<head>\n\t<meta charset='utf-8'>\n\t<meta name='viewport' content='initial-scale=1'>\n\t<title>" + document.getElementById("monname").value + " &raquo; Dungeons &amp; Dragons - D&amp;D 5</title>\n<style>\n";
  htmlString += "html {font-size:62.5%;}\nbody {padding:0; margin:0; background:white url(\"../images/fond.jpg\") repeat;}\n.titre1 {font-size:2.4rem; text-align:center; padding:20px 10px 10px 10px; font-weight:bold;}\n.titre2 {font-size:1.8rem; text-align:center; padding:10px 10px 0px 10px;}\n.titre3 {font-size:1.4rem; text-align:center; padding: 5px 10px 20px 10px; margin:0 33% 10px 33%; border-bottom:2px solid black;}\n.bloc {width:33%; min-width:400px; padding:15px; margin:0; box-sizing:border-box; font-family: Georgia, \"Times New Roman\", serif; font-size:1.2rem; line-height:140%; text-align:left; Page-Break-Inside:avoid}\n.bloc table {margin:8px 0 0 0; padding:0; }\n.bloc table th {font-weight:bold; font-size:1.0rem; vertical-align:bottom; border-bottom:1px solid black}\n.bloc table td {min-width:25px; font-size:1.0rem; }\n.sansSerif {line-height:140%; font-family: arial, sans-serif; font-size:1.2rem; }\n.nom {padding:0; text-transform:uppercase; letter-spacing:1px; color:#6D0000; font-size:1.6rem; font-weight:bold; }\n.nom:first-letter {font-size:2.4rem;}\n.trad {float:right; margin:2px 0 2px 0; font-family: verdana, arial, sans-serif; font-size:1.2rem;}\n.trad a:link, .trad a:hover, .trad a:visited {color:#B30303; font-weight:normal;}\n.niveau {padding:2px 0 8px 0;}\n.type {padding:2px 0 2px 0;}\n.carac {display:inline-block; padding-left:15px; text-align:center}\n.description {padding:8px 0 8px 0; text-align:justify;}\n.red {color:#6D0000;}\n.rub {color:#6D0000; margin:10px 0 5px 0; border-bottom:1px solid #B30303; font-size:1.4rem; text-transform:uppercase; font-weight:bold;}\n.rub:first-letter {font-size:1.6rem;}\n.source {padding:8px 0 4px 0; text-align:left; letter-spacing:-1px; font-family: verdana, arial, sans-serif; font-size:1.0rem;}\np {padding:0; margin:3px 0 3px 0;}\n.center {text-align:center;}\n.petit {font-size:1.1rem;}\n.trespetit {font-size:1.0rem;}\ntable.carac {margin:0}\ntable.carac td	{padding:0 15px 0 0; font-size:1.2rem;}\nimg.picture {max-width:95%; border:4px solid #888; text-align:center;}\ndiv img.sep-monster {margin:3px 0 3px 0; width=90%; height=4px;}\ndiv svg {width:100%; height:5px;}\ndiv .variant {background-color:#DBE2C2; border-top:4px solid #404040; border-bottom:4px solid #404040; padding:10px; margin:10px 0 0 0;}\n.colG {display:inline-block; width:47%; margin:20px 1% 0 2%; vertical-align: top;}\n.colD {display:inline-block; width:47%; margin:20px 2% 0 1%; vertical-align: top;}\n.colG .bloc {width:100%;}\n.colD .bloc {width:100%;}\n.niveauSort {width:50%; font-size:1.8rem; font-weight:bold; text-align:center; background-color:white; color:black; border:3px solid black; padding:5px; margin:1% 25% 0 25%;}\nimg.poison {float:right; border:0px; margin:0 0 5px 10px}\n.erreur {font-weight:bold; color:red;}\n.gras {font-weight:bold;}\n.gris {background-color:#333333; color:#BBBBBB;}\n.blanc {background-color:#FFFFFF; color:#000000; font-weight:bold;}\ntable.rencontre	td {font-size:1.2rem; }\ntable.resultat {border:1px solid black; border-collapse:separate; border-spacing:0;}\ntable.resultat td {font-size:1.2rem; width:80px; text-align:center; padding:6px;}\n.bloc input {font-size:18px; padding:4px;}\n.bloc input.grise {color:#888}\n.bloc input:focus {color:#000}\n.bloc .output {font-size:42px; line-height:1.2; padding:10px;}\n.bloc select {font-size:14px; padding:4px;}\n@media print {\n\thtml {font-size:50%;}\n\t.bloc {width:100%; min-width:200px; padding:2%;}\n\t.sansSerif {line-height:130%;}\n\t.petit {line-height:120%;}\n\t.trespetit {line-height:110%;}\n}\n@media only screen and (max-device-width:980px) {\n\thtml {font-size:87.5%;}\n\t.colG {width:100%; margin:20px 0 0 0;}\n\t.colD {width:100%; margin:20px 0 0 0;}\n\t.bloc {width:100%;}\n\t.trad {float:none; padding-left:0px;}\n}\n";
  htmlString += "</style>\n</head>\n<body>\n\t<div class='bloc'>\n\t\t<div class='trad'> [ " + document.getElementById("monname").value + " ] </div>\n";
  
  // Name
  htmlString += "\t\t<div class='nom'>" + document.getElementById("monname").value + "</div>\n";
  htmlString += "\t\t<div class='sansSerif'>\n";

  // Size, type and alignment
  htmlString += "\t\t\t<div class='type'><em>" + document.getElementById("monsize").value + " " + document.getElementById("montype").value + ", " + getAlignment(document.getElementById("monalign").value,1) + "</em></div>\n";
  htmlString += "\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n\t\t\t<div class='red'>\n";
  
  // AC, HP, speed
  htmlString += "\t\t\t\t<strong>Armor Class</strong> " + document.getElementById("monac").value + "\n\t\t\t\t<br />\n";
  htmlString += "\t\t\t\t<strong>Hit Points</strong> " + document.getElementById("monhp").value + "\n\t\t\t\t<br />\n";
  htmlString += "\t\t\t\t<strong>Speed</strong> " + document.getElementById("monspeed").value + "\n";
  htmlString += "\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  
  // Abilities
  htmlString += "\t\t\t\t<div class='carac'><strong>STR</strong><br />" + document.getElementById("monstr").value + " " + document.getElementById("monstrmod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div class='carac'><strong>DEX</strong><br />" + document.getElementById("mondex").value + " " + document.getElementById("mondexmod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div class='carac'><strong>CON</strong><br />" + document.getElementById("moncon").value + " " + document.getElementById("monconmod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div class='carac'><strong>INT</strong><br />" + document.getElementById("monint").value + " " + document.getElementById("monintmod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div class='carac'><strong>WIS</strong><br />" + document.getElementById("monwis").value + " " + document.getElementById("monwismod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div class='carac'><strong>CHA</strong><br />" + document.getElementById("moncha").value + " " + document.getElementById("monchamod").innerHTML + "</div>\n";
  htmlString += "\t\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  
  // Saving throws and skills
  if( document.getElementById("monst").value != "" )
    htmlString += "\t\t\t\t<strong>Saving Throws</strong> " + document.getElementById("monst").value + "<br />\n";
  if( document.getElementById("monskills").value != "" )
    htmlString += "\t\t\t\t<strong>Skills</strong> " + document.getElementById("monskills").value + "<br />\n";
	
  // Damage and conditions
  if( document.getElementById("mondamimmun").value != "" )
    htmlString += "\t\t\t\t<strong>Damage Immunities</strong> " + document.getElementById("mondamimmun").value + "<br />\n";
  if( document.getElementById("mondamresist").value != "" )
    htmlString += "\t\t\t\t<strong>Damage Resistances</strong> " + document.getElementById("mondamresist").value + "<br />\n";
  if( document.getElementById("mondamvuln").value != "" )
    htmlString += "\t\t\t\t<strong>Damage Vulnerabilities</strong> " + document.getElementById("mondamvuln").value + "<br />\n";
  if( document.getElementById("monconimmun").value != "" )
    htmlString += "\t\t\t\t<strong>Condition Immunities</strong> " + document.getElementById("monconimmun").value + "<br />\n";
  if( document.getElementById("monconresist").value != "" )
    htmlString += "\t\t\t\t<strong>Condition Resistances</strong> " + document.getElementById("monconresist").value + "<br />\n";
  if( document.getElementById("monconvuln").value != "" )
    htmlString += "\t\t\t\t<strong>Condition Vulnerabilities</strong> " + document.getElementById("monconvuln").value + "<br />\n";
	
  // Senses, languages and CR
  if( document.getElementById("monsenses").value != "" )
    htmlString += "\t\t\t\t<strong>Senses</strong> " + document.getElementById("monsenses").value + "<br />\n";
  if( document.getElementById("monlang").value != "" )
    htmlString += "\t\t\t\t<strong>Languages</strong> " + document.getElementById("monlang").value + "<br />\n";
  if( document.getElementById("moncr").value != "" )
    htmlString += "\t\t\t\t<strong>Challenge</strong> " + document.getElementById("moncr").value + " (" + document.getElementById("monxp").value + ")\n";
  htmlString += "\t\t\t</div>\n";
  htmlString += "\t\t\t<div><svg><polyline points='0,0 360,2.5 0,5' style='fill:#922610;stroke:#922610;'></polyline></svg></div>\n";
  
  // Special attacks/actions
  if(document.getElementById("nrspecial").value != 0)
  {
    for(var i = 0; i < document.getElementById("nrspecial").value; i++)
    {
      htmlString += "\t\t\t<p><strong><em>" + document.getElementById("monspec" + i).value + "</em></strong>. " + (document.getElementById("monspecdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n";
    }
  }
  
  // Actions
  htmlString += "\t\t\t<div class='rub'>ACTIONS</div>\n";
  if(document.getElementById("nraction").value != 0)
  {
    for(var i = 0; i < document.getElementById("nraction").value; i++)
    {
      htmlString += "\t\t\t<p><strong><em>" + document.getElementById("monact" + i).value + "</em></strong>. " + (document.getElementById("monactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n";
    }
  }
  
  // Legendary actions
  if(document.getElementById("nrlegend").value != 0)
  {
    htmlString += "\t\t\t<div class='rub'>LEGENDARY ACTIONS</div>\n";
    htmlString += "\t\t\t<p>" + document.getElementById("mondesclegact").value + "</p>\n";
  
    for(var i = 0; i < document.getElementById("nrlegend").value; i++)
    {
      htmlString += "\t\t\t<p><strong><em>" + document.getElementById("monlegact" + i).value + "</em></strong>. " + (document.getElementById("monlegactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n";
    }
  }
  
  // Reactions
  if(document.getElementById("nrreaction").value != 0)
  {
    htmlString += "\t\t\t<div class='rub'>REACTIONS</div>\n";
    for(var i = 0; i < document.getElementById("nrreaction").value; i++)
    {
      htmlString += "\t\t\t<p><strong><em>" + document.getElementById("monreact" + i).value + "</em></strong>. " + (document.getElementById("monreactdesc" + i).value).replace(/\n/g, "<br/>") + "</p>\n";
    }
  }
  
  htmlString += "\t\t</div>\n"
  
  // Additional description and image
  if( document.getElementById("mondesc").value != "" )
  {
    htmlString += "\t\t<div class='rub'>DESCRIPTION</div>\n";
    htmlString += "\t\t<div class='description'>" + (document.getElementById("mondesc").value).replace(/\n/g, "<br/>") + "</div>\n";
  }
  else
    htmlString += "\t\t<div class='description'></div>\n";
//  htmlString += "\t\t<div class='source'>Source : System Reference Document / <a href='http://www.aidedd.org/regles/bestiaire/liste/?l=1'>Creatures</a></div>\n";
  
  if( document.getElementById("monimage").value != "" )
    htmlString += "\t\t<div class='center'><img src='" + document.getElementById("monimage").value + "' alt='image' title='' class='picture' /></div>\n";
  
  htmlString += "\t</div>\n</body>\n</html>";

  document.getElementById("savehtml").value = htmlString;
  // Prepare the HTML ----------------------------------
  
  // Create download link for HTML ---------------------
  var blobHtml = new Blob([htmlString], {type: 'text/plain'});

  var aHtml = document.createElement('a');
  aHtml.download = htmlExportName;
  aHtml.href = window.URL.createObjectURL(blobHtml);
  aHtml.textContent = "Download HTML file";
  aHtml.dataset.downloadurl = ['text/plain', aHtml.download, aHtml.href].join(':');
  aHtml.draggable = true;
  aHtml.classList.add('dragout');

  outputhtml.append(aHtml);

  aHtml.onclick = function(e) {
    aHtml.textContent = "Export monster to refresh HTML link";
    aHtml.dataset.disabled = true;
    setTimeout(function() {
      window.URL.revokeObjectURL(aHtml.href);
    }, 1500);
  };
  // Create download link for HTML ---------------------
}

function showHtml()
{
  if( document.getElementById("savehtml").value != "" )
  {
    var htmlString = document.getElementById("savehtml").value;
    var imgString;

    if( document.getElementById("monimage").value != "" )
    {
      imgString = document.getElementById("monimage").value;
      htmlString = htmlString.replace(imgString.substring(2), "saved_monsters/" + imgString.substring(2));
    }

    var myWindow = window.open("", "_blank", "resizable=yes,titlebar=yes,fullscreen=yes,menubar=yes,toolbar=yes,scrollbars=yes,status=yes",false);
    myWindow.document.write(htmlString);
  }
}

function showConvert()
{
  if( document.getElementById("convertxml").value != "" )
  {
    var htmlString = document.getElementById("convertxml").value;
    var imgString;

    htmlString = htmlString.replace(/image\//g, "saved_monsters/image/");

    var myWindow = window.open("", "_blank", "resizable=yes,titlebar=yes,fullscreen=yes,menubar=yes,toolbar=yes,scrollbars=yes,status=yes",false);
    myWindow.document.write(htmlString);
  }
}

// XML file parser functions --------------------------------------
function waitForTextReadComplete(reader, type, curfile, nrfile)
{
  reader.onloadend = function(event)
  {
    var text = event.target.result;
	if(type === "files")
          parseTextAsXml(text, 0, curfile, nrfile);
	else if(type === "convertFiles")
	  parseTextAsXml(text, 1, curfile, nrfile);
	else
	  alert("Error, incorrect file opening.");
  }
}

function handleFileSelect(button)
{
  for(var i = 0; i < button.files.length; i++)
  {
    var file = button.files[i];
    reader = new FileReader();
    waitForTextReadComplete(reader, button.id, i, button.files.length);
    reader.readAsText(file);
  }
}

// Listener and initial functions ---------------------------------
$(document).ready(function() {
  startingValues();
  clearMonster(0);

  document.getElementById('files').addEventListener('change', function() { handleFileSelect(this); });
  
  document.getElementById('convertFiles').addEventListener('change', function() { handleFileSelect(this); });
  
  document.getElementById('exporttype').addEventListener('change', function() { handleFileSelect(document.getElementById('convertFiles')) });
});
