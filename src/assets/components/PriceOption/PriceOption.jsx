import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 text-white rounded-lg flex flex-col p-4'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-6'>{name}</h4>
            <div className='px-4 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-600 w-full py-2 font-bold rounded-xl hover:bg-green-800 mt-6'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;