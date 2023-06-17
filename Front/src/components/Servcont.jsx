import { FaAmbulance, FaChevronRight, FaHeartbeat, FaNotesMedical, FaPills, FaProcedures, FaUserMd } from "react-icons/fa";
import '../styles/services.css';
import Services from './Services.jsx';

const Servcont = () => {
    return (
        <div className="section">
            <h3 className="heading"> our <span>services</span></h3>
            <div className="box-container">
                <Services icon={<FaNotesMedical />} heading='free check ups' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />
                <Services icon={<FaAmbulance />} heading='24/7 ambulance' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />
                <Services icon={<FaUserMd />} heading='expert doctors' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />
                <Services icon={<FaPills />} heading='medicines' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />
                <Services icon={<FaProcedures />} heading='bed facility' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />
                <Services icon={<FaHeartbeat />} heading='totalcare' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.' span='Learn More' button={<FaChevronRight className="right" />} />

            </div>
        </div>
    );
}

export default Servcont;
