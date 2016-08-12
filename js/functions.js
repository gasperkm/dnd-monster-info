// functions.js

//var iRows = 4;
//var iCols = 100;
var loadError = 0;

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
//    descEl.setAttribute('rows', iRows);
//    descEl.setAttribute('cols', iCols);
    
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
//    descEl.setAttribute('rows', iRows);
//    descEl.setAttribute('cols', iCols);
    
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
//    descEl.setAttribute('rows', iRows);
//    descEl.setAttribute('cols', iCols);
    
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
//    descEl.setAttribute('rows', iRows);
//    descEl.setAttribute('cols', iCols);
    
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
	  document.getElementById("specials").removeChild(document.getElementById("specials").getElementsByTagName("div")[1]);
    document.getElementById("nrspecial").value = 0;
    iCount = document.getElementById("nraction").value;
    for(var i = 1; i <= iCount; i++)
	  document.getElementById("actions").removeChild(document.getElementById("actions").getElementsByTagName("div")[1]);
    document.getElementById("nraction").value = 0;
    document.getElementById("mondesclegact").value = "";
    iCount = document.getElementById("nrlegend").value;
    for(var i = 1; i <= iCount; i++)
	  document.getElementById("legendactions").removeChild(document.getElementById("legendactions").getElementsByTagName("div")[1]);
    document.getElementById("nrlegend").value = 0;
    iCount = document.getElementById("nrreaction").value;
    for(var i = 1; i <= iCount; i++)
	  document.getElementById("reactions").removeChild(document.getElementById("reactions").getElementsByTagName("div")[1]);
    document.getElementById("nrreaction").value = 0;
    document.getElementById("mondesc").value = "";
//	document.getElementById("mondesc").setAttribute('rows', iRows);
//	document.getElementById("mondesc").setAttribute('cols', iCols);
    document.getElementById("mondesc").setAttribute('class', "montextdesc");
    document.getElementById("monimage").value = "";
	
	document.getElementById("savexml").value = "";
	if(value == 0)
	  document.getElementById("files").value = null;
	
	calcModifier(0); calcModifier(1); calcModifier(2); calcModifier(3); calcModifier(4); calcModifier(5);
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
	  document.getElementById("specials").removeChild(document.getElementById("specials").getElementsByTagName("div")[1]);
    document.getElementById("nrspecial").value = 0;
	iCount = document.getElementById("nraction").value;
    document.getElementById("nraction").value = 0;
	if(iCount > 0)
	  for(var i = 1; i <= iCount; i++)
	    document.getElementById("actions").removeChild(document.getElementById("actions").getElementsByTagName("div")[1]);
	addAction(0);
	document.getElementById("monact0").value = "Club";
	document.getElementById("monactdesc0").value = "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.";
    document.getElementById("mondesclegact").value = "";
    iCount = document.getElementById("nrlegend").value;
    for(var i = 1; i <= iCount; i++)
	  document.getElementById("legendactions").removeChild(document.getElementById("legendactions").getElementsByTagName("div")[1]);
    document.getElementById("nrlegend").value = 0;
    iCount = document.getElementById("nrreaction").value;
    for(var i = 1; i <= iCount; i++)
	  document.getElementById("reactions").removeChild(document.getElementById("reactions").getElementsByTagName("div")[1]);
    document.getElementById("nrreaction").value = 0;
    document.getElementById("mondesc").value = "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans and hermits.";
//	document.getElementById("mondesc").setAttribute('rows', iRows);
//	document.getElementById("mondesc").setAttribute('cols', iCols);
    document.getElementById("mondesc").setAttribute('class', "montextdesc");
    document.getElementById("monimage").value = "";
	
	document.getElementById("savexml").value = "";
	document.getElementById("files").value = null;
	
	calcModifier(0); calcModifier(1); calcModifier(2); calcModifier(3); calcModifier(4); calcModifier(5);
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

function getXP(value, dir)
{
  if(dir == 0)
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
}

