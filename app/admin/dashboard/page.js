'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import AddJobForm from '../../components/AddJobForm'
import JobManagement from '../../components/JobManagement'
import AddCouponForm from '../../components/AddCouponForm'
import CouponManagement from '../../components/CouponManagement'
import BlogManagement from '../../components/BlogManagement'
import Loading from '../../components/Loading'
import PageViewWrapper from '../../components/PageViewWrapper'

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('jobs')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin')
    } else {
      setIsLoggedIn(true)
    }
  }, [])

  if (!isLoggedIn) {
    return <Loading />
  }

  return (
    <PageViewWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`${
                  activeTab === 'jobs'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Manage Jobs
              </button>
              <button
                onClick={() => setActiveTab('addJob')}
                className={`${
                  activeTab === 'addJob'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Add New Job
              </button>
              <button
                onClick={() => setActiveTab('coupons')}
                className={`${
                  activeTab === 'coupons'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Manage Coupons
              </button>
              <button
                onClick={() => setActiveTab('addCoupon')}
                className={`${
                  activeTab === 'addCoupon'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Add New Coupon
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`${
                  activeTab === 'blogs'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Manage Blogs
              </button>
            </nav>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          {activeTab === 'jobs' && <JobManagement />}
          {activeTab === 'addJob' && <AddJobForm />}
          {activeTab === 'coupons' && <CouponManagement />}
          {activeTab === 'addCoupon' && <AddCouponForm />}
          {activeTab === 'blogs' && <BlogManagement />}
        </Suspense>
      </div>
    </PageViewWrapper>
  )
}

