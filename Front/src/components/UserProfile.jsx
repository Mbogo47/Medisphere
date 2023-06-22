import { FaUserCircle } from 'react-icons/fa';
import '../styles/user.css';

const UserProfile = () => {
    // const { currentcolor } = useContext()
    return (
        <div >
            <FaUserCircle style={{
                paddingRight: '10px',
                fontSize: '30px',
                color: '#067a5e',
                verticalAlign: 'middle'
            }} /><span className="span-side">UserProfile</span>
        </div>
    )
}

export default UserProfile