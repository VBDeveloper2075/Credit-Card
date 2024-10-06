Aplicación de Máscara de Entrada
Este script/componente JavaScript proporciona una funcionalidad de máscara de entrada para tres campos de un formulario: número de tarjeta, fecha y CVV. Las máscaras de entrada ayudan a guiar a los usuarios sobre el formato requerido de la entrada.

El script selecciona los campos de entrada mediante sus identificadores y asigna un controlador de eventos keydown a cada uno. Cuando se presiona una tecla en uno de estos campos, se ejecuta la función handleInput.

La función handleInput toma tres argumentos: una máscara, una tecla y un array. La máscara es una cadena de texto que define el formato de la entrada. La tecla es el carácter ingresado por el usuario. El array almacena los caracteres ingresados hasta ahora.

Si la tecla presionada es 'Backspace' y el array tiene al menos un elemento, se elimina el último elemento del array. Si la tecla presionada es un número y la longitud del array es menor o igual a la longitud de la máscara, se agrega la tecla al array. Si el carácter en la posición actual de la máscara es un guión o una barra, también se agrega este carácter al array.

Finalmente, se actualiza el valor del campo de entrada con los caracteres en el array, unidos en una cadena de texto. Esto proporciona una retroalimentación visual en tiempo real al usuario sobre el formato de la entrada.