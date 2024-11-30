import { Provider as ChakraProvider } from "@/components/ui/provider.tsx";
import router from "@utils/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/configure-store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={<div>loading...</div>} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
