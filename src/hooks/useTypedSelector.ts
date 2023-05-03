import { TypedUseSelectorHook, useSelector } from "react-redux";

import { TypeRootStore } from "@/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootStore> = useSelector;