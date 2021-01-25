import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

const List = ({ data }) => {
    return (
        <ul className='bmw-list'>
            {data.map((v, i) => {
                return (
                    <li className='bmw-list-item' key={i}>
                        <div className='bmw-list-heading'>
                            <p>0{i + 1}</p>  
                        </div> 
                        <p className='bmw-list-content'>{v}</p>
                    </li>
                );
            })}
        </ul>
    );
}

List.propTypes = {
    data: PropTypes.array.isRequired
}

export default List;