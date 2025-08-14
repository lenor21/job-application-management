'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BackButton } from '@/components/auth/back-button';
import { Social } from '@/components/auth/social';

interface CardWrapperProps {
  children: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({ children, cardTitle, cardDescription, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) {
  return (
    <Card className='w-[300px] md:w-[400px]'>
      <CardHeader>
        <CardTitle className='text-xl text-center'>{cardTitle}</CardTitle>
        <CardDescription className='text-center'>{cardDescription}</CardDescription>
      </CardHeader>
      {showSocial && (
        <>
          <CardHeader>
            <Social />
          </CardHeader>
        </>
      )}
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
