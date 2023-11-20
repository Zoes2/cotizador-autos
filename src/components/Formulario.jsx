import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"

const Formulario = () => {
    return (
        <>
            <form>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select 
                        className="w-full p-3 bg-white border border-gray-200" 
                        name="marca"
                    >
                        <option value="">-- Selecciona Marca --</option>

                        {MARCAS.map(marca => (
                            <option 
                                value={marca.id}
                                key={marca.id}
                            >

                                {marca.nombre}
                            </option>
                            
                            
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select 
                        className="w-full p-3 bg-white border border-gray-200" 
                        name="marca"
                    >
                        <option value="">-- Selecciona Año --</option>

                        {YEARS.map(year => (
                            <option 
                                value={year}
                                key={year}
                            >
                                
                                {year}
                            </option>
                            
                            
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>
                    <div className="flex gap-3">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input 
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input 
                    type="submit" 
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value="cotizar"
                />
            </form>
        </>
    )
}

export default Formulario
