import React from "react";

function AboutTeam() {
  const teamMembers = [
    { name: "Emon Arefin", role: "Founder" },
    { name: "Bibi Russel", role: "Lead Designer" },
    { name: "Shamim Hussain", role: "Marketing Manager" },
  ];

  return (
    <div className="about-team">
      <h2>Our Team</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutTeam;
