# Condicional IF ELSE
edad_juan = 70
edad_min = 18
# Si la condicion es Verdadera, entrara al IF, caso contrario entrara al ELSE
# if edad_juan > edad_min:
#     print('Puedes entrar al tono')
# else:
#     print('Anda a jugar play')

# elif sinosi y siempre va antes del else y se usa generalmente en vez del switch case

# Si juan tiene mas de 65 no puede ingresar al tono 
# if edad_juan > edad_min and edad_juan < 65:
#     print('Puedes entrar al tono')
# elif edad_juan >= 65:
#     print('Muy mayor para entrar')
# else:
#     print('Anda a jugar play')

# Ingresar un numero y ver si es mayor a cero, si es cero o si es menor a cero
# numero = input('Ingrese un numero')
# numero = int(numero)
# numero = int(input('Ingrese un numero'))
# if numero > 0:
#     print('El numero es positivo')
# elif numero == 0:
#     print('El numero es cero')
# else:
#     print('El numero es negativo')

# if numero < 0 :
#     print('El numero es NEGATIVO')
# elif numero > 0:
#     print ('El numero es POSITIVO')
# else:
#     print('El numero es CERO')


# ver si un numero ingresado por teclado es PAR O IMPAR
# numero=int(input('ingrese un numero'))
# if (numero%2==0):
#     print('Numero PAR')
# else:
#     print('Numero IMPAR')

# for 
# es usado para iterar sobre una secuencia de elementos
# nombre = 'Eduardo Ramiro'
# for letra in nombre:
#     print(letra, end='')

# for iteracion in range(0,10,1):
#     print(iteracion)
# en el for personalizado se puede utilizar de 1 a 3 parametros en el range, si usamos solo uno; ese era el tope y partira de 0 y con un incremento de 1.
# si usamos dos parametros, el primero sera el inicio o el piso, el segundo el tope y con un incremento de 1
# si usamos tres parametros,el primero sera el inicio o el piso, el segundo el tope y el tercero el incremento

# dentro del for se puede usar el break para cerrar el bucle
# for i in range(10):
#     print(i)
#     if i == 6:
#         break

# parar la iteraccion actual CONTINUE
# for i in range(20):
#     if i== 10:
#         continue
#     print(i)


# while => es un bucle que se va a realizar de manera infinita mientras que la condicion sea verdadera
# numero = 10
# tope = 30
# while(numero< tope):
#     print(numero)
    # numero += 1

# pass => pasa la iteracion y no hace nada pero el beneficio es que no emite un error de bloque de identacion
numeros = [1,2,3,4,5]
for numero in numeros:
    pass
print('adios')


# Ingresar su nombre y que diga cuantas vocales hay 
