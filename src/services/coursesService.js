import { supabase } from "../api /supbaseClient";

// Function to fetch all courses
export const fetchCourses = async () => {
  try {
    let { data, error } = await supabase.from("courses").select("*");

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    return null;
  }
};

// Function to view details of a specific course by course ID
export const fetchCourseDetails = async (courseId) => {
  try {
    let { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", courseId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching course details:", error.message);
    return null;
  }
};

// Function to add a content module to a specific course
export const addContentModule = async (courseId, moduleName, moduleContent) => {
  try {
    const { data, error } = await supabase
      .from("content_modules")
      .insert([
        { course_id: courseId, name: moduleName, content: moduleContent },
      ]);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error adding content module:", error.message);
    return null;
  }
};
