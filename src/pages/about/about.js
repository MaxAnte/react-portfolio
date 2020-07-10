import React from 'react';

import './about.css';

class AboutPage extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='container'>
                    <h2>Who am I?</h2>

                    <p>A highly-organized UI/UX design agency located in Kiev, Ukraine. Founded in 2010, we have gone on to work with more than 300 clients.</p>
                    <p>There are many websites and many apps out there on the virtual stage and just as many designers to create them for you. Where we make a difference is in helping 
                        you stand out among the masses and make an impact that increases your sales and drives business opportunities to you.</p>
                    <p>We ensure project success by providing a collaborative team environment on every project and an agile workflow to deliver quality work in quick turnaround 
                        time frames.</p>
                    <p>We love what we do and enjoy helping our clients find solutions to any difficulties or challenges any project may offer.</p>
                    <p>Top Rated By Upwork: https://www.upwork.com/o/companies/_~01b04eb401079937d2/</p>

                    <h2>Skills & Expertise:</h2>
                    <ul>
                        <li>- UX/UI Design</li>
                        <li>- Web Design</li>
                        <li>- Logo Design</li>
                        <li>- Game desig</li>
                        <li>- Illustration</li>
                        <li>- Motion design</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutPage;
