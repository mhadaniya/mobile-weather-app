import { atom, useAtom } from "jotai";

export const colorSchemeAtom = atom({
  type: "dark",
  source: "forcedDark",
});
