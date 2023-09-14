import PropTypes from 'prop-types';

const Cart = ({handleClick,data}) => {
    const{name,image,age} =data
    return (
        <div className='h-52 w-64 m-10'>
            <div className='border-red-500 bg-slate-700 m-6 '>
                <h2 className='text-green-400 font-semibold'>{name}</h2>
                <img src={image} alt="" className='h-48 mx-auto'/>
                <p className='pb-5 text-lg font-semibold  bg-red-700 w-10 text-center items-center mx-auto'>{age}</p>
            <button onClick={()=>handleClick(data)} className='bg-red-300 px-2 py-2'>Click!</button>
            </div>
            
        </div>
    );
};

Cart.propTypes = {
    handleClick:PropTypes.func,
    data:PropTypes.object
};

export default Cart;