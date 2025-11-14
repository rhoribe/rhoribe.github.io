import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Site Reliability Engineer (SRE)</h3>
            <h4 className="vertical-timeline-element-subtitle">Zup Innovation,  Remoto</h4>
            <p>
              Site Reliability Engineer focused on reliability, automation, and observability. I work on developing CI/CD pipelines, managing cloud infrastructure (AWS), building scalable environments with Kubernetes and Terraform, and implementing monitoring and SRE practices to ensure high availability and performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps</h3>
            <h4 className="vertical-timeline-element-subtitle">PHI Pagamentos, Remote</h4>
            <p>
              Responsible for coordinating the activities of the support and infrastructure team, managing maintenance routines, implementation, and configuration of IT infrastructure using technology solutions to optimize processes in order to maintain high service availability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Infrastructure Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">Digipix, Joinville/SC, Brazil</h4>
            <p>
              Responsible for coordinating the activities of the support and infrastructure team, managing maintenance routines, implementation, and configuration of IT infrastructure using technology solutions to optimize processes in order to maintain high service availability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">ITFlex Tecnologia, Joinville/SC, Brazil</h4>
            <p>
              Project management, risk and assumption definition, resource and delivery time planning and control, regular project reporting, improvement suggestions, follow-up and support during the warranty period, serving as project lead for telecommunications, Linux server environments, and security.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2013"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Infrastructure Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">GSP Loteamentos, Ourinhos/SP, Brazil </h4>
            <p>
              As IT Infrastructure Coordinator, I oversaw the company’s network, servers, and communication systems, ensuring their security, stability, and performance. I managed system maintenance, vendor contracts, backups, and documentation while defining hardware/software standards and providing user support and training.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;