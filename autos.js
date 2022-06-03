class Auto {
    constructor(id, marca, modelo) {
      this.id = id;
      this.modelo = modelo;
      this.marca = marca;
    }
  }
  
  const auto1 = new Auto(1, "Buick", "2022");
  const auto2 = new Auto(2, "Dodge", "2015");
  const auto3 = new Auto(3, "Ferrari", "2007");
  const auto4 = new Auto(4, "Ford", "2012");
  const auto5 = new Auto(5, "Chevy", "2009");
  const auto6 = new Auto(6, "Range Rover", "2020");
  
  const autos = [auto1, auto2, auto3, auto4, auto5, auto6];
  console.log("Autos", autos);
  inicializarAplicacion();
  crearMenu();
  
  function crearMenu()
{
     let opciones = ["Listar Autos", "Agregar Auto", "Buscar Auto"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

     if(opcion === "Listar Autos")
     {
         boton.addEventListener("click", ()=>{
             listarAutos(autos);
         })
     }
     else if(opcion === "Agregar Auto")
     {
        boton.addEventListener("click", ()=>{
            agregarAuto();
            listarAutos(autos);
        })
     }
     else if(opcion==="Buscar Auto")
     {
        boton.addEventListener("click", ()=>{
            let filtrados = buscarAuto();
           
            listarUsuarios(filtrados);

        })
     }
     
     document.body.appendChild(boton);
     });
     
     
     

}
  
  function agregarAuto() {
    let id = 1;
    if (agregarAuto.length > 0) {
      id = agregarAuto[agregarAuto.length - 1].id + 1;
    }
  
    let marca = prompt("Ingrese una Marca");
    let modelo = prompt("Ingrese un Modelo");
    let auto = new Auto(id, marca, modelo);
  
    autos.push(autos);
    localStorage.setItem("Autos", autos)
  }
  
  
  /*function eliminarAuto() {
    let id = Number(prompt("Ingrese el id del auto que quiere eliminar"));
  
    let encontrado = autos.find((auto) => autos.id === id);
  
    if (!encontrado) {
      alert("Auto no Encontrado");
    } else {
      let index = autos.indexOf(encontrado);
  
      autos.splice(index, 1);
  
      console.log("Borrar Auto");
      console.log(autos);
    }
  }*/
  
  function inicializarAplicacion() {
    document.body.style.backgroundColor = "#D4E6F1";
  
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "SISTEMA DE AUTOS";
  
    tituloH1.setAttribute("style", "color:#3498DB;text-align:center");
    tituloH1.style.textDecoration = "underline #34495E";
    tituloH1.style.textDecorationLine = "underline overline";
    tituloH1.style.textShadow = "10px 8px 20px #17202A";
    tituloH1.classList.add("miTitulo");
    tituloH1.classList.add("miTitulo2");
  
    document.body.appendChild(tituloH1);
  
    const subtitulo = document.createElement("li");
    subtitulo.innerText = "Listado de autos:";
  
    const otroTitulo = document.createElement("p");
    otroTitulo.innerText = "________________";
    otroTitulo.setAttribute("style", "color:#283747");
  
    const otroTexto = document.createElement("p");
    otroTexto.innerHTML = `Gracias a todas las personas por su confianza`;
    otroTexto.setAttribute(
      "style",
      "color:#F5B041;text-align:center",
      "border-width:1px"
    );
    otroTexto.style.fontWeight = "bold";
    otroTexto.style.fontStyle = "italic";
    otroTexto.style.fontSize = "20px";
    otroTexto.style.border = "inset";
  
    document.body.appendChild(otroTexto);
  
    document.body.appendChild(subtitulo);
    document.body.appendChild(otroTitulo);
  }
  
  function buscarAuto() {
    let auto = prompt("Ingresa el auto que quieres buscar");
  
    let encontrados = autos.filter(
      (auto) => autos.marca.toLowerCase().indexOf(auto.toLowerCase()) !== -1
    );
  
    console.log("BUSCAR AUTOS:", encontrados);
  }

  function listarAutos(autos)
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaAutos");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdApellido = document.createElement("th");
   tdApellido.innerHTML="Apellido";
   encabezado.appendChild(tdApellido);

   const tdCumpleanos = document.createElement("th");
   tdCumpleanos.innerHTML="Cumpleaños:";
   encabezado.appendChild(tdCumpleanos);

   const tdAcciones = document.createElement("th");
   tdAcciones.innerHTML="Acciones";
   encabezado.appendChild(tdAcciones);

   miLista.appendChild(encabezado)
   
   listarAutos.forEach((autos)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${autos.marca}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${autos.modelo}`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}
