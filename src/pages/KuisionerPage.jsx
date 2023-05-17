import React from "react";
import ChangeTitle from "../components/ChangeTitle";
import Kuisioner from "../components/Kuisioner";

export default function KuisionerPage() {
  return (
    <>
      <ChangeTitle pageTitle="Employee Satisfication Index" />
      <Kuisioner />
    </>
  );
}
