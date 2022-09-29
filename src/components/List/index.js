import CurriculoItem from "../Item"

const CurriculoList = ({ curriculo }) => {

    return (
        <table width="100%" border="1">
            <thead>
                <tr>
                    <th width="20%">Nome Completo</th>
                    <th width="20%">Email</th>
                    <th width="20%">Telefone</th>
                    <th width="20%">Cargo</th>
                    <th width="100%">Historico</th>
                </tr>
            </thead>
            <tbody>
                {curriculo.map((curriculo, index) => (
                    <CurriculoItem key={index} curriculo={curriculo} />
                ))}
            </tbody>
        </table>
    )
}

export default CurriculoList