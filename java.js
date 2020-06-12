const datapokemones = POKEMON.pokemon;  
console.log(datapokemones);

function mostrarpokemon(anyArray){
        let poke = document.getElementById("poke");
        poke.innerHTML=`
        
        ${anyArray.map(pokemones =>`<div>
        
        <img src="${pokemones.img}" alt="imagenes de pokemones">
        <p>${pokemones.name}</p>

        </div>
        
        `)}
        
        
        `;
}
mostrarpokemon(datapokemones);

// buscador//

 const pokemoninput = document.getElementById("buscar-pokemon");


 function filtrar(anyArray, key, condicion){
     
    return anyArray.filter(item=> item[key].includes(condicion));
    
     
 };
 


     
 pokemoninput.addEventListener("input",(e)=>{
     
     mostrarpokemon(filtrar(datapokemones,"name",pokemoninput.value.charAt(0).toUpperCase() + pokemoninput.value.slice(1)));

 })
//filtrando datos de pokemos segun su tipo

const orderType = document.getElementById("order-type");
orderType.addEventListener("change",()=>{
    const filtrado =  filtrar(datapokemones,"type",orderType.value);
    mostrarpokemon(filtrado);
});