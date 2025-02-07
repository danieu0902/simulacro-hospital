import { insertarPaciente } from "@/lib/actions";
function PacienteInsertar() {
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" placeholder="Fecha de Nacimiento" />
          
            <button className="border-2 border-black text-black bg-green-600">Insertar Paciente</button>
        </form>
    );
}
export default PacienteInsertar;