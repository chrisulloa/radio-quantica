import { FormEventHandler } from "react";
import { LoadingSpinner } from "./loadingSpinner";

export type FormStatus =
  | "NotSubmitted"
  | "Submitted"
  | "Success"
  | "Failed"
  | "AlreadyExists";

export default function MailingListForm({
  onSubmit,
  formStatus,
}: {
  onSubmit: FormEventHandler<HTMLFormElement>;
  formStatus: FormStatus;
}) {
  return (
    <form onSubmit={onSubmit}>
      <label className="text-white">
        NEWSLETTER
        {
          <div className="grid grid-cols-4 border border-neon-green mt-2 rounded-md">
            <input
              className="bg-black text-white focus:outline-none p-2 col-span-3 rounded-xl"
              type="email"
              required={true}
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            ></input>
            <button
              type="submit"
              className="col-span-1 text-sm text-neon-green border-l border-neon-green py-2 hover:bg-neon-green hover:text-black"
            >
              {formStatus !== "Submitted" && "JOIN"}
            </button>
          </div>
        }
        {formStatus === "AlreadyExists" && (
          <div className="text-dos-grey mt-2">
            This email is already in our mailing list.
          </div>
        )}
        {formStatus === "Failed" && (
          <div className="text-[#FF0000] mt-2">
            Sorry, we couldn&apos; sign you up. Try again later.
          </div>
        )}
        {formStatus === "Success" && (
          <div className="text-neon-green mt-2">Thanks for signing up!</div>
        )}
      </label>
    </form>
  );
}
