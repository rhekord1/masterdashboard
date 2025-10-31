import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/components">Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Ben Dork</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        {/* CONTAINER */}
        <div className='mt-4 flex flex-col xl:flex-row gap-8 '> 
            {/* LEFT SIDE */}
            <div className='w-full xl:w-1/3 space-y-6'>
            {/* USER BADGES CONTAINER */}
            <div className='bg-primary-foreground p-4 rounded-lg '>
              <h1 className='text-xl font-semibold '>User Badges</h1>
              <div className='flex gap-4 mt-4'>
                <HoverCard>
                  <HoverCardTrigger><BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 ' /></HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verfied User</h1>
                    <p>This user has been verified by the admin</p>
                  </HoverCardContent>
                </HoverCard>  
                <HoverCard>
                  <HoverCardTrigger><Shield size={36} className='rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 ' /></HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className='font-bold mb-2'>Admin</h1>
                    <p>Admin users have access to all features and can manage users.</p>
                  </HoverCardContent>
                </HoverCard> 
                <HoverCard>
                  <HoverCardTrigger><Candy size={36} className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 ' /></HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className='font-bold mb-2'>Awarded</h1>
                    <p>This user has been awarded for their contributions</p>
                  </HoverCardContent>
                </HoverCard> 
                <HoverCard>
                  <HoverCardTrigger><Citrus size={36} className='rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2 ' /></HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className='font-bold mb-2'>Popular</h1>
                    <p>This user has been popular in the community</p>
                  </HoverCardContent>
                </HoverCard> 

                
              </div>

            </div>
            {/* INFO CONTAINER */}
            <div className='bg-primary-foreground p-4 rounded-lg '>
               <h1 className='text-xl font-semibold '>User Information</h1>
               <div className='space-y-4 mt-4'>
                 <div className='flex flex-col gap-2 mb-8'>
                  <p className='text-sm text-muted-foreground'>Profile completion</p>
                  <Progress value={63} />
                  </div>
                  <div className='flex items-center gap-2'>
                    <span>USername:</span>
                    <span>Goku Bediako</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span>Email:</span>
                    <span>gokubediako@gmail.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span>Phone:</span>
                    <span>+233 203487678</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span>Location:</span>
                    <span>Konoha Ahenkro</span>
                  </div>
                   <div className='flex items-center gap-2'>
                    <span>Role:</span>
                    <Badge>Admin</Badge>
                  </div>
               </div>
               <p className='text-sm text-muted-foreground mt-4'>Join on 2025.01.01</p>
               </div>

            </div>
            {/* CARD LIST CONTAINER */}
            <div className='bg-primary-foreground p-4 rounded-lg '>
              <CardList title="Recent Transactions"/>
            </div>
            
            {/* RIGHT SIDE */}
            <div className='w-full xl:w-2/3 space-y-6'>
            {/* USER CARD CONTAINER */}
             <div className='bg-primary-foreground p-4 rounded-lg '>User Card</div>
            {/* CHART CONTAINER */}
             <div className='bg-primary-foreground p-4 rounded-lg '> Chart</div>
            </div>
        </div>
        </Breadcrumb>
    </div>
  )
}

export default page