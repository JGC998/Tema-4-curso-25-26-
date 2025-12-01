import { nuevoAutorAPI } from "@/lib/actions";


function AutorNuevoAPI() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='lugar_de_nacimiento'>Lugar de nacimiento:</label>
            <input required id='lugar_de_nacimiento' name='lugar_de_nacimiento' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='premio_nobel'>Premio Nobel:</label>
            <input type='checkbox' id='premio_nobel' name='premio_nobel' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoAutorAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar autor
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default AutorNuevoAPI;