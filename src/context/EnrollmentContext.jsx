import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { courses } from '../data/courses'

const STORAGE_KEY = 'aea-enrollment-requests'

const EnrollmentContext = createContext(null)

function loadRequests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function EnrollmentProvider({ children }) {
  const [requests, setRequests] = useState(loadRequests)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
  }, [requests])

  const value = useMemo(() => {
    const countByCourse = requests.reduce((acc, r) => {
      acc[r.courseId] = (acc[r.courseId] || 0) + 1
      return acc
    }, {})

    const spotsLeft = (course) =>
      Math.max(0, course.capacity - course.enrolled - (countByCourse[course.id] || 0))

    const enroll = ({ courseId, name, email, phone }) => {
      const course = courses.find((c) => c.id === courseId)
      if (!course || spotsLeft(course) === 0) return false
      setRequests((prev) => [
        ...prev,
        { courseId, name, email, phone, date: new Date().toISOString() },
      ])
      return true
    }

    return { requests, spotsLeft, enroll }
  }, [requests])

  return <EnrollmentContext.Provider value={value}>{children}</EnrollmentContext.Provider>
}

export function useEnrollment() {
  const ctx = useContext(EnrollmentContext)
  if (!ctx) throw new Error('useEnrollment must be used within EnrollmentProvider')
  return ctx
}
