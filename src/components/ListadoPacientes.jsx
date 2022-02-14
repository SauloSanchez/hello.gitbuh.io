import Paciente from "./Paciente";

function ListadoPacientes(){
    return(
        <div className="w-1/2">
            <h2 className="">
                Listado Pacientes
            </h2>
            <p className="">
                Administra tus {" "}
                <span className=""> Pacientes y Citas</span>
            </p>

            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}
export default ListadoPacientes;