
import PropTypes from 'prop-types';

const Bookmark = ({emails}) => {
    console.log(emails)
    const{age,name,email} =emails;
    
    return (
        <>
        <div className="bg-slate-800 rounded-md my-4 px-5 py-5 text-white">
            
            <h2 className="text-xl">{email}</h2>
            
        </div>
        
        </>
    );
};

Bookmark.propTypes = {
    emails:PropTypes.object
};

export default Bookmark;