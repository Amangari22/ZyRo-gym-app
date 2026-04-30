import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import LandingPage from './pages/LandingPage';
import PlanDetail from './pages/PlanDetail';
import OnboardingForm from './components/OnboardingForm';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import DietPlan from './components/DietPlan';
import WorkoutPlan from './components/WorkoutPlan';
import Chatbot from './components/Chatbot';
import BrandIdentityShowcase from './pages/BrandIdentityShowcase';
import PersonalizedPlan from './pages/PersonalizedPlan';
import MyPlan from './pages/MyPlan';

import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="noise-overlay" />
      <Navbar />
      <div> {/* Removed global padding to allow full-screen hero */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <LandingPage />
              </PageTransition>
            } />
            <Route path="/plan/:planId" element={
              <PageTransition>
                <PlanDetail />
              </PageTransition>
            } />
            <Route path="/brand-identity" element={
              <PageTransition>
                <BrandIdentityShowcase />
              </PageTransition>
            } />
            <Route path="/plan-result" element={
              <PageTransition>
                <PersonalizedPlan />
              </PageTransition>
            } />
            <Route path="/start-plan" element={
              <PageTransition>
                <OnboardingForm />
              </PageTransition>
            } />

            <Route path="/my-plan" element={
              <PageTransition>
                <MyPlan />
              </PageTransition>
            } />

            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={
                <PageTransition>
                  <Overview />
                </PageTransition>
              } />
              <Route path="diet" element={
                <PageTransition>
                  <DietPlan />
                </PageTransition>
              } />
              <Route path="workout" element={
                <PageTransition>
                  <WorkoutPlan />
                </PageTransition>
              } />
              <Route path="sleep" element={
                <PageTransition>
                  <div style={{ color: 'white', padding: '20px' }}>Sleep Module Coming Soon</div>
                </PageTransition>
              } />
              <Route path="support" element={
                <PageTransition>
                  <div style={{ color: 'white', padding: '20px' }}>Support Module Coming Soon</div>
                </PageTransition>
              } />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;
