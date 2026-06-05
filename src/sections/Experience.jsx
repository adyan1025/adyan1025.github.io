import { useState } from "react";
import "../styling/Experience.css";

function Experience() {
  const timelineItems = [
    {
      id: 1,
      date: "Mar 2026 - Present",
      title: "cloud solution engineer intern",
      description: "Designed and validated a high-availability reference architecture on SAP Cloud Infrastructure (SCI/OpenStack), including Pacemaker/Corosync clustering, STONITH fencing, and Kopia-based backup/restore to Ceph storage. Measured RTO/RPO under simulated failure scenarios to support 99.7% SLA validation for customer-facing private cloud environments.",
      tag: "SAP",
    },
    {
      id: 2,
      date: "May 2025 - Mar 2026",
      title: "software engineer intern",
      description: "Center of expertise in data management; built an AI agent with RAG application and vector engine as an internal tool to visualize data volume management reports.",
      tag: "SAP",
    },
    {
      id: 3,
      date: "May 2025 - Jul 2025",
      title: "web developer",
      description: "Prototyped and developed an interactive website for a nonprofit client.",
      tag: "Develop for Good",
    },
    {
      id: 4,
      date: "Jul 2024 - Jun 2025",
      title: "undergraduate researcher",
      description: "Built a Python automation tool to retrieve and process 600+ online posts, created an R script with 65% interrater reliability, and designed 5 data visualizations using Vega-Altair. Published at SIGCSE 2026.",
      tag: "Temple HCI Lab",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="timeline-wrapper">
      <header className="timeline-header">
        <h2>work experience</h2>
      </header>

      <ul className="timeline-list">
        {timelineItems.map((item) => (
          <li
            key={item.id}
            className={`timeline-item`}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-date">{item.date}</p>
              <h3 className="timeline-event-title">{item.title}</h3>
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}
              {item.tag && (
                <span className={`timeline-tag timeline-tag--${item.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.tag}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;