import { insertarPaciente } from "@/lib/actions";
import { obtenerPlantas } from "@/lib/data";
async function PacienteInsertar() {
    const plantas = await obtenerPlantas();
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" required />
            <input name="fecha_nacimiento" type="date" placeholder="Fecha de Nacimiento" required />

            {/* Select dinámico con las plantas obtenidas de la base de datos */}
            <select name="plantaId" required>
                <option value="">Selecciona una planta</option>
                {plantas.map((planta) => (
                    <option key={planta.id} value={planta.id}>
                        {planta.nombre} {/* O cualquier otro campo relevante */}
                    </option>
                ))}
            </select>

            <button className="border-2 border-black">Insertar Paciente</button>
        </form>
    );
}
export default PacienteInsertar;