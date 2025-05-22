
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserPlus, LogIn } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export const AuthDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const { signIn, signUp, loading } = useAuth();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      if (activeTab === 'login') {
        await signIn(values.email, values.password);
        form.reset();
        setIsOpen(false);
      } else {
        await signUp(values.email, values.password);
        // Don't close dialog after signup since they need to verify email
        form.reset();
      }
    } catch (error) {
      console.error(error);
      // Error handling is done in the auth context
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-crafted-gold hover:bg-crafted-gold/80 text-crafted-brown">
          <LogIn className="mr-2 h-4 w-4" /> Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-crafted-cream border border-crafted-gold">
        <DialogHeader>
          <DialogTitle className="text-center text-crafted-brown font-serif text-2xl">
            {activeTab === 'login' ? 'Welcome Back' : 'Join Crafted By Choice'}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'login' | 'register')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-crafted-brown/10">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-crafted-brown">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        type="email"
                        className="border-crafted-gold/50 focus:border-crafted-gold" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-crafted-brown">Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        className="border-crafted-gold/50 focus:border-crafted-gold" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full mt-4 bg-crafted-brown text-crafted-cream hover:bg-crafted-brown/90"
                disabled={loading}
              >
                {loading ? "Processing..." : activeTab === 'login' ? "Sign In" : "Create Account"}
              </Button>
            </form>
          </Form>
          
          <TabsContent value="login" className="mt-2 text-center text-sm text-crafted-brown">
            Sign in to access your saved workbooks
          </TabsContent>
          <TabsContent value="register" className="mt-2 text-center text-sm text-crafted-brown">
            Create an account to save your progress across devices
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export const AuthButton: React.FC = () => {
  const { user, signOut } = useAuth();
  
  if (user) {
    return (
      <Button 
        onClick={signOut}
        variant="outline" 
        className="border-crafted-gold text-crafted-brown hover:bg-crafted-gold/20"
      >
        Sign Out
      </Button>
    );
  }
  
  return <AuthDialog />;
};
