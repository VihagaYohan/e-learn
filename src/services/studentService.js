import { supabase } from "../api /supbaseClient";

// get list of all students
const getAllStudents = async () => {
  const { data } = await supabase.from("students").select("*");
  return data;
};

export default {
  getAllStudents,
};
