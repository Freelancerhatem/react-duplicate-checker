import PropTypes from 'prop-types';

const Bookmarkslength = ({bookmarkdata,age}) => {
    console.log(age)
    return (
        <div>
            <h2>Total age:{age}</h2>
            <h2>Select:{bookmarkdata.length}</h2>
        </div>
    );
};

Bookmarkslength.propTypes = {
    bookmarkdata:PropTypes.array,
    age:PropTypes.number
};

export default Bookmarkslength;