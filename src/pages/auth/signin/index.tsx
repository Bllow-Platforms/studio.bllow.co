import { DefaultAuthLayout } from '@/components/modules/layouts/default-auth-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/schema';
import { AuthService } from '@/services/auth-service';
import { useMutation } from '@tanstack/react-query';
import DefaultLoadingPage from '@/components/modules/loaders/default-loader';

type SignInSchema = z.infer<typeof signInSchema>;

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: (data: SignInSchema) => AuthService.signIn(data),
    onSuccess: response => {
      toast.success('Signed in successfully');
      router.push(
        `/auth/authorize-auths?email=${encodeURIComponent(response.data.user.email)}`
      );
    },
    onError: (error: any) => {
      try {
        if (errorData.errors) {
          Object.entries(errorData.errors).forEach(([key, value]) => {
            setError(key as keyof SignInSchema, {
              message: value as string,
            });
          });
        } else {
          toast.error(errorData.message || 'Failed to sign in');
          console.log(error);
        }
      } catch (parseError) {
        toast.error(error.response?.data?.message || 'Failed to sign in');
        console.log(error);
      }
    },
  });

  const onSubmit = (data: SignInSchema) => {
    signIn(data);
  };

  if (isPending) {
    return <DefaultLoadingPage />;
  }

  return (
    <DefaultAuthLayout
      title="Welcome back to Bllow"
      note={`We've missed you! Sign in to unlock your creators rights`}
    >
      <div className="w-full max-w-[400px] mx-auto space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="name@example.com"
            {...register('email')}
            error={errors.email?.message}
          />
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Username
            </label>
            <div className="w-full flex items-center border border-input rounded-full pl-4">
              <p className="text-sm">bllow.co/</p>
              <Input
                className="border-none"
                placeholder="username"
                {...register('username')}
              />
            </div>
            {errors.username?.message && (
              <p className="text-sm text-destructive">{errors.username.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="text-sm">
          <span className="text-muted-foreground">
            Would you love to own an account?{' '}
          </span>
          <Link href={'/auth'} className="text-primary font-bold">
            Sign up
          </Link>
        </div>
      </div>
    </DefaultAuthLayout>
  );
};

export default SignInPage;
