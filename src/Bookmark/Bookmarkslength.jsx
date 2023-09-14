import PropTypes from 'prop-types';

const Bookmarkslength = ({bookmarkdata}) => {
    return (
        <div>
            <h2>Select:{bookmarkdata.length}</h2>
        </div>
    );
};

Bookmarkslength.propTypes = {
    bookmarkdata:PropTypes.array
};

export default Bookmarkslength;