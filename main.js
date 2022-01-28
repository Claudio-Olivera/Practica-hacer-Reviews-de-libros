const reviews = [
    {
        id: 0,
        name: "misery",
        precio: "Precio: 14.20 €",
        img: "misery.jpg",
        text: "Si hablamos de los mejores personajes femeninos de Stephen King, el nombre Annie Wilkes definitivamente tiene que surgir. Misery es la historia del escritor Paul Sheldon (uno de los muchos dobles de King que pueblan sus obras) que tiene la desgracia de conocer a Wilkes, su mayor fan. Lo retiene como rehén y le obliga a escribir sus libros a su gusto. Las adaptaciones cinematográficas de las obras de King pueden ser irregulares, pero la versión cinematográfica protagonizada por Kathy Bates es tan clásica como la novela que la inspiró."
    },

    {
        id: 1,
        name: "el misterio de salems lot",
        precio: "Precio: 9.45 €",
        img: "el misterio de salems lot.jpg",
        text: "No hay nada mejor que una extensa novela de King sobre una ciudad tomada por un terror profano, y El misterio de Salem's Lot es la primera del autor. En este caso, el monstruo es un antiguo vampiro que decide convertir lentamente a los habitantes de la ciudad de Jerusalems Lot en su ejército de no muertos. La única razón por la que esta historia no está más arriba en esta lista es que muchos de los protagonistas se han convertido en figuras recurrentes en la obra de King, como el escritor problemático, el buen doctor, el valiente y a la vez totalmente inofensivo ingenuo, o el sensible adolescente"
    },

    {
        id: 2,
        name: "dolores claibone",
        precio: "Precio: 9.40 €",
        img: "dolores clairborne.jpg",
        text: "Esta quizás no es para todos los fans de King, ya que la novela toma la forma de un monólogo de 300 páginas entregado por su personaje principal sin una sola interrupción en forma de capítulos, y presenta sólo fragmentos de temas sobrenaturales. Es un retrato de Dolores, una anciana de clase trabajadora de Maine que es acusada de matar a su jefe aún más anciano. En el camino, conocemos los detalles de cómo sobrevivió a un matrimonio con abusos y a las indignidades de su vida laboral. Los primeros clásicos de King estaban llenos de demasiadas heroínas bonitas, pasivas y esencialmente intercambiables como Frannie Goldsmith, Susan Norton y Sue Snell, por lo que Dolores Claiborne es un reajuste fantástico."
    },

    {
        id: 3,
        name: "el umbral de la noche",
        precio: "Precio: 9.50 €",
        img: "el umbral de la noche.jpg",
        text: "Algunos de los mejores trabajos de King son sus cuentos cortos, pero hacer listas es una labor complicada, y si sólo puedes leer una de sus muchas colecciones de cuentos, debería ser ésta. Entre lo más destacado: Jerusalem's Lot, un excelente homenaje a la obra de H.P. Lovecraft que también sirve de precuela a la novela de King El misterio de Salems Lot, La fosa común, que cuenta la historia de los trabajadores de una fábrica textil que se tienen que enfrentar a una serie de ratas mutantes cada vez más terroríficas, y El último peldaño de la escalera, una historia desgarradora de una tranquila confusión familiar que no tiene ningún elemento sobrenatural."
    },

    {
        id: 4,
        name: "Cementerio de animales",
        precio: "Precio: 9.80 €",
        img: "cementerio de animales.jpg",
        text: "Este libro no tiene una trama particularmente complicada o personajes desarrollados, pero sí tiene sustos y de los buenos. Cementerio de animales cuenta la historia de la familia Creed, recién llegados al Maine rural, mientras descubren los misterios de un antiguo cementerio utilizado durante mucho tiempo como lugar de descanso para las mascotas difuntas de los niños locales. Pero los animales no suelen descansar allí durante mucho tiempo, y resulta que el cementerio en cuestión tiene determinados efectos en esas criaturas. Como King memorablemente señaló, a veces la muerte es mejor."
    
    },

    {
        id: 5,
        name: "christine",
        precio: "Precio: 10.80 €",
        img: "christine.jpg",
        text: "Esta es otra obra de King subestimada sin razón, ya que por desgracia su premisa se puede resumir con el muy manido lema de libro sobre coches malditos. Pero Christine es mucho más que eso. En Arnie Cunningham, el lamentable adolescente intimidado que se deja embelesar por el Plymouth Fury de 1958, King creó un villano que está a la altura de Carrie White y Jack Torrance. Y mientras que sí, el malhechor central es un automóvil autónomo, Christine también sirve como un símbolo de todas las ansiedades que los jóvenes tienen que afrontar durante su proceso de madurez"
    },

    {
        id: 6,
        name: "el instituto",
        precio: "Precio: 22.80 €",
        img: "el instituto.jpg",
        text: "King tiene ahora setenta años, pero aún está en su mejor momento cuando escribe sobre niños. Por supuesto, algunas de las referencias de la cultura pop parecen metidas con calzador para probar que todavía está con los jóvenes, pero continúa clavando la curiosidad esencial, la inseguridad y el optimismo de la infancia. En esta novela, el instituto que da título al libro es un sitio oscuro que alberga y experimenta con niños psíquicos, niños que tienen un poco de ese resplandor, se podría decir. Es una de las mejores obras de King en años."
    },
    
    {
        id: 7,
        name: "la tienda",
        precio: "Precio: 12.29 €",
        img: "la tienda.jpg",
        text:"Esta no es la novela más apreciada que King ha escrito, pero tal vez sea hora de que la última gran obra ambientada en la ciudad ficticia de Castle Rock reciba una reevaluación crítica. La tienda cuenta la historia de una nueva tienda que abre en la somnolienta ciudad y que vende a los clientes los deseos de sus corazones, por un precio muy alto. King es hábil para entrelazar diversas historias de una comunidad, y esa habilidad está más nítida que nunca aquí. Y aunque la fuente de los horrores en sus historias puede inclinarse a menudo hacia cosas más que hacia personas (una casa nebulosamente embrujada, un coche malvado, un cementerio maldito) el comerciante Leland Gaunt está definitivamente entre los cinco mejores villanos de King, y definitivamente no es el número cinco."
    },

    {
        id: 8,
        name: "carrie",
        precio: "Precio: 12.29 €",
        img: "carrie.jpg",
        text:"Con su primera novela, King pintó un inmoral cuadro de los horrores de la escuela secundaria y creó,una inolvidable víctima-villana en la pobre y aterradora Carrie White. Como la mayoría de los escritores a comienzos de sus carreras, King todavía estaba trabajando en su estilo propio, que en este caso hizo que ocasionalmente se produjeran algunos momentos algo torpes y una excesiva confianza en sus característicos paréntesis. Aún así, un clásico es un clásico."   
    }


];

//select items

const img = document.getElementById("book-img");
const name = document.getElementById("book-name");
const precio = document.getElementById("precio");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
//seteo el primero, con 0 por el array
let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function(){
    showBook();
});

//mostrar basado en item
function showBook(){
    const item = reviews[currentItem];
    img.src = item.img;
    nombre.textContent= item.name;
    precio.textContent= item.precio;
    info.textContent= item.text;
}

// mostrar proximo libro
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length - 1){
        currentItem = 0;
    }
    showBook();
});

//mostrar anterior libro
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showBook();
});

//random libro

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    console.log(currentItem);
    showBook();
});
