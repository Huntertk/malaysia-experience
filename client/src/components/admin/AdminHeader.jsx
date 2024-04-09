import '../../styles/adminHeader.scss' 
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiAlignLeft} from 'react-icons/bi'
import { adminLogout, adminSidebarOpen } from '../../redux/features/adminSlice'
import toast  from 'react-hot-toast'
import axios from 'axios'
import { useGetAdminDataQuery } from '../../redux/api/adminAuthApi'
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const {adminEmail} = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data,isLoading, isSuccess} = useGetAdminDataQuery()
    


    const handleLogout = async () => {
      try {
        const res = await axios.get('/api/v1/admin/logout')
        dispatch(adminLogout());
        navigate("/");
      } catch (error) {
        toast.error("Something went wrong....")
        console.log(error);
      }
    }

  return (
    <div id='adminHeaderMainContainer'>
        <div className="adminHeaderWrapper">
            <BiAlignLeft className='alignLeft' onClick={() => dispatch(adminSidebarOpen())} />
            <h1>Dashboard</h1>
            <ul>
                <li className='adminEmail'>{adminEmail} </li>
                <li><AiOutlineLogout onClick={handleLogout} /></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader