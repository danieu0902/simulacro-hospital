import { insertarPlanta } from "@/lib/actions";
function PlantaInsertar() {
    return (
        <form action={insertarPlanta}>
            <input name="nombre" placeholder="Nombre" />
            <input name="jefe_planta" placeholder="Jefe de planta" />
          
            <button className="border-2 border-black text-black bg-green-600">Insertar Planta</button>
        </form>
    );
}
export default PlantaInsertar;