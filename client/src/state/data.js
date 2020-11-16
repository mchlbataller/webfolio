import create from "zustand";

export const useDataStore = create((set) => ({
	userData: null,
	setUserData: (data) => {
		set((state) => ({
			userData: data,
		}));
	},
	initialized: false,
	setInitializedState: (arg) => {
		set(() => ({ initialized: arg }));
	},
	imageIsLoaded: false,
	setImageIsLoadedState: (bool) => {
		set(() => ({ imageIsLoaded: bool }));
	},
}));
