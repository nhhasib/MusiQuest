import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import img from "../../../assets/header/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-1-1-e1626148006985.jpg";
import InstructorCard from "./InstructorCard";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("https://musi-quest-server.vercel.app/instructors");
    return res.json();
  });

  return (
      <div className="mb-10">
          <Helmet>
                <title>MusiQuest | All Instructors</title>
            </Helmet>
      <SectionHeader img={img} title={"Instructors"}></SectionHeader>
      <div className="grid lg:grid-cols-3 gap-6 w-11/12 mx-auto ">
        {instructors.map((instractor) => (
          <InstructorCard
            key={instractor.instructor_id}
            data={instractor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
