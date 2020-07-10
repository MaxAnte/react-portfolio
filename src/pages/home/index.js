import React from 'react';

import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';

import works from '../../works';

class HomePage extends React.Component {
    render() {
        const reversedWorks = works.reverse();
        return (
            <div>
                <div className='portfolio'>
                    <div className='container'>
                        {reversedWorks.map((work) => (
                            <PortfolioItem key={work.id} work={work} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
