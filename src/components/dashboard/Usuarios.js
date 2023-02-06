import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { RiMoneyDollarCircleFill, RiBarChart2Fill, RiInboxUnarchiveFill } from 'react-icons/ri'
import { categories } from '../utils/data'
import { getAllOrders } from '../utils/firebaseFunctions'
import TablaListados from './TablaListados'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import UsuariosList from './Usuarioslist'


const Usuarios = () => {
    const [category, setCategory] = React.useState(null);
    const [{ products}, dispatch] = useStateValue()
    const [modal ] = React.useState(false)
    const [orders, setOrders] = React.useState([])
 

 
    React.useEffect(() => {
        dispatch({
            type: actionType.SET_DONDE_ESTOY,
            dondeestoy: 'Dashboard'
        })

        getAllOrders().then((data) => {
            setOrders(data.filter(a => a.status === 'pagado'))
        })


    }, [dispatch])


    return (
        <div className='md:px-8 h-[90vh] md:mt-[10vh] w-full flex fixed gap-4'>
          
            <div className='flex flex-col w-[86vw] ml-[14vw]'>
                
                <div className=' flex '>
                    <UsuariosList/>
                </div>
            </div>
           
        </div>
    )
}

export default Usuarios




