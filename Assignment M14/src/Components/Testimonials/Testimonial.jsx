import employData from '/public/assets/DataBase/data.json';

const Testimonial = () => {
  return (
    <div className='p-10'>
      <h2 className='uppercase font-semibold text-blue-500'>All PROJECT</h2>
      <h2 className='uppercase font-bold my-3 text-indigo-800'>Better solution At<br />Your Fingertips</h2>
      <div className="grid grid-cols-3 gap-4 p-10">
        {employData.map((data) => (
          <div key={data.id} className="bg-black-100 p-4 rounded-lg shadow-md text-center">
            <img
              src={data.imagePath}
              alt={data.name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-sm text-white-600 mb-2">{data.description}</p>
            <h3 className="text-lg font-bold mb-1 text-white-800">{data.name}</h3>
            <p className="text-sm text-white-500">{data.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
