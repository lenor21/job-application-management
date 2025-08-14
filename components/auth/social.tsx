import { Button } from '@/components/ui/button';
import { Facebook, Mail } from 'lucide-react';

export function Social() {
  const onClick = (provider: string) => {
    console.log(provider);
  };

  return (
    <div className='flex flex-col gap-y-5'>
      <Button
        variant='outline'
        className='w-full'
        onClick={() => onClick('google')}
      >
        <Mail />
        Login with Google
      </Button>
      <Button
        variant='outline'
        className='w-full'
        onClick={() => onClick('facebook')}
      >
        <Facebook />
        Login with Facebook
      </Button>

      <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
        <span className='bg-card text-muted-foreground relative z-10 px-2'>Or continue with</span>
      </div>
    </div>
  );
}
