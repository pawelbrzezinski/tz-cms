import React from "react";
import Doctor from "./Doctor";

const DoctorList = ({ data = [], graph, cityAnchor = "" }) => {
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
      {data.map((doctor, idx) => (
        <Doctor
          cityAnchor={!idx && cityAnchor ? cityAnchor : false}
          key={doctor.name}
          data={doctor}
          image={findImageForDoctor(doctor)}
        />
      ))}
    </>
  );
};

export default DoctorList;
