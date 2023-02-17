import axios from 'axios'
import { useEffect, useState } from 'react'
import IUser from '../types/IUser'



const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<IUser[]>([])

  useEffect(() => {
    axios.get<IUser[]>('http://localhost:5000/users')
      .then(resposta => {
        setUsuarios(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])


  return (

    <div className='h-screen w-full flex item-center justify-center'>
      <div className='flex flex-col items-center w-80 h-80 sm:justify-center bg-gray-300 '>
        <div className='text-2xl text-purple-700'>Usuários</div>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <h3>{usuario.name}</h3>
            </li>

          ))}
        </ul>
      </div>
    </div>

  )
}

export default Usuarios