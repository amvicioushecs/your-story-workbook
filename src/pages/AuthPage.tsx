import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthDialog } from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';

const AuthPage: React.FC = () => {
  const { user } = useAuth();

  // Redirect authenticated users to workbook
  if (user) {
    return <Navigate to="/workbook" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Crafted By Choice
          </h1>
          <p className="text-muted-foreground">
            Create an account to save your workbook progress
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-lg p-6 border">
          <AuthDialog />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;