function calcModifier(value)
{
  var ability;
  if(value == 0) ability = "monstr";
  else if(value == 1) ability = "mondex";
  else if(value == 2) ability = "moncon";
  else if(value == 3) ability = "monint";
  else if(value == 4) ability = "monwis";
  else if(value == 5) ability = "moncha";

  if(document.getElementById(ability).value == 0)
    document.getElementById(ability + "mod").innerHTML = "";
  else
  {
    var curnr = Number(Number(document.getElementById(ability).value) - 10);
    curnr = Math.floor(curnr/2.);
    if(curnr < 0)
      document.getElementById(ability + "mod").innerHTML = "(" + curnr + ")";
    else
      document.getElementById(ability + "mod").innerHTML = "(+" + curnr + ")";
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
  
  // Prepare the HTML ----------------------------------
//  htmlString = "<!doctype html>\n<html>\n<head>\n\t<meta charset='utf-8'>\n\t<meta name='viewport' content='initial-scale=1'>\n\t<link href='style/style.css' rel='stylesheet' type='text/css' />\n\t<title>" + document.getElementById("monname").value + " &raquo; Dungeons &amp; Dragons - D&amp;D 5</title>\n</head>\n<body>\n\t<div class='bloc'>\n\t\t<div class='trad'> [ <a href=''>" + document.getElementById("monname").value + "</a> ] </div>\n";
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
  htmlString += "\t\t<div class='source'>Source : System Reference Document / <a href='http://www.aidedd.org/regles/bestiaire/liste/?l=1'>Creatures</a></div>\n";
  
  if( document.getElementById("monimage").value != "" )
    htmlString += "\t\t<div class='center'><img src='" + document.getElementById("monimage").value + "' alt='image' title='' class='picture' /></div>\n";
  
  htmlString += "\t</div>\n</body>\n</html>";

  var myWindow = window.open("", "_blank", "resizable=yes,titlebar=yes,fullscreen=yes,menubar=yes,toolbar=yes,scrollbars=yes,status=yes",false);
  myWindow.document.write(htmlString);
  // Prepare the HTML ----------------------------------
}

function parseTextAsXml(text)
{
  var parser = new DOMParser();
  xmlDom = parser.parseFromString(text, "text/xml");
//  alert(text);
  clearMonster(2);

  var temp, temp2;
  var iCount;
  // Monster name (name)
  temp = xmlDom.getElementsByTagName("name")[0].childNodes[0].nodeValue;
  document.getElementById("monname").value = temp;
  
  // Monster size (mtype > size)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("size")[0].childNodes[0].nodeValue;
  document.getElementById("monsize").value = temp;
  // Monster type (mtype > type)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("type")[0].childNodes[0].nodeValue;
  document.getElementById("montype").value = temp;
  // Monster alignment (mtype > alignment)
  temp = xmlDom.getElementsByTagName("mtype")[0].getElementsByTagName("alignment")[0].childNodes[0].nodeValue;
  getAlignment(temp,0);
  
  // Monster AC (ac)
  temp = xmlDom.getElementsByTagName("ac")[0].childNodes[0].nodeValue;
  document.getElementById("monac").value = temp;
  // Monster HP (hp)
  temp = xmlDom.getElementsByTagName("hp")[0].childNodes[0].nodeValue;
  document.getElementById("monhp").value = temp;
  // Monster speed (speed)
  temp = xmlDom.getElementsByTagName("speed")[0].childNodes[0].nodeValue;
  document.getElementById("monspeed").value = temp;
  
  // Monster Strength (abilities > str)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("str")[0].childNodes[0].nodeValue;
  document.getElementById("monstr").value = temp;
  // Monster Dexterity (abilities > dex)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("dex")[0].childNodes[0].nodeValue;
  document.getElementById("mondex").value = temp;
  // Monster Constitution (abilities > con)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("con")[0].childNodes[0].nodeValue;
  document.getElementById("moncon").value = temp;
  // Monster Intelligence (abilities > int)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("int")[0].childNodes[0].nodeValue;
  document.getElementById("monint").value = temp;
  // Monster Wisdom (abilities > wis)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("wis")[0].childNodes[0].nodeValue;
  document.getElementById("monwis").value = temp;
  // Monster Charisma (abilities > cha)
  temp = xmlDom.getElementsByTagName("abilities")[0].getElementsByTagName("cha")[0].childNodes[0].nodeValue;
  document.getElementById("moncha").value = temp;
  
  // Monster saving throws (st)
  temp = xmlDom.getElementsByTagName("st")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monst").value = temp;
  // Monster skills (skills)
  temp = xmlDom.getElementsByTagName("skills")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monskills").value = temp;
  
  // Monster damage immunities (damcond > damimmun)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damimmun")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("mondamimmun").value = temp;
  // Monster damage resistances (damcond > damresist)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damresist")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("mondamresist").value = temp;
  // Monster damage vulnerabilities (damcond > damvuln)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("damvuln")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("mondamvuln").value = temp;
  // Monster condition immunities (damcond > conimmun)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("conimmun")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monconimmun").value = temp;
  // Monster condition resistances (damcond > conresist)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("conresist")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monconresist").value = temp;
  // Monster condition vulnerabilities (damcond > convuln)
  temp = xmlDom.getElementsByTagName("damcond")[0].getElementsByTagName("convuln")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monconvuln").value = temp;
  
  // Monster senses (senses)
  temp = xmlDom.getElementsByTagName("senses")[0].childNodes[0].nodeValue;
  document.getElementById("monsenses").value = temp;
  // Monster languages (lang)
  temp = xmlDom.getElementsByTagName("lang")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monlang").value = temp;
  // Monster challenge rating (cr)
  temp = xmlDom.getElementsByTagName("cr")[0].childNodes[0].nodeValue;
  document.getElementById("moncr").value = temp;
  getXP(temp,0);
  
  // Monster special attacks/actions (special > action)
  iCount = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action").length;
  document.getElementById("nrspecial").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	temp2 = xmlDom.getElementsByTagName("special")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
	
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
//	descEl.setAttribute('rows', iRows);
//	descEl.setAttribute('cols', iCols);
	descEl.value = temp2;
	
	divEl.appendChild(titleEl);
	divEl.appendChild(descEl);
	document.getElementById("specials").appendChild(divEl);
  }
  
  // Monster actions (actions > action)
  iCount = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action").length;
  document.getElementById("nraction").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	temp2 = xmlDom.getElementsByTagName("actions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
	
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
//	descEl.setAttribute('rows', iRows);
//	descEl.setAttribute('cols', iCols);
	descEl.value = temp2;
	
	divEl.appendChild(titleEl);
	divEl.appendChild(descEl);
	document.getElementById("actions").appendChild(divEl);
  }
  
  // Monster legendary actions (legendactions > action)
  temp = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
  var legendDesc = document.getElementById("mondesclegact");
  legendDesc.setAttribute('class', "montextdesc");
//  legendDesc.setAttribute('rows', iRows);
//  legendDesc.setAttribute('cols', iCols);
  if(temp != "###") legendDesc.value = temp;
  
  iCount = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action").length;
  document.getElementById("nrlegend").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	temp2 = xmlDom.getElementsByTagName("legendactions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
	
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
//	descEl.setAttribute('rows', iRows);
//	descEl.setAttribute('cols', iCols);
	descEl.value = temp2;
	
	divEl.appendChild(titleEl);
	divEl.appendChild(descEl);
	document.getElementById("legendactions").appendChild(divEl);
  }
  
  // Monster reactions (reactions > action)
  iCount = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("reaction").length;
  document.getElementById("nrreaction").value = iCount;
  for(var i = 0; i < iCount; i++)
  {
    temp = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("action")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	temp2 = xmlDom.getElementsByTagName("reactions")[0].getElementsByTagName("action")[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
	
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
//	descEl.setAttribute('rows', iRows);
//	descEl.setAttribute('cols', iCols);
	descEl.value = temp2;
	
	divEl.appendChild(titleEl);
	divEl.appendChild(descEl);
	document.getElementById("reactions").appendChild(divEl);
  }
  
  // Monster additional description (mondesc)
  temp = xmlDom.getElementsByTagName("mondesc")[0].childNodes[0].nodeValue;
  if(temp != "###")
  {
    document.getElementById("mondesc").value = temp;
    document.getElementById("mondesc").setAttribute('class', "montextdesc");
//	document.getElementById("mondesc").setAttribute('rows', iRows);
//	document.getElementById("mondesc").setAttribute('cols', iCols);
  }
  
  // Monster image (image)
  temp = xmlDom.getElementsByTagName("image")[0].childNodes[0].nodeValue;
  if(temp != "###") document.getElementById("monimage").value = temp;
  
  if(loadError == 0)
    document.getElementById("result").innerHTML = "Information: Monster info updated!";
	
  calcModifier(0); calcModifier(1); calcModifier(2); calcModifier(3); calcModifier(4); calcModifier(5);
}

function waitForTextReadComplete(reader)
{
  reader.onloadend = function(event)
  {
    var text = event.target.result;
	parseTextAsXml(text);
  }
}

function handleFileSelect()
{
  var file = document.getElementById("files").files[0];
  reader = new FileReader();
  waitForTextReadComplete(reader);
  reader.readAsText(file);
}

$(document).ready(function() {
  startingValues();
  clearMonster(0);
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
});