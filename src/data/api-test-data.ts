import { generateRandomString } from "@/utils/utils";

const webKitFormB = "------WebKitFormBoundaryn9QiKNFyV75YZlcD";
const contentDisposition = "Content-Disposition: form-data;";

export const formData = {
  form_key: "jAUNPm0jNVtm2QAT",
  firstname: "John",
  lastname: "Doe",
  email: `${generateRandomString()}johndoe1@example.com`,
  password: "SecurePassword123",
  password_confirmation: "SecurePassword123",
};

export const apiConfig = {
  baseURL: "https://magento.softwaretestingboard.com",
  extraHTTPHeaders: {
    Cookie: `form_key=${formData.form_key}; PHPSESSID=f2b6565e1325dacef20bf190710f85ad;`,
    "Content-Type":
      "multipart/form-data; boundary=----WebKitFormBoundaryn9QiKNFyV75YZlcD",
    Origin: "https://magento.softwaretestingboard.com",
    Referer:
      "https://magento.softwaretestingboard.com/customer/account/create/",
  },
};

export const payload = `
  ${webKitFormB}
  ${contentDisposition} name="form_key"
  
  ${formData.form_key}
  ${webKitFormB}
  ${contentDisposition} name="firstname"
  
  ${formData.firstname}
  ${webKitFormB}
  ${contentDisposition} name="lastname"
  
  ${formData.lastname}
  ${webKitFormB}
  ${contentDisposition} name="email"
  
  ${formData.email}
  ${webKitFormB}
  ${contentDisposition} name="password"
  
  ${formData.password}
  ${webKitFormB}
  ${contentDisposition} name="password_confirmation"
  
  ${formData.password_confirmation}
  ${webKitFormB}
    `;
