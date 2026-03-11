'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { StudentProfile, CourseProgress, DayRecord, GradeId } from '@/lib/types';
import { courses, getTestDays } from '@/data/curriculum';

const DEFAULT_PROFILE: StudentProfile = {
  name: '',
  createdAt: new Date().toISOString(),
  courses: {},
};

function createDefaultCourseProgress(): CourseProgress {
  return {
    level: 1,
    xp: 0,
    badges: [],
    streak: 0,
    lastStudyDate: '',
    days: { 1: { status: 'available' } },
  };
}

export function useProgress() {
  const [profile, setProfile, isLoaded] = useLocalStorage<StudentProfile>(
    'math50days-profile',
    DEFAULT_PROFILE
  );

  const getCourseProgress = useCallback((gradeId: GradeId): CourseProgress => {
    return profile.courses[gradeId] || createDefaultCourseProgress();
  }, [profile]);

  const initCourse = useCallback((gradeId: GradeId) => {
    setProfile(prev => ({
      ...prev,
      courses: {
        ...prev.courses,
        [gradeId]: prev.courses[gradeId] || createDefaultCourseProgress(),
      },
    }));
  }, [setProfile]);

  const getDayStatus = useCallback((gradeId: GradeId, dayNumber: number): DayRecord => {
    const progress = getCourseProgress(gradeId);
    return progress.days[dayNumber] || { status: 'locked' };
  }, [getCourseProgress]);

  const completeDay = useCallback((gradeId: GradeId, dayNumber: number, score?: number) => {
    setProfile(prev => {
      const courseProgress = prev.courses[gradeId] || createDefaultCourseProgress();
      const today = new Date().toISOString().split('T')[0];
      const isStreakDay = courseProgress.lastStudyDate ===
        new Date(Date.now() - 86400000).toISOString().split('T')[0];

      const xpGain = getTestDays(gradeId).includes(dayNumber) ? 50 : 30;

      const newDays = { ...courseProgress.days };
      newDays[dayNumber] = {
        ...newDays[dayNumber],
        status: 'completed',
        completedAt: new Date().toISOString(),
        practiceScore: score,
      };

      // Unlock next day
      const nextDay = dayNumber + 1;
      if (nextDay <= courses[gradeId].totalDays) {
        if (!newDays[nextDay] || newDays[nextDay].status === 'locked') {
          newDays[nextDay] = { status: 'available' };
        }
      }

      // Calculate level based on completed parts
      const completedParts = courses[gradeId].parts.filter(part => {
        for (let d = part.startDay; d <= part.endDay; d++) {
          if (newDays[d]?.status !== 'completed') return false;
        }
        return true;
      }).length;

      return {
        ...prev,
        courses: {
          ...prev.courses,
          [gradeId]: {
            ...courseProgress,
            xp: courseProgress.xp + xpGain,
            streak: isStreakDay ? courseProgress.streak + 1 : 1,
            lastStudyDate: today,
            days: newDays,
            level: completedParts + 1,
          },
        },
      };
    });
  }, [setProfile]);

  const addXP = useCallback((gradeId: GradeId, amount: number) => {
    setProfile(prev => {
      const courseProgress = prev.courses[gradeId] || createDefaultCourseProgress();
      return {
        ...prev,
        courses: {
          ...prev.courses,
          [gradeId]: {
            ...courseProgress,
            xp: courseProgress.xp + amount,
          },
        },
      };
    });
  }, [setProfile]);

  const setName = useCallback((name: string) => {
    setProfile(prev => ({ ...prev, name }));
  }, [setProfile]);

  const getCompletedDaysCount = useCallback((gradeId: GradeId): number => {
    const progress = getCourseProgress(gradeId);
    return Object.values(progress.days).filter(d => d.status === 'completed').length;
  }, [getCourseProgress]);

  return {
    profile,
    isLoaded,
    getCourseProgress,
    getDayStatus,
    completeDay,
    addXP,
    initCourse,
    setName,
    getCompletedDaysCount,
  };
}
