import React from "react";
import Doctor from "./Doctor";

const DoctorList = ({ data = [], graph }) => {
  const findImageForDoctor = (doctor) => {
    const found = graph.doctors.filter((image) => {
      return image.childImageSharp.fluid.originalName === doctor.img;
    });

    if (found.length) {
      return found[0];
    }
  };

  return (
    <>
      {data.map((doctor) => (
        <Doctor
          key={doctor.name}
          data={doctor}
          image={findImageForDoctor(doctor)}
        />
      ))}
    </>
  );
};

export default DoctorList;
