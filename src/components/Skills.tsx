import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "Linux",
    "MacOs",
    "Windows",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Datadog",
    "GitOps",
    "CI/CD",
    "IaC",
    "Monitoring",
    "Automation",
    "Observability",
];

const labelsThird = [
    "AWS",
    "Azure",
    "GCP",
    "Digital Ocean",
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faTerminal} size="3x"/>
                    <h3>Operating  Systems</h3>
                    <p>I have strong expertise in automation, monitoring, and optimization of critical infrastructure environments. I possess advanced knowledge in administering Linux, Windows, and macOS operating systems, including configuration, troubleshooting, and maintenance of servers and workstations. I utilize command-line tools, scripting, and Infrastructure as Code practices to ensure high availability, scalability, and security of systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I specialize in enabling seamless DevOps workflows by setting up comprehensive testing, CI/CD pipelines, and deployment automation to ensure smooth and successful application go-lives. My expertise spans a broad technology stack, including Git, GitHub, GitLab, Docker, Kubernetes, Terraform, Ansible, Jenkins, Prometheus, Grafana, Datadog, and GitOps methodologies. I leverage Infrastructure as Code (IaC), monitoring, automation, and observability best practices to enhance system reliability, scalability, and efficiency. My approach integrates continuous integration and continuous delivery processes with robust monitoring and alerting frameworks to maintain high system performance and operational excellence.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Computing </h3>
                    <p>I have deep knowledge of cloud computing concepts, with a current focus on the AWS platform. I have solid, hands-on experience with various AWS services and architectures, enabling me to build, manage, and optimize scalable and secure infrastructures. In addition, I have intermediate knowledge of other public clouds, such as Microsoft Azure and Google Cloud Platform (GCP), which allows me to work in multi-cloud environments and seek the best solutions for each project.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;