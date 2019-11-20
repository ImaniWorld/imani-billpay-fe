import { RootState } from "~/types";
import { MutationTree } from "vuex";

export const state = (): RootState => ({
  pendingRequestsCount: 0
});

export const mutations: MutationTree<RootState> = {
  incrementLoader(state: RootState): void {
    state.pendingRequestsCount++;
  },
  decrementLoader(state: RootState): void {
    state.pendingRequestsCount--;
  }
};
