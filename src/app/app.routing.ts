import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';

import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherQuizComponent } from './teacher-quiz/teacher-quiz.component';
import { TeacherAssignmentsComponent } from './teacher-assignments/teacher-assignments.component';

import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentEnrolledCoursesComponent } from './student-enrolled-courses/student-enrolled-courses.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { LoginComponent } from './login/login.component';
import { StudentCourseHomeComponent } from './student-course-home/student-course-home.component';
import { StudentFeedbackSessionComponent } from './student-feedback-session/student-feedback-session.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';

import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminTeacherComponent } from './admin-teacher/admin-teacher.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent /*,canActivate:[AuthGuard]*/ },
  { path: 'dashboard', component: DashboardComponent /*,canActivate:[AuthGuard]*/ },
  { path: 'user', component: UserProfileComponent /*,canActivate:[AuthGuard]*/ },
  { path: 'table-list', component: TableListComponent /*,canActivate:[AuthGuard]*/ },
  { path: 'icons', component: IconsComponent /*,canActivate:[AuthGuard]*/ },
  { path: 'notifications', component: NotificationsComponent /*,canActivate:[AuthGuard]*/ },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent /*,canActivate:[AuthGuard]*/},

  //Teacher Dashboard routes
  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  { path: 'courses/:id', component: TeacherCourseComponent },
  { path: 'courses/:cId/quiz/:qId', component: TeacherQuizComponent },
  { path: 'courses/:cId/assignments/:assignId', component: TeacherAssignmentsComponent },

  // Student Routes
  { path: 'student-home', component: StudentHomeComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-enrolled-courses', component: StudentEnrolledCoursesComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-courses', component: StudentCoursesComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-feedback', component: StudentFeedbackComponent /*,canActivate:[AuthGuard]*/},
  { path: 'login', component: LoginComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-quiz', component: StudentQuizComponent /*,canActivate:[AuthGuard]*/},
  {path: 'view-profile/:userId', component: UpdateProfileComponent /*,canActivate:[AuthGuard]*/},
  { path: 'review-quiz/:quizId', component: QuizReviewComponent /*,canActivate:[AuthGuard]*/},

  { path: 'login', component: LoginComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-enrolled-courses/:cId', component: StudentCourseHomeComponent /*,canActivate:[AuthGuard]*/},
  { path: 'student-feedback/:fId', component: StudentFeedbackSessionComponent /*,canActivate:[AuthGuard]*/},

  { path: 'student-quiz/:quizId', component: StudentQuizComponent /*,canActivate:[AuthGuard]*/},
  { path: 'review-quiz/:quizId', component: QuizReviewComponent /*,canActivate:[AuthGuard]*/},

  //Course Routes
  { path: 'admin/courses', component: AdminCourseComponent /*,canActivate:[AuthGuard]*/},
  { path: 'admin/students', component: AdminStudentComponent },
  { path: 'admin/departments', component: AdminDepartmentComponent },
  { path: 'admin/teachers', component: AdminTeacherComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
