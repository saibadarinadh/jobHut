import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobList from '../components/JobList';
import AdvancedSearch from '../components/AdvancedSearch';
import Loading from '../components/Loading';

export default function Jobs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Job Listings</h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left side: Search Form */}
          <div className="w-full lg:w-1/4">
            <Suspense fallback={<Loading />}>
              <AdvancedSearch />
            </Suspense>
          </div>
          
          {/* Right side: Job List */}
          <div className="w-full lg:w-3/4">
            <Suspense fallback={<Loading />}>
              <JobList />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

