import { useState } from 'react';
import { DefaultAuthLayout } from '@/components/layouts/default_auth_layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { ENDPOINT_ENUM } from '@/enums/endpoint';
import Link from 'next/link';

const SignInPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    username: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [key]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, {
        email: formData.email,
        username: formData.username,
      });

      if (response.data) {
        toast.success('Signed in successfully');
        router.push('/dashboard');
      }
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        toast.error(error.response?.data?.message || 'Failed to sign in');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultAuthLayout
      title="Welcome back to Bllow"
      note={`We've missed you! Sign in to unlock your creators rights`}
    >
      <div className="w-full max-w-[400px] mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            error={errors.email}
          />
          <Input
            label="Username"
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={e => handleChange('username', e.target.value)}
            error={errors.username}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className=" text-sm">
          <span className="text-muted-foreground">
            Would you love to own an account?{' '}
          </span>
          <Link href={'/auth'} className="text-primary  font-bold">
            Sign up
          </Link>
        </div>
      </div>
    </DefaultAuthLayout>
  );
};

export default SignInPage;
