interface PersonasProps {
    nombre: string;
    apellido: string;
}


const Jose: React.FC<PersonasProps> = ({ nombre, apellido }) => {
    return (

            <div>
                <p>
                    nombre: {nombre}, apellido: {apellido}
                </p>
            </div>



    )
}
export default Jose