import React from 'react'
import './../Layout/Experience.scss'

export default function Experience() {
  return (
    <div className="experience-wrapper">
        <div className="container">
            <div className="third">
                <h2 className='heading'>Experience</h2>
            </div>
            <div className="two-thirds">
                <section className="experience">
                        <h3>Cart</h3>
                        <p>Implementation Specialist &bull; 2021</p>
                        <ul className="experience-list">
                        <li>Led as a technical developer on occasion, providing guidance and direction to the development team as needed.</li>
                        <li>Developed a foundation theme that is installed on new store set ups, ensuring that the theme is scalable, maintainable, and meets the needs of the client.</li>
                        <li>Troubleshooted and worked on solving issues that arose during the development process, using problem-solving skills and technical expertise to identify and resolve problems.</li>
                        <li>Communicated effectively with the appropriate team members, keeping them informed of progress, issues, and any other relevant information.</li>
                        </ul>
                </section>

                <section className="experience">
                        <h3>Forthea Interactive</h3>
                        <p>Front End Developer &bull; 2016-2021</p>
                        <ul className="experience-list">
                        <li>Built prototype forms suitable for API testing with WordPress to test custom integration with CRM's such as Salesforce, HubSpot, and Zoho.</li>
                        <li>Designed web layouts with good design principles and user interaction standards with visual aesthetic components such as: layout, fonts, color, animations, graphic elements.</li>
                        <li>Maintained client sites in WPEngine, communicated potential site updates and provided support when updates affected client sites.</li>
                        <li>Optimized landing pages based of Hotjar and Google Analytics data to generate conversion.</li>
                        </ul>
                </section>

                <section className="experience">
                        <h3>MMI Agency</h3>
                        <p>Front End Developer &bull; 2012-2016</p>
                        <ul className="experience-list">
                        <li>Designed and developed custom mobile friendly WordPress sites.</li>
                        <li>Worked with account leads to establish client expectations and deadlines.</li>
                        <li>Collaborated with designers creating brand standards for web.</li>
                        </ul>
                </section>
            </div>
        </div>
    </div>
  )
}
