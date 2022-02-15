function Paciente({user}){
    const { nombre, correo, direccion, fecha ,sintomas } = user;
    return(
        <div className="px-5">
                
                <p className=" ">
                    Nombre: {" "}
                    <span className="font-normal normal-case">
                        {nombre}
                    </span>
                </p>

                <p className=" ">
                    Correo {" "}
                    <span className="font-normal normal-case">
                        {correo}
                    </span>
                </p>

                <p className=" ">
                    Direccion: {" "}
                    <span className="font-normal normal-case">
                        {direccion}
                    </span>
                </p>

                <p className=" ">
                    Fecha: {" "}
                    <span className="font-normal normal-case">
                        {fecha}
                    </span>
                </p>

                <p className=" ">
                    Sintomas: {" "}
                    <span className="font-normal normal-case">
                        {sintomas}
                    </span>
                </p>
            </div>
    )
}
export default Paciente;