import React from 'react';

import './about.css';

class AboutPage extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='container'>
                    <h2>Who am I?</h2>

                    <p>Hi! I am Max, from Vinnitsa, Ukraine.</p>
                    <p>Working in Web development since 2016, on UpWork since 2018. Have been working with more than 25 clients on a regular basis for 2 years and we have 
                        accomplished really good results. Sites are top-rated in their fields, have a good conversion and sales.</p>
                        
                    <h2>What I propose you?</h2>

                    <p>I will help you stand out among the masses and make an impact that increases your sales and drives business opportunities to you.</p>
                    <p>I ensure project success by providing collaborative actions, and the environment on every project and an agile workflow to deliver 
                        quality work in quick turnaround time frames.</p>
                    <p>I love what I do and enjoy helping my clients find solutions to any difficulties or challenges any project may offer.</p>
                    <p>Upwork Account: <a href='https://www.upwork.com/freelancers/~01f617f68227219464'>https://www.upwork.com/freelancers/~01f617f68227219464</a></p>

                    <h2>Skills & Expertise:</h2>
                    <ul>
                        <li>- HTML5, CSS3, SASS (SCSS), LESS markup and styling technologies</li>
                        <li>- JavaScript, jQuery, Vue.js, React.js front-end technologies</li>
                        <li>- Node.js, PHP, MySQL back-end technologies</li>
                        <li>- Shopify platform Expert level</li>
                        <li>- Photoshop, Sketch, Figma, Illustrator, Adobe XD</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutPage;
