import './Service.css'

const Service = () => {
  const workCategory = [
    "Application Development",
    "Web Development",
    "Cybersecurity",
    "Cloud Computing",
    "Systems Administration",
    "IT Education and Training",
  ];

  return (
    <div className="border">
      <h2 className="Heading">About our Service</h2>
      <p className="item">
        Our All Services will be displayed here like Example:
      </p>

      <div className='items'>
        {workCategory.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
    </div>
  );
};

export default Service;
