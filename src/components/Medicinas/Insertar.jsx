import { insertarMedicina } from "@/lib/actions";
function MedicinaInsertar() {
    return (
        <form action={insertarMedicina}>
            <input name="nombre" placeholder="Nombre" />
            <input name="via" placeholder="Via" />
          
            <button className="border-2 border-black text-black bg-green-600">Insertar Medicina</button>
        </form>
    );
}
export default MedicinaInsertar;