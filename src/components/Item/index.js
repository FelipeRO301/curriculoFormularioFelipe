
const CurriculoItem = ({ curriculo }) => {

    return (
        <tr>
            <td>{curriculo.name}</td>
            <td>{curriculo.email}</td>
            <td>{curriculo.telefone}</td>
            <td>{curriculo.cargo}</td>
            <td>{curriculo.descrisao}</td>

        </tr>
    )
}

export default CurriculoItem
