import Paciente from "./Paciente";

function ListadoPacientes({usuarios}){
    return(
        <div className="w-1/2">
            <h2 className="">
                Listado Pacientes
            </h2>
            <p className="">
                Administra tus {" "}
                <span className=""> Pacientes y Citas</span>
            </p>

            { usuarios.map( (user) => {

                return(
                    <Paciente
                    user = {user}
                    />
                )
            }) }
            
        </div>
    )
}
export default ListadoPacientes;