import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import CreateEvent from "./pages/CreateEvent";
import Volunteers from "./pages/Volunteers";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="events" element={<Events />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="create" element={<CreateEvent />} />
                        <Route path="volunteers" element={<Volunteers />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
