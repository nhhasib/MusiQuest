import React from "react";
import img from "../../../assets/header/education-concept.jpg";
import SectionHeader from "../../shared/SectionHeader";
import ClassCard from "./ClassCard";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { data: classesData = [] } = useQuery(["classes"], async () => {
    const res = await fetch("https://musi-quest-server.vercel.app/classes");
    return res.json();
  });
  const approvedClass = classesData?.filter((cls) => cls.status == "approved");
  return (
      <div>
          <Helmet>
                <title>MusiQuest | All Classess</title>
            </Helmet>
      <SectionHeader img={img} title={"Classes"}></SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-4">
        {approvedClass.map((c) => (
          <ClassCard key={c._id} data={c}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
