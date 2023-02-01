import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReduxToastr from '@/components/ui/redux-toastr';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const ErrorFallback = () => {
	return (
		<div
			className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
			role="alert"
		>
			<h2 className="text-3xl font-semibold mb-5">
				Ooooooopppps, something went wrong :({' '}
			</h2>
			<button
				className="p-3 shadow-lg border-red-300  border-1 flex justify-center items-center hover:scale-105"
				onClick={() => window.location.assign(window.location.origin)}
			>
				Reload page
			</button>
		</div>
	);
};

interface MainProviderProps {
	children: React.ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
	const queryClient = new QueryClient();

	return (
		<React.Suspense
			fallback={
				<div className="flex items-center justify-center w-screen h-screen text-green-400">
					Loading....
				</div>
			}
		>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<Provider store={store}>
						<QueryClientProvider client={queryClient}>
							<ReduxToastr />
							<Router>{children}</Router>
						</QueryClientProvider>
					</Provider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
