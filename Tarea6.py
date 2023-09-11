
def calcular_promedio(A):
    if len(A) == 0:
        return 0
    suma = sum(A)
    promedio = suma / len(A)
    return promedio
A = [8, 8,8 ,8 ,8 ]
resultado = calcular_promedio(A)
print("El promedio de los elementos en el arreglo es:", resultado)
