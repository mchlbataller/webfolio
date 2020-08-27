import create from "zustand";

export const useDataStore = create((set) => ({
	userData: null,
	setUserData: (data) =>
		set((state) => ({
			userData: data,
		})),
}));
