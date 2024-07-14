import { supabase } from "../api /supbaseClient";
// Function to fetch all lecturers
export const fetchLecturers = async () => {
  try {
    let { data, error } = await supabase.from("lecturers").select("*");

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching lecturers:", error.message);
    return null;
  }
};

// Function to view details of a specific lecturer by lecturer ID
export const fetchLecturerDetails = async (lecturerId) => {
  try {
    let { data, error } = await supabase
      .from("lecturers")
      .select("*")
      .eq("id", lecturerId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching lecturer details:", error.message);
    return null;
  }
};
