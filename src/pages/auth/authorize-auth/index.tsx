import { DefaultAuthLayout } from '@/components/modules/layouts/default-auth-layout';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();

  return (
    <DefaultAuthLayout
      title="Authorize your login"
      note={`We have sent an email to authorize this authentication  to m***@gmai.com.`}
    >
      <p className="text-sm text-gray-500 mb-4">
        Didn’t receive the email? Check your spam folder or
      </p>
      <div className="w-full  mx-auto space-y-5">
        <Button className="w-full"> Resend</Button>
        <Button
          className="w-full"
          variant={'outline'}
          onClick={() => router.push('/auth/signin')}
        >
          {' '}
          Back to Login
        </Button>
      </div>
    </DefaultAuthLayout>
  );
};

export default SignInPage;
