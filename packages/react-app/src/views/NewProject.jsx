import { useEffect, useState } from "react";
import NewProjectABI from "../helpers/NewProjectABI.json";
const ethers = require("ethers");

export default function NewProject({}) {
  console.log("NewProjectABI", NewProjectABI);
  const interfaceRegister = new ethers.utils.Interface(NewProjectABI);
  console.log("interface", interfaceRegister);
  return <></>;
}
