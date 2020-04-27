//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=10; timeIni=10; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="¡Bien hecho!"; messageTime="¡Ups, terminó el tiempo!"; messageError="¡Oh oh, revisa tus respuestas!"; messageErrorG="¡Oh oh, revisa tus respuestas!"; messageAttempts="¡Ups, ya no hay mas intentos!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QTM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","TQ","VQ","Uw","Qw","VQ","TA","Tw","Uw","","",""],["","","","Rw","TA","VQ","VA","RQ","Tw","Uw","","",""],["","","","","VA","RQ","Tg","RA","Tw","Tg","RQ","Uw",""],["","","","RA","Tw","Ug","Uw","QQ","TA","","","",""],["","Qg","SQ","Qw","RQ","UA","Uw","","","","","",""],["","","QQ","Qg","RA","Tw","TQ","SQ","Tg","QQ","TA","RQ","Uw"]];
var x1=[3,4,5,4,2,3];
var y1=[1,2,3,4,5,6];
var x2=[10,10,12,9,7,13];
var y2=[1,2,3,4,5,6];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Órganos del cuerpo humano que nos permite realizar ejercicios con fuerza","Musculo que se ubica en la parte superior del muslo","Tejido que une los músculos y los huesos","Musculo que se ubica en la cara posterior e inferior del dorso","Musculo del brazo","Músculos situados entre la cara superior del tórax y la cara superior de la pelvis"];
var colNum=13;
var rowNum=6;
