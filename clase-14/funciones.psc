Proceso Calculadora
	Definir a Como Real
	Definir b Como Real
	Definir operacion Como Caracter
	
	Escribir "Por favor ingrese el primer numero"
	Leer a
	
	Escribir "Por favor ingrese el segundo numero"
	Leer b
	
	Escribir "Por favor ingrese la operacion x, /, -, +"
	Leer operacion
	
	Segun operacion Hacer
		"+":
			Escribir "El resultado es = " Suma(a,b)
		"-":
			Escribir "El resultado es = " Resta(a,b)
		"/":
			Escribir "El resultado es = " Dividir(a,b)
		"*":
			Escribir "El resultado es = " Multiplicar(a,b)
		De Otro Modo:
			Escribir "Por favor ingrese un operador valido"
	Fin Segun
FinProceso

Funcion suma_retorno = Suma(a,b)
	suma_retorno = a + b
FinFuncion

Funcion restar_retorno = Resta(a,b)
	restar_retorno = a - b
FinFuncion

Funcion dividir_retorno = Dividir(a,b)
	dividir_retorno = a / b
FinFuncion

Funcion multiplicar_retorno = Multiplicar(a,b)
	multiplicar_retorno = a * b
FinFuncion