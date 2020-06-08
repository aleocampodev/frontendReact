This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cuestionario

## 1.¿Porque no debería usar la libreria JQuery, si estoy usando ReactJS?

No es conveniente usar Jquery con React, ya que Jquery hace cambios directos en el  DOM por ende React no los tomara, ocasionando inconsistencia en lo que se muestra en pantalla y lo que se encuentra en memoria(Lugar donde esta el estado de sus componentes y se ejecutan las modificaciones ). No tiene sentido usar una librería cuyas características ya las esta cubriendo React.

## 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?

Los hooks  nos permiten crear componentes funcionales , este tipo de componentes contribuyen a generar un código más simple, por ende  no se verá complejo ni extenso. Ademas, loos hooks nos permiten reusar código entre componentes.

## 3.¿Que es un archivo JSX?

Es una extensión de javascript la cual permite representar los elementos de React que se usaran en una sintaxis similar a HTML.

## 4.¿Que diferencia hay entre una function y una arrow function de Javascript?

La diferencia entre ambos esta en el contexto de this , mientras que función , this se refiere al contexto de dicha función , en el caso de un arrow function , this  hace referencia al contexto que envuelve esa función.

## 5.¿Que es Redux y cómo nos ayuda en los proyectos?

Redux es una librería  para manejar un estado global ,esto nos permite centralizar un estado para que pueda ser manejado por varios componentes , independientemente de su jerarquía y de esa manera evitar el “prop drilling”.

## 6.¿Que nos permite hacer la siguiente declaración?

## const anyFunction = (param_1) => (param_2) => param_1 + p

La siguiente declaración es una función curry , la cual  permite componer funciones anidadas. Este patron funcional se utiliza bastante para componentes de alto nivel .



## Installacion

Instalar dependencias:
```bash
npm install
```

Comando para desplegar en produccion:
```bash
npm run build
```
Comando para ejcutar la web localmente:
```bash
npm run dev
```


