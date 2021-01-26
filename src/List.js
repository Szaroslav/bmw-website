import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

const List = ({ data }) => {
    return (
        <ul className='bmw-list'>
            {data.map((v, i) => {
                const n = i + 1;
                return (
                    <li className='bmw-list-item' key={i}>
                        <div className='bmw-list-heading'>
                            <p>
                                {n <= 9 ? '0' : ''}
                                {n}
                            </p>  
                        </div> 
                        <p className='bmw-list-content bmw-text-3'>{v}</p>
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