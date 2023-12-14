import { NextRequest } from "next/server";
import axios from "axios";
import serverBaseURL from "./utils";

interface MeResponse {
  user?: {
    roles: string[];
  };
}

const validRoles = ["admin", "editor"];

const isAdminOrEditor = async (auth: string) => {
  if (!auth) {
    return false;
  }

  const options = {
    method: "GET",
    url: `${serverBaseURL}/api/users/me`,
    headers: {
      Authorization: `JWT ${auth}`,
      "Accept-Encoding": "*",
    },
  };

  try {
    const result = await axios.request<MeResponse>(options);
    return Boolean(
      result.data.user &&
        result.data.user.roles.some((role) => validRoles.includes(role))
    );
  } catch (e) {
    console.log(e);
    console.log("Failed to check user roles.");
    return false;
  }
};

export default isAdminOrEditor;
