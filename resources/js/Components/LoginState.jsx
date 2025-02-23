import { atom } from "recoil";

// State global untuk login dialog
export const loginDialogState = atom({
    key: "loginDialogState",
    default: false, // Dialog awalnya tertutup
});
