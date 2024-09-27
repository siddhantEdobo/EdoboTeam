import { useState, useCallback } from "react";
import { APIWebLogin } from "../../api/common";

const OtpGeneration = () => {
  const [otp, setOTP] = useState("");
  const [refId, setRefID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateOtp = useCallback(async (mobileNo) => {
    const payload = { mobile_no: mobileNo };

    try {
      const response = await APIWebLogin(payload);
      setIsLoading(false);

      if (response.ok) {
        if (response.data && response.data.success) {
          console.log(response.data);
          const { otp, ref_id } = response.data.data;
          console.log(response.data.data);
          console.log("otp,refid====> generat ", otp, ref_id);
          setOTP(otp);
          setRefID(ref_id);
          return {
            otp: otp,
            refId: ref_id,
            success: true,
            message: "OTP sent successfully",
          };
        } else {
          return { success: false, message: "Failed to send OTP" };
        }
      } else {
        return {
          success: false,
          message: response?.data?.message || "Unknown error",
        };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, message: error.message || "Unknown error" };
    }
  }, []);
  return { otp, refId, isLoading, generateOtp };
};

export default OtpGeneration;
