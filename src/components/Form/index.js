import {useState} from "react";

const CurriculoForm = ({ onSave }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cargo, setCargo] = useState('')
    const [descrisao, setDescrisao] = useState('')

    const save = () => {
        const curriculo = {
            name,
            email,
            telefone,
            cargo,
            descrisao,
        }

        onSave(curriculo)
        clearForm()
    }

    
    const clearForm = () => {
        setName('')
        setEmail('')
        setTelefone('')
        setCargo('')
        setDescrisao('')
    }
    return (
        <>
            Nome Completo: <br />
            <input type="text" size="35" value={name}
                onChange={event => setName(event.target.value)} />

            <br /><br />

            Email: <br />
            <input type="text"  size="35" value={email}
                onChange={event => setEmail(event.target.value)} />

            <br /><br />

            Telefone: <br />
            <input type="text" size="35" value={telefone}
                onChange={event => setTelefone(event.target.value)} />

            <br /><br />

            Cargo: <br />
            <input type="text" size="35" value={cargo}
                onChange={event => setCargo(event.target.value)} />

            <br /><br />

            Historico da Pessoa: <br />
            <input type="text" size="35" value={descrisao}
                onChange={event => setDescrisao(event.target.value)} />

            <br /><br />

            <br /><br />
            <input type="button" value="Salvar" onClick={save} /> &nbsp;
            <input type="button" value="Cancelar" onClick={clearForm} />
        </>
    )

   




}

export default CurriculoForm

