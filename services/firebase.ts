import { RegistrationData } from "../types";

// Mock implementation of submitRegistration to avoid Firebase dependency issues in preview
export const submitRegistration = async (data: RegistrationData): Promise<boolean> => {
  console.log("====================================");
  console.log(" [Mock] Form Data Submitted:");
  console.log(data);
  console.log("====================================");
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Always return success for preview/demo purposes
  return true;
};