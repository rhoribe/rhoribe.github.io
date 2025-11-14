import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward , faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

function Education() {
    return (
    <div className="container" id="education">
        <div className="skills-container">
            <h1>Education / Certifications</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faUserGraduate} size="3x"/>
                    <h3>Education</h3>
                    <p>● Postgraduate Degree Devops & Continuous Software Engineering : PUC, 2025 - 2027</p>
                    <p>● Postgraduate Degree in Computer Networks and Telecommunications :  FIB, 2010 - 2012</p>
                    <p>● Bachelor's Degree in Systems Analysis and Information Technology with a specialization in
Systems Development - FATEC, 2005 - 2009 </p>
 
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAward} size="3x"/>
                    <h3>Cerfications</h3>
                    <p>● ITIL 2011 Foundation</p>
                    <p>● Cobit 4.1 Foundation</p>
                    <p>● Professional Scrum Master (PSM)</p>
                    <p>● IT Service Management Foundation Bridge based on ISO/IEC 20000</p>
                    <p>● Information Security Foundation based on ISO/IEC 27002 </p>
                    <p>● AWS Certified Cloud Practitioner </p>
                    <p>● AWS Certified Solutions Architect Associate </p>
                    <p>● AWS Certified SysOps Administrator Associate </p>
                    <p>● AWS Certified Developer Associate </p>
                    <p>● HashiCorp Certified: Terraform Associate </p>
                    <p>● AZ-900: Microsoft Azure Fundamentals</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Education;