import React from 'react';
import './PortfolioItem.css';

import { Link } from 'react-router-dom';

function PortfolioItem({ work }) {
    return (
        <Link to={`/project/${work.id}`} className='portfolio-item'>
            <div className='portfolio-item__screenshot-cont'>
                <img
                    className='portfolio-item__screenshot'
                    src={work.screenshot}
                    alt={work.title}
                />
            </div>
            <div className='portfolio-item__title'>{work.title}</div>
        </Link>
    );
}

export default PortfolioItem;
