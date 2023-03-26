'''Criar um algoritmo que receba vários números inteiros e positivos e imprima a média dos números múltiplos de 3. A execução deve encerrar quando um número não positivos for lido.'''

numero = 0
conjunto_numeros = []

while(numero >= 0):
    print('Digite um número positivo inteiro, caso queira parar o programa digite um negativo :)')
    try:
        numero = int(input('Digite um número: '))
        if(numero % 3 == 0 and numero >= 0):
            conjunto_numeros.append(numero)
            print(numero)
    except:
        print('Digite um número por favor')
try:
    soma = 0
    for i in conjunto_numeros:
        soma = soma + i

    print('\033[34mOs números multiplos de 3 foram: \033[m', conjunto_numeros)
    print(f"\033[32mA média deles ficou em {soma/len(conjunto_numeros)}\033[m")

except:
    print('\033[31mNão foi possível calcular, pois a lista de números está vazia\033[m')


