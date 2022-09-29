import { useEffect, useState } from "react"
import CurriculoForm from "./components/Form"
import CurriculoList from './components/List'
import { curriculoService } from "./services"

const App = () => {
    const [items, setItems] = useState([])

    useEffect(() => { 
        const curriculo = curriculoService.getItems()
        setItems(curriculo)
    }, [])

    const updateList = (curriculo) => {
        const newCurriculo = [...items, curriculo]

        setItems(newCurriculo)
        curriculoService.save(newCurriculo)
    }
    
    return (
        <div>
            <h1>Cadastre seu Curriculo</h1>

            <CurriculoForm onSave={updateList}/>
            <br /><br />
            <CurriculoList curriculo={items}/>
        </div>
    )
}

export default App

