import PropTypes from 'prop-types';
import { IoIosCheckmarkCircleOutline} from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><IoIosCheckmarkCircleOutline className='bg-green-600 rounded-full'></IoIosCheckmarkCircleOutline>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;