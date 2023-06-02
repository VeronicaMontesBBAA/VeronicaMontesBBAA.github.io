var mover_movil;
var modo_evitar=false;

function includeBox(area1, area2) {
	// comprueba si area1 está incluida en area2
	// variables del primer objeto
	var X1Min = area1.X-(area1.Width/2.0);
	var Y1Min = area1.Y-(area1.Height/2.0);
	var X1Max =X1Min+ area1.Width;
	var Y1Max = Y1Min + area1.Height;
	// variables del segundo objeto
	var X2Min = area2.X-(area2.Width/2);
	var Y2Min = area2.Y-(area2.Height/2);
	var X2Max = X2Min + area2.Width;
	var Y2Max = Y2Min + area2.Height;

 	// comparación horizontal de las dos esquinas
	var condX = (X1Min >= X2Min) &&  (X1Max <= X2Max);
 	// comparación vertical de las dos esquinas
	var condY = (Y1Min >= Y2Min) &&  (Y1Max <= Y2Max);
	
	// si se cumplen ambas condiciones, está dentro
	if (condX && condY){
		return true;}
	else{
		return false;}
}


function intersectanBoxes(area1, area2) {
	// comprueba si area1 se superpone area2
	// variables del primer objeto
	var X1Min = area1.X-(area1.Width/2.0);
	var Y1Min = area1.Y-(area1.Height/2.0);
	var X1Max =X1Min+ area1.Width;
	var Y1Max = Y1Min + area1.Height;
	// variables del segundo objeto
	var X2Min = area2.X-(area2.Width/2);
	var Y2Min = area2.Y-(area2.Height/2);
	var X2Max = X2Min + area2.Width;
	var Y2Max = Y2Min + area2.Height;

 	// comparación horizontal de las dos esquinas
	var condX = (X1Min>= X2Min) &&  (X1Min <= X2Max);
	condX = condX || ((X1Max >= X2Min) &&  (X1Max <= X2Max));
 	// comparación vertical de las dos esquinas
	var condY = (Y1Min >= Y2Min) &&  (Y1Min <= Y2Max);
	condY = condY || ((Y1Max >= Y2Min) &&  (Y1Max <= Y2Max));
	// si se cumplen alguna de la condiciones, intersecta

	if (condX && condY){
		return true;}
	else{
		return false;}
}




function centraBoxes(area1, area2) {
	// mueve el area1 para que quede en el centro de area2
	area1.X=area2.X;
	area1.Y=area2.Y;
}